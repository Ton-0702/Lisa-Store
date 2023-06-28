import { styled } from "styled-components";
import { Search } from "../Input";
import { LinkNewPage } from "../Link/LinkNewPage";
import shoping from "../../assets/shoping.svg"
import shopingwhite from "../../assets/shopingwhite.svg"
import leaf_1 from "../../assets/leaf1.svg"
import leaf_2 from "../../assets/leaf2.svg"
import { ButtonIcon } from "../Button/ButtonIcon";
import thoitrang from "../../assets/thoitrang.jpg"

const ContainerTop = styled.div`
    width: 100vw;
    height: 560px;
    background-color: #F0F0F0;
    position: relative;
    .imgPicLeaf-Left{
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-2%,-28%);
    }

    .imgPicLeaf-Right{
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(0%,-28%);
    }

    @media (max-width: 1400px) {
        .imgPicLeaf-Left, .imgPicLeaf-Right{
            display: none;
        }
    }
    @media (max-width: 1200px) {
       height: 500px;
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
        &{
            height: 400px;
        }
        
    }   
    @media (max-width: 576px) {
        height: 350px;
    }   

`

const SectionContainerTop = styled.div`
    /* width: 100vw; */
    width: 1300px;
    margin: 0 auto;
    height: auto;
    background-color: #F0F0F0;
    /* position: relative; */
    
    @media (max-width: 1400px) {   
        width: 1100px;
    }
    @media (max-width: 1200px) {    
        width: 950px;
    }
    @media (max-width: 992px) {
        width: 892px;
    }   
    @media (max-width: 768px) {
        width: 768px;
    }   
    @media (max-width: 576px) {
        width: 576px;
       
    }   
`


const ElementHeader = styled.div`
    display: flex;
    flex-direction: column;
    
    .headerBar{
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #E3E3E3;

        .titlePage {
        font-family: 'AmstelvarAlpha';
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 50px;

        color: #000000;
        }
    }
    
    .linkNav{
        display: flex;
    }

    @media (max-width: 1400px) {
        
    }
    @media (max-width: 1200px) {
       
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
        &{
            margin: 0 20px;
        }
        .headerBar .titlePage{
            font-size: 32px;
        }
    }   
    @media (max-width: 576px) {
        .headerBar .titlePage{
            font-size: 28px;
        }
       
    }    
`

const HeroSection = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;

    .leftContent{
        float: left;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        margin-right:233px;
        
        .spanTextTitle{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 66px;
            line-height: 55px;
            /* identical to box height, or 74% */

            text-transform: capitalize;
        }

        .spanTextContentLeft{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            width: 687px;
            line-height: 55px;
            text-transform: capitalize;
        }

        .buttonShop{
            display: flex;
        }
    }

    .rightContent{
        float: right;
        .imgPicRight{
            width:336px;
            height:395px;
            border-radius: 160px 0px;
            box-shadow: 10px 15px #F0F0F0, 10px 15px 0 1px #00000040;   
        }
    }

    @media (max-width: 1400px) {
        justify-content: space-between;
        .rightContent .imgPicRight{
            width:400px;
            height: 400px;
        }
        .leftContent{
            margin-right:133px;
        }

        .leftContent .spanTextTitle{
            font-size: 50px;
        }

        .leftContent .spanTextContentLeft{
            font-size: 30px;
            width:550px;
        }
    }
    @media (max-width: 1200px) {
        /* justify-content: space-between;   */
        .rightContent .imgPicRight{
            width:330px;
            height: 330px;
        }
        .leftContent{
            margin-right:93px;
        }

        .leftContent .spanTextTitle{
            font-size: 40px;
        }

        .leftContent .spanTextContentLeft{
            font-size: 24px;
            width:500px;
        }
    }
    @media (max-width: 992px) {
        .rightContent .imgPicRight{
            width:350px;
            height: 350px;
        }
        .leftContent{
            margin-right:53px;
        }

        .leftContent .spanTextTitle{
            font-size: 40px;
        }

        .leftContent .spanTextContentLeft{
            font-size: 23px;
            width:400px;
        }
    }   
    @media (max-width: 768px) {
        & {
            margin-top:25px;
        }

        .rightContent .imgPicRight{
            width:270px;
            height: 270px;
        }

        .leftContent{
            margin-right:30px;
        }

        .leftContent .spanTextTitle{
            font-size: 40px;
        }

        .leftContent .spanTextContentLeft{
            font-size: 20px;
            width:400px;
        }
    }   
    @media (max-width: 576px) {
        justify-content: center;

        .leftContent{
            row-gap: 10px;
        }

        .leftContent .spanTextTitle{
            text-align: center;
            font-size: 36px;
        }

        .leftContent .spanTextContentLeft{
            text-align: center;
        }
        
        .buttonShop{
            justify-content: center;
        }

        .rightContent{
            display: none;
        };
    }    
`

export const LayoutPageHeader = () =>{ 
    return (
        <ContainerTop>
            <SectionContainerTop>
            <img src={leaf_1} alt="leaf" className="imgPicLeaf-Left" />
            <img src={leaf_2} alt="leaf" className="imgPicLeaf-Right" />
            <ElementHeader>
                <header className="headerBar">
                    <Search></Search>
                    <span className="titlePage">Lisa Store</span>
                    <div className="linkNav">
                        <LinkNewPage textIcon={"Account"}></LinkNewPage>
                        <LinkNewPage imgpic={shoping} textIcon={"Shoping"}></LinkNewPage>
                    </div>
                </header>
                <HeroSection>
                    <div className="leftContent">
                        <span className="spanTextTitle">Collections</span>
                        <span className="spanTextContentLeft">you can explore ans shop many differnt collection from various barands here.</span>
                        <div className="buttonShop">
                        <ButtonIcon imgpic={shopingwhite} type="true">Shop Now</ButtonIcon>
                        </div>
                    </div>
                    
                    <div className="rightContent">
                        <img className="imgPicRight" src={thoitrang} alt="tumapdit" />
                    </div>

                </HeroSection>
            </ElementHeader>
            </SectionContainerTop>
        </ContainerTop>
    )
}
