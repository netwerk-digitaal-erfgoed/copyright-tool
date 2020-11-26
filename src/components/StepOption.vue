<template>
  <div v-if="showOption">
    <label class="radio">
      <input
        type="radio"
        :value="option.key"
        :name="questionKey"
        v-model="selected"
      /> {{ option.text }}
    </label>
    <a tabindex="0" class="readmore" v-if="option.description" @click="showExplanation">
      Toelichting
    </a>
    <AdditionalInfo
      :title="option.text"
      :description="explanation"
      :open="open"
      @togglePanel="togglePanel($event)"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import AdditionalInfo from './AdditionalInfo.vue';

  export default {
    name: 'StepOption',

    components: {
      AdditionalInfo
    },

    props: {
      option: Object,
      questionKey: String
    },

    data() {
      return {
        open: false
      };
    },

    computed: {
      ...mapState(['isMultiple', 'allSelected', 'multipleComponents', 'multipleComponentNo']),
      selected: {
        get() {
          return this.option;
        },
        set() {
          this.$emit('change', this.option);
        }
      },
      showMultiple() {
        if (this.option.key !== 'moreMultipleWorks') return true;
        if (!this.isMultiple) return true;
        return false;
      },
      showWhoRights() {
        let answer = this.allSelected.filter(option => option.question === 'maker');
        if (this.isMultiple) {
          const component = this.multipleComponents[this.multipleComponentNo-1].steps;
          answer = component.filter(option => option.question === 'maker');
        }

        if (!answer[0]) return true;
        if (answer[0].selected === 'person') {
          if (this.option.key !== 'makerHasRightsLegal' &&
            this.option.key !== 'makerHasRightsMore'
          ) return true;
        } else if (answer[0].selected === 'legal') {
          if (this.option.key !== 'makerHasRightsPerson' &&
            this.option.key !== 'makerHasRightsMore'
          ) return true;
        } else if (answer[0].selected === 'moreOneWork') {
          if (this.option.key !== 'makerHasRightsPerson' &&
            this.option.key !== 'makerHasRightsLegal'
          ) return true;
        }
        return false;
      },
      showOption() {
        if (this.questionKey === 'maker') return this.showMultiple;
        if (this.questionKey === 'whoRights') return this.showWhoRights;
        return true;
      },
      explanation() {
        if (!this.option.description) return null;
        let text = '';
        for (let i = 0; i < this.option.description.length; i++) {
          text += `<p>${this.option.description[i]}</p>`;
        }
        return text;
      }
    },

    methods: {
      showExplanation() {
        this.open = true;
      },
      togglePanel(toggle) {
        this.open = toggle;
      }
    }
  };
</script>
