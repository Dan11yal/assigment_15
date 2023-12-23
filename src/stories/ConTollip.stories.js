import ConTollip from '../components/Content/ConTollip.vue'

//👇 This default export determines where your story goes in the story list
export default {
  component: ConTollip,
  title: 'Content/ConTollip',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { ConTollip },
    props: Object.keys(argTypes),
    template: '<ConTollip v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};