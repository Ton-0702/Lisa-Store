import { styled } from "styled-components";
import { CardImgStack } from "../Card/CardImgStack";
import product12 from "../../assets/product12.svg"
import product13 from "../../assets/product13.svg"
import product14 from "../../assets/product14.svg"
import product15 from "../../assets/product15.svg"
import product16 from "../../assets/product16.svg"
import product17 from "../../assets/product17.svg"


const ContainerSectionFollowStyled = styled.section`
    background: #F0F0F0;
    margin-bottom: 150px;
    height: 530px;
    display: flex;
    align-items: center;

    .contentFollow{
        width: 1300px;
        margin: 0 auto;
        height: 78%;
        display: flex;
        flex-direction: column;

        .contentFollow-title{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 50px;
            line-height: 59px;
            
            text-align: center;
            text-transform: capitalize;
            color: #000000;
        }

        .contentFollow-img{
            display: flex;
        }

        .contentFollow-actor{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 28px;
            line-height: 33px;
            /* identical to box height */

            text-align: center;
            text-transform: capitalize;

            /* Primary */

            color: #FF6F61;
        }
    }
`

export const ElementPageFollow = () =>{
    return (
        <ContainerSectionFollowStyled>
            <div className="contentFollow">
                <span className="contentFollow-title"> 
                    Follow products and discounts on Instagram
                </span>
                <div className="contentFollow-img">
                    <CardImgStack imgpic={product12}></CardImgStack>
                    <CardImgStack imgpic={product13}></CardImgStack>
                    <CardImgStack imgpic={product14}></CardImgStack>
                    <CardImgStack imgpic={product15}></CardImgStack>
                    <CardImgStack imgpic={product16}></CardImgStack>
                    <CardImgStack imgpic={product17}></CardImgStack>
                </div>

                <span className="contentFollow-actor">@lisa.official</span>
            </div>
        </ContainerSectionFollowStyled>
    )
}
