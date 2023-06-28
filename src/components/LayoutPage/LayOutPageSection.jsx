import { styled } from "styled-components";
import brand1 from "../../assets/brand-1.svg"
import brand2 from "../../assets/brand-2.svg"
import brand3 from "../../assets/brand-3.svg"
import brand4 from "../../assets/brand-4.svg"
import brand5 from "../../assets/brand-5.svg"
import category1 from "../../assets/category1.svg"
import category2 from "../../assets/category2.svg"
import category3 from "../../assets/category3.svg"
import category4 from "../../assets/category4.svg"
import category5 from "../../assets/category5.svg"
import { CardImg } from "../Card/CardImg";
import filter from "../../assets/filter.svg"
import portduct1 from "../../assets/image-product-3.svg"
import portduct2 from "../../assets/image-product-4.svg"
import portduct3 from "../../assets/image-product-5.svg"
import portduct4 from "../../assets/image-product.svg"
import portduct5 from "../../assets/image-product-7.svg"
import portduct6 from "../../assets/image-product-6.svg"
import portduct7 from "../../assets/image-product-1.svg"
import portduct8 from "../../assets/image-product-2.svg"
import brand_baner from "../../assets/brand-banner.svg"
import logo_baner from "../../assets/zara.svg"
import { ButtonNoIcon } from "../Button/ButtonNoIcon";
import { Carousel } from "../Carousel";


const dataImg = [
    {
        id:0,
        imgpic: portduct1,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Adicolor Classics Joggers",
        textType: "Dress",
        textPrice: "$63.85",
        typePrice: "",
        textPriceOrigin: "",
    },

    {
        id:1,
        imgpic: portduct2,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Nike Sportswear Futura Luxe",
        textType: "Bag",
        textPrice: "$130.00",
        typePrice: "",
        textPriceOrigin: "",
    },

    {
        id:2,
        imgpic: portduct3,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Geometric print Scarf",
        textType: "scarf",
        textPrice: "$53.00",
        typePrice: "",
        textPriceOrigin: "",
    },

    {
        id:3,
        imgpic: portduct4,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Yellow Reserved Hoodie",
        textType: "Dress",
        textPrice: "$155.00",
        typePrice: "sale",
        textPriceOrigin: "$364.00",
    },

    {
        id:4,
        imgpic: portduct5,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Basic Dress Green",
        textType: "Dress",
        textPrice: "$236.00",
        typePrice: "hot",
        textPriceOrigin: "",
    },

    {
        id:5,
        imgpic: portduct6,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Nike Air Zoom Pegasus",
        textType: "shoe",
        textPrice: "$198.00",
        typePrice: "sale",
        textPriceOrigin: "$220.00",
    },

    {
        id:6,
        imgpic: portduct7,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Nike Repel Miler",
        textType: "Dress",
        textPrice: "$120.50",
        typePrice: "",
        textPriceOrigin: "",
    },

    {
        id:7,
        imgpic: portduct8,
        detailNameCategory: "Manto",
        detailQuantity: "86 Product",
        nameProduct: "Nike Sportswear Futura Luxe",
        textType: "Glasses",
        textPrice: "$160.00",
        typePrice: "",
        textPriceOrigin: "",
    },
]



const ContainerSectionStyled = styled.section`
    width: 1300px;
    margin: 80px auto;

    .brand{
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        img{
            width: 225px;
            height: 80px;
            margin-right: 20px;
        }
    }

    .category-grid{
        /* display: grid;
        grid-template-columns: 49% 24% 24%;
        grid-template-rows: auto 49.63%;
        margin-bottom: 50px;
        column-gap: 20px; */
        display: grid;
        grid-template-columns: 49% 24% 24%;
        grid-template-rows: auto 48.9%;
        margin-bottom: 50px;
        column-gap: 14px;

        .category-grid-item:first-child{
            grid-row-start: 1; 
            grid-row-end: 3;
            position: relative;

            .textRotate{
                position: absolute;
                top: 256px;
                font-size: 36px;
                left: -273px;
                transform: rotate(-90deg);
            } 
        }

    }
    

    .headingProduct{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 59px;
        text-align: center;
        text-transform: capitalize;
        color: #000000;
        margin-bottom: 20px;
    }

    .sectionProduct{
        display: flex;
        flex-direction: column;

        .headerProduct{  
            display: flex;
            justify-content: space-between;
            
            .linkProduct{
                .textProductMain{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    text-transform: capitalize;
                    color: #000000;
                    margin-left: 10px;
                    background: unset;
                    border: unset;
                }
                
                .textProduct{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 22px;
                    text-transform: capitalize;
                    color: rgba(0, 0, 0, 0.5);
                    margin-left: 10px;
                    background: unset;
                    border: unset;
                }
            }

            .filter{
                display: flex;
                align-items: center;
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                text-transform: capitalize;
                color: #FFFFFF;
                background: #1E2832;
                cursor: pointer;
            }

            .filter::before{
                content: " ";
                display: inline-block;
                background-image:url(${filter});
                width: 18px;
                height: 13px;
                background-repeat: no-repeat;
                margin-right: 6px;
            }
        }

        .listProduct{
            margin-top: 30px;
            margin-bottom: 150px;
            display:grid;
            grid-template-columns: auto auto auto auto;
            row-gap: 80px;
            column-gap: 20px;
        }

        .listProduct2{
            margin-top: 30px;
            margin-bottom: 40px;
            /* display:grid;
            grid-template-columns: auto auto auto auto;
            row-gap: 80px;
            column-gap: 20px; */
        }

        .hiddenProduct{
            display: none;
        }

        .brand-banner{
            margin-bottom: 150px;
            display: flex;
            justify-content: center;
            position: relative;

            .infoBanner{
                position: absolute;
                width: 530px;
                height: 500px;
                left: 800px;
                top: 175px;
                display: flex;
                flex-direction: column;
                /* background-color: aqua; */

                .infoBanner-title{
                    width: 191px;
                    height: 81px;
                    background: url(${logo_baner});
                }

                .infoBanner-Content{
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 26px;
                    line-height: 40px;
                    margin: 40px 0px;
                    text-transform: capitalize;
                    color: #FF6F61;
                }
            }
        }  
    }

    @media (max-width: 1400px) {
        width: 1100px;
        .brand img{
            width: 200px;
        }

        .category-grid .category-grid-item:first-child .textRotate{
            top:207px;
            font-size: 35px;
        }

        /* .category-grid{
            display: grid;
            grid-template-columns: 49% 24% 24%;
            grid-template-rows: auto 48.9%;
            margin-bottom: 50px;
            column-gap: 14px;
        } */
    }
    @media (max-width: 1200px) {
        width: 1100px;

        .brand img{
            width: 200px;
        }
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
    }   
    @media (max-width: 576px) {
        width:150px;
       
    }    
`



export const LayOutPageSection = () => {
    const allProduct = (event) => {
        const id = event.target.id;
        // console.log("id: ", id);
        const classId = event.target.className;
        // console.log("classId: ", classId);
        const idProduct = document.getElementById(id)

        if (classId === "textProductMain") {
            idProduct.classList.add("textProductMain");
        } else {
            idProduct.classList.remove("textProduct");
            idProduct.classList.add("textProductMain");
        }

        const checkListClassNotMain = document.getElementsByName("product")
        const id_OverallProduct = document.getElementsByClassName("listProduct")

        for (let i = 0; i < checkListClassNotMain.length; i++) {

            if (checkListClassNotMain[i].id !== id) {
                console.log(checkListClassNotMain[i].id);
                checkListClassNotMain[i].classList.remove("textProduct");
                checkListClassNotMain[i].classList.remove("textProductMain");
                checkListClassNotMain[i].classList.add("textProduct");
            }
        }

        for (let i = 0; i < id_OverallProduct.length; i++) {
            if (id_OverallProduct[i].id !== "over" + id) {
                id_OverallProduct[i].classList.add("hiddenProduct");
            } else {
                id_OverallProduct[i].classList.remove("hiddenProduct")
            }
        }
    }

    const allProduct2 = (event) => {
        const id = event.target.id;
        // console.log("id: ", id);
        const classId = event.target.className;
        // console.log("classId: ", classId);
        const idProduct = document.getElementById(id)

        if (classId === "textProductMain") {
            idProduct.classList.add("textProductMain");
        } else {
            idProduct.classList.remove("textProduct");
            idProduct.classList.add("textProductMain");
        }

        const checkListClassNotMain = document.getElementsByName("product2")
        const id_OverallProduct = document.getElementsByClassName("listProduct2")

        for (let i = 0; i < checkListClassNotMain.length; i++) {

            if (checkListClassNotMain[i].id !== id) {
                console.log(checkListClassNotMain[i].id);
                checkListClassNotMain[i].classList.remove("textProduct");
                checkListClassNotMain[i].classList.remove("textProductMain");
                checkListClassNotMain[i].classList.add("textProduct");
            }
        }

        for (let i = 0; i < id_OverallProduct.length; i++) {
            if (id_OverallProduct[i].id !== "over" + id) {
                id_OverallProduct[i].classList.add("hiddenProduct");
            } else {
                id_OverallProduct[i].classList.remove("hiddenProduct")
            }
        }
    }

    return (
        <ContainerSectionStyled>
            <div className="brand">
                <img src={brand1} alt="brand" />
                <img src={brand5} alt="brand" />
                <img src={brand3} alt="brand" />
                <img src={brand4} alt="brand" />
                <img src={brand2} alt="brand" />
            </div>

            <div className="category-grid">
                <div className="category-grid-item">
                <CardImg type={"category"} imgpic={category1} detailNameCategory={"Manto"}
                                detailQuantity={"86 Product"} widthh={"100"}
                                bottom_detail={"4"}  width_detail={"100"}
                ></CardImg>
                <p className="textRotate">Explore new and popular styles</p>
                </div>
                
                <div className="category-grid-item">
                <CardImg
                        type={"category"} imgpic={category2} detailNameCategory={"Manto"}
                        detailQuantity={"86 Product"} widthh={"100"} bottom_detail={"4"}
                         width_detail={"100"} 
                    >
                    </CardImg>
                </div>

                <div className="category-grid-item">
                <CardImg
                        type={"category"} imgpic={category3} detailNameCategory={"Manto"}
                        detailQuantity={"86 Product"} widthh={"100"}
                        bottom_detail={"4"} width_detail={"100"}
                    >Sales
                    </CardImg>
                </div>

                <div className="category-grid-item">
                <CardImg
                        type={"category"} imgpic={category4}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"} widthh={"100"}
                        heightt={"296"} bottom_detail={"4"} width_detail={"100"}>
                    </CardImg>
                </div>

                <div className="category-grid-item">
                <CardImg
                        type={"category"} imgpic={category5}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        widthh={"100"} bottom_detail={"4"} width_detail={"100"}>
                    </CardImg>
                </div>
                   
            </div>
            {/* <div className="category">
                <div className="categoryLeft">
                    <div className="imgLeft">
                        <CardImg type={"category"} imgpic={category1} detailNameCategory={"Manto"}
                            detailQuantity={"86 Product"} widthh={"600"} heightt={"600"} marginleft={"47"}
                            bottom_detail={"4"} leftdetail={"47"} width_detail={"92.7"}
                        ></CardImg>
                        <p className="textRotate">Explore new and popular styles</p>
                    </div>

                </div>
                <div className="categoryRight">
                    <CardImg
                        type={"category"} imgpic={category2} detailNameCategory={"Manto"}
                        detailQuantity={"86 Product"} widthh={"313"} heightt={"296"} bottom_detail={"4"}
                        leftdetail={"27"} width_detail={"89"} marginleft={"18"} leftsales={"27"}
                    >
                    </CardImg>

                    <CardImg
                        type={"category"} imgpic={category3} detailNameCategory={"Manto"}
                        detailQuantity={"86 Product"} widthh={"313"} heightt={"296"}
                        bottom_detail={"4"} leftdetail={"27"} width_detail={"89"} marginleft={"18"} leftsales={"27"}
                    >Sales
                    </CardImg>

                    <CardImg
                        type={"category"} imgpic={category4}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"} widthh={"313"}
                        heightt={"296"} bottom_detail={"4"} leftdetail={"27"} width_detail={"89"} marginleft={"18"}
                        leftsales={"27"}>
                    </CardImg>

                    <CardImg
                        type={"category"} imgpic={category5}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        widthh={"313"} heightt={"296"} bottom_detail={"4"} leftdetail={"27"} width_detail={"89"} marginleft={"18"}
                        leftsales={"27"}>
                    </CardImg>
                </div>
            </div> */}

            <span className="headingProduct">Or subscribe to the newsletter</span>

            <div className="sectionProduct" id="sectionProduct">
                <div className="headerProduct">
                    <div className="linkProduct">
                        <button className="textProductMain " onClick={allProduct} id="allproduct" name="product">
                            All Product
                        </button>

                        <button className="textProduct " onClick={allProduct} id="productTshirt" name="product">
                            t-shirt
                        </button>

                        <button className="textProduct " onClick={allProduct} id="productHoodies" name="product">
                            hoodies
                        </button>

                        <button className="textProduct " onClick={allProduct} id="productJacket" name="product">
                            jacket
                        </button>
                    </div>

                    <button className="filter">
                        filter
                    </button>
                </div>

                <div className="listProduct" id="overallproduct">
                    <CardImg 
                        imgpic={portduct1}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct2}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Nike Sportswear Futura Luxe"} textType={"Bag"} textPrice={"$130.00"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct3}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Geometric print Scarf"} textType={"scarf"} textPrice={"$53.00"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct4}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Yellow Reserved Hoodie"} textType={"Dress"} textPrice={"$155.00"}
                        typePrice={"sale"} textPriceOrigin={"$364.00"}>sale
                    </CardImg>
                    <CardImg
                        imgpic={portduct5}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}>hot
                    </CardImg>
                    <CardImg
                        imgpic={portduct6}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}
                        typePrice={"sale"} textPriceOrigin={"$220.00"}>sale
                    </CardImg>
                    <CardImg
                        imgpic={portduct7}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct8}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}>
                    </CardImg>
                </div>

                <div className="listProduct hiddenProduct" id="overproductTshirt">
                    <CardImg
                        imgpic={portduct1}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Adicolor Classics Joggers"} textType={"Dress"} textPrice={"$63.85"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct2}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Nike Sportswear Futura Luxe"} textType={"Bag"} textPrice={"$130.00"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct3}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Geometric print Scarf"} textType={"scarf"} textPrice={"$53.00"}>
                    </CardImg>
                    <CardImg
                        imgpic={portduct4}
                        detailNameCategory={"Manto"} detailQuantity={"86 Product"}
                        bottom_detail={"0"} marginleft={"18"}
                        nameProduct={"Yellow Reserved Hoodie"} textType={"Dress"} textPrice={"$155.00"}
                        typePrice={"sale"} textPriceOrigin={"$364.00"}>sale
                    </CardImg>
                </div>

                <div className="brand-banner">
                    <img src={brand_baner} alt="banner" />
                    <div className="infoBanner">
                        <div className="infoBanner-title">

                        </div>
                        <span className="infoBanner-Content">
                            Lustrous yet understated. The new evening
                            wear collection exclusively offered at the
                            reopened Giorgio Armani boutique in Los
                            Angeles.
                        </span>
                        <ButtonNoIcon color={"#1E2832"} background={"#FFFFFF"} height={70} width={200}>see collection</ButtonNoIcon>
                    </div>
                </div>

                <span className="headingProduct">Best sellers</span>
                <div className="sectionProduct" id="sectionProduct">
                    <div className="headerProduct">
                        <div className="linkProduct">
                            <button className="textProductMain " onClick={allProduct2} id="allproduct2" name="product2">
                                All Product
                            </button>

                            <button className="textProduct " onClick={allProduct2} id="productTshirt2" name="product2">
                                t-shirt
                            </button>

                            <button className="textProduct " onClick={allProduct2} id="productHoodies2" name="product2">
                                hoodies
                            </button>

                            <button className="textProduct " onClick={allProduct2} id="productJacket2" name="product2">
                                jacket
                            </button>
                        </div>

                        <ButtonNoIcon color={"#FFFFFF"} background={"#1E2832"} width={71} height={25} font_size={16}>Show</ButtonNoIcon>
                    </div>
                </div>

                <div className="listProduct2 " id="overallproduct2">
                    <Carousel data={dataImg}/>
                </div>

                <div className="listProduct2 hiddenProduct" id="overproductTshirt2">
                    <Carousel data={dataImg}/>
                </div>
            </div>
        </ContainerSectionStyled>
    )
}