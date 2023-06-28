import { ButtonIcon } from "./ButtonIcon";
import shopping from "../../assets/shopingwhite.svg"
export default {
    title: "Example/ButtonIcon",
    component: ButtonIcon,
    args: { primary: true },
}

const Template = (args) => <ButtonIcon {...args}></ButtonIcon>;

export const primary_ButtonIcon = Template.bind({});
primary_ButtonIcon.args ={
    imgpic: shopping,
    type: "true"
}


export const primary_ButtonIconSmall = {
    args: {
        imgpic: shopping,
    },
  };
