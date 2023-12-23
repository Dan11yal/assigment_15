import VLabels from '../components/Content/VLabels.vue'

//👇 This default export determines where your story goes in the story list
export default {
  component: VLabels,
  title: 'Content/VLabels',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { VLabels },
    props: Object.keys(argTypes),
    template: '<VLabels v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};