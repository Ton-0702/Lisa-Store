import React from "react";
import { styled } from "styled-components";
import fb from "../../assets/fb.svg"
import bird from "../../assets/bird.svg"
import linkin from "../../assets/linkin.svg"
import instagram from "../../assets/instagram.svg"
import master_card from "../../assets/Mastercard_Logo.png"
import visa_card from "../../assets/Visa_Inc_logo.png"
import american_card from "../../assets/amerian_card.png"
import paypal from "../../assets/paypal.svg"
import maestro from "../../assets/maestro_card.png"
import klarna from "../../assets/Klarna_Payment_Badge.png"
import { ButtonIcon } from "../Button/ButtonIcon";
import arrrow_up from "../../assets/arrow_up.svg"

const Container = styled.footer`
    width: 100vw;
    height: 300px;
    margin-top: 40px;
    position: relative;
`

const FooterStyled = styled.div`
    /* position: relative; */
    /* bottom: 0; */
    margin: 0 auto;
    width: 1300px;
    height: 100%;
    /* background-color: aqua; */

    .contentFooterLeft {
        float:left;
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        margin-right: 108px;

        .ContentFooter-First{
            font-family: 'AmstelvarAlpha';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            color: #000000;
        }

        .ContentFooter-Two{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            width: 300px;
            text-transform: capitalize;
            color: rgba(30, 40, 50, 0.75);
        }

        .contentFooterLeft-Icon{
            display: flex;
            justify-content: space-between;
            width: 300px;
        }
    }

    .contentFooterRight{
        float: right;
        display: flex;
        width: 55%;
        justify-content: space-between;

        /* .contentInfoFooterRgiht{
            display: flex;
            justify-content: space-between;
        }
             */
        .ContentFooterRight-First{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-transform: capitalize;
            color: #000000;
        }

        .ul {
            list-style-type: none;
            padding: 0;
            li{
                margin-bottom: 10px;
            }
        }
        

        .ContentFooterRight-Two{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            text-transform: capitalize;
            color: #1E2832;

            text-decoration: none;
            margin-bottom: 20px;
        }
    }
`

const InforPageStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: black ;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;

    .Underfooter{
        margin: 0px auto;
        display: flex;
        width: 1300px;
        justify-content: space-between;
        align-items: center;
        .textUnderFooter{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-transform: capitalize;

            /* White */

            color: #FFFFFF;
        }  

        .imgCard{
            display: flex;

            img{
                width: 45px;
                height: 35px;
                margin-right: 5px;
                /* background-color: white; */
            }
        }
    }
    
    
`
export const LayOutPageFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }
    return (
        <Container>
        <FooterStyled>
            {/* <ElementFooterStyled> */}
                <div className="contentFooterLeft">
                    <span className="ContentFooter-First">Lisa</span>
                    <span className="ContentFooter-Two">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua
                    </span>

                    <span className="contentFooterLeft-Icon">
                        <a href="#">
                            <img src={fb} alt="facebook" />
                        </a>

                        <a href="#">
                            <img src={bird} alt="twitter" />
                        </a>

                        <a href="#">
                            <img src={linkin} alt="Linkin" />
                        </a>

                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>

                    </span>
                </div>

                <div className="contentFooterRight">
                    <div>
                        <div className="ContentFooterRight-First">CataLog</div>
                        <ul className="ul">
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Necklaces</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">hoodies</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Jewelry Box</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">t-shirt</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">jacket</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="ContentFooterRight-First">ABOUT US</div>
                        <ul className="ul">
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Our Producers</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Sitemap</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="ContentFooterRight-First">CUSTOMER SERVICES</div>
                        <ul className="ul">
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Track Your Order</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Product Care & repair</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">book An Appointment</a>
                            </li>
                            <li>
                                <a href="#" className="ContentFooterRight-Two">Shipping & Returns</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            {/* </ElementFooterStyled> */}
            
        </FooterStyled>
        <InforPageStyled>
                    <div className="Underfooter">
                         <span className="textUnderFooter">© 2023 LISA , Inc.</span>
                         <div className="imgCard">
                            <img src={master_card} alt="master" style={{backgroundColor:"white"}} />
                            <img src={visa_card} alt="master" style={{backgroundColor:"white"}}/>
                            <img src={american_card} alt="master" />
                            <img src={paypal} alt="master" />
                            <img src={maestro} alt="master" style={{backgroundColor:"white"}}/>
                            <img src={klarna} alt="master" />
                         </div>
                         <div onClick={scrollToTop}>
                            <ButtonIcon imgpic={arrrow_up} background={"black"}>Scroll to top</ButtonIcon>
                         </div>
                    </div>
                    
                </InforPageStyled>
        </Container>
    )
}

