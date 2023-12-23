import FToggles from '../components/Forms/FToggles.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: FToggles,
  title: 'Inputs/FToggles',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { FToggles },
    props: Object.keys(argTypes),
    template: '<FToggles v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};