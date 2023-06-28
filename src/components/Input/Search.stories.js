import { Search } from "./Search";
export default {
    title: 'Example/Search',
    component: Search,
    args: { primary: true },
}

const Template = (args) => <Search {...args}>Button</Search>;

export const Primary = Template.bind({});