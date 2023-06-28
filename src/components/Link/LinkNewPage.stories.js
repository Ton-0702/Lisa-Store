import { LinkNewPage } from "./LinkNewPage";
export default {
    title: 'Example/LinkNewPage',
    component: LinkNewPage,
    args: { primary: true },
}

const Template = (args) => <LinkNewPage {...args}></LinkNewPage>;

export const primary_Link = Template.bind({});