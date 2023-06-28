import { styled } from "styled-components";

import shaw from "../../assets/shodow-layer.svg"
const CardImgStyled = styled.div`
    position: relative;
    margin: 30px 15px 30px 0px;

    .imgStack{
        position: absolute;
        top:0;
        visibility: hidden;
        transition: all 0.2ms linear;
        opacity: 0;
    }

    &:hover .imgStack{
        visibility: visible;
        opacity: 1;
    }
`

export const CardImgStack = ({imgpic}) =>{
    return (
        <CardImgStyled>
            <img src={imgpic} alt="product" />
            <div className="imgStack">
                <img src={shaw} alt="shadow" />
            </div>
        </CardImgStyled>
    )
}