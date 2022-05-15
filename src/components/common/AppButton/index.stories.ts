import AppButton from "./index.vue";

export default {
  title: 'Example/Buttons',
  component: AppButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {}
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AppButton v-bind="args" />',
});

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  label: "Primary button",
  classes: "px-3 py-1 rounded-lg bg-blue-700 hover:bg-blue-600 text-white"
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  label: "Secondary button",
  classes: "p-2"
};

export const TertiaryButton = Template.bind({});

TertiaryButton.args = {
  label: "Tertiary button",
  classes: "p-3"
};