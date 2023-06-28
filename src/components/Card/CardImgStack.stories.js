import { CardImgStack } from "./CardImgStack";
import product12 from "../../assets/product12.svg"
export default{
    title: "/Example/CardImgStack",
    component: CardImgStack,
}

const Template = (args) => <CardImgStack {...args}></CardImgStack>

export const primary_CardImgStack = Template.bind({});
primary_CardImgStack.args ={
    imgpic: product12,
}

