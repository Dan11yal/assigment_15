import SidebarMenu from '../components/Content/SidebarMenu.vue'

//👇 This default export determines where your story goes in the story list
export default {
  component: SidebarMenu,
  title: 'Content/SidebarMenu',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { SidebarMenu },
    props: Object.keys(argTypes),
    template: '<SidebarMenu v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};