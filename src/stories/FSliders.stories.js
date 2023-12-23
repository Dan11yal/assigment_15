import FSliders from '../components/Forms/FSliders.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: FSliders,
  title: 'Inputs/FSliders',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { FSliders },
    props: Object.keys(argTypes),
    template: '<FSliders v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};