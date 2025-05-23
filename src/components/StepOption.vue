<template>
  <div v-if="showOption">
    <label class="radio">
      <input
        type="radio"
        :value="option.key"
        :name="questionKey"
        :checked="modelValue === option.key"
        @change="$emit('update:modelValue', option.key)"
      />
      {{ option.text }}
    </label>

    <a
      v-if="option.description"
      tabindex="0"
      class="readmore"
      @click="showExplanation"
      @keyup.enter="showExplanation"
    >
      Toelichting
    </a>

    <AdditionalInfo
      :title="option.text"
      :description="explanation"
      :open="open"
      @togglePanel="togglePanel"
    />
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'StepOption',

    components: {
      AdditionalInfo
    },

    props: {
      option: {
        type: Object,
        required: true
      },
      questionKey: {
        type: String,
        required: true
      },
      modelValue: {
        type: String,
        default: null
      }
    },

    data() {
      return {
        open: false
      };
    },

    computed: {
      ...mapState(['isMultiple', 'allSelected', 'multipleComponents', 'multipleComponentNo']),

      showMultiple() {
        if (this.option.key !== 'moreMultipleWorks') return true;
        if (!this.isMultiple) return true;
        return false;
      },

      showWhoRights() {
        let answer = this.allSelected.filter(option => option.question === 'maker');
        if (this.isMultiple) {
          const component = this.multipleComponents[this.multipleComponentNo - 1]?.steps || [];
          answer = component.filter(option => option.question === 'maker');
        }

        if (!answer[0]) return true;
        if (answer[0].selected === 'person') {
          if (
            this.option.key !== 'makerHasRightsLegal' &&
            this.option.key !== 'makerHasRightsMore'
          )
            return true;
        } else if (answer[0].selected === 'legal') {
          if (
            this.option.key !== 'makerHasRightsPerson' &&
            this.option.key !== 'makerHasRightsMore' &&
            this.option.key !== 'printerProducer' &&
            this.option.key !== 'movieAudio'
          )
            return true;
        } else if (answer[0].selected === 'moreOneWork') {
          if (
            this.option.key !== 'makerHasRightsPerson' &&
            this.option.key !== 'makerHasRightsLegal'
          )
            return true;
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
        return this.option.description.map(p => `<p>${p}</p>`).join('');
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
