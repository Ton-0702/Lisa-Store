import { CardImg } from "./CardImg";
import category2 from "../../assets/category2.svg"
export default{
    title: "/Example/CardImg",
    component: CardImg,
}

const Template = (args) => <CardImg {...args}>Sales</CardImg>

export const primary_Card = Template.bind({});
primary_Card.args ={
    imgpic: category2,
    type: "category",
    detailNameCategory: "Manto",
    detailQuantity: "86 Product",
}


const Template2 = (args) => <CardImg {...args}>Hot</CardImg>
// export const primary_CardProduct = Template2.bind({});
export const primary_CardProduct = Template2.bind({});
primary_CardProduct.args= {
        imgpic: category2,
        nameProduct:"dasfdasfdasfdasfdasf",
        textType: "Dress",
        textPrice: "$156.33"
    }

    const Template3 = (args) => <CardImg {...args}>Sales</CardImg>
    // export const primary_CardProduct = Template2.bind({});
    export const primary_CardProductNoSale = Template3.bind({});
    primary_CardProductNoSale.args= {
            imgpic: category2,
            nameProduct:"dasfdasfdasfdasfdasf",
            textType: "Dress",
            textPrice: "$156.33"
        }
    
