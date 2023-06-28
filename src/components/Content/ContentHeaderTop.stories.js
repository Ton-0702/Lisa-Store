import { ContentHeaderTop } from "./ContentHeaderTop";

export default {
    title: "Example/ContentHeaderTop",
    component: ContentHeaderTop,
    args: { primary: true },
}

const Template = (args) => <ContentHeaderTop {...args}></ContentHeaderTop>;

export const primary_ContentHeaderTop = Template.bind({});
primary_ContentHeaderTop.args ={
    width: "90%",
    titleContent: "Collections",
    Content: "you can explore ans shop many differnt collection from various barands here.",
}