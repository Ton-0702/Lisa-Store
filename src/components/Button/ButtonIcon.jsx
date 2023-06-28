import { styled } from "styled-components";
import shopping from "../../assets/shopingwhite.svg"

const ButtonStyled = styled.button`
    width: 200px;
    height: 50px;
    background: #1E2832;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    cursor: pointer;
    .textButton{
        display: flex;
        /* justify-content: space-between; */
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        align-items: center;
        /* identical to box height */

        text-transform: capitalize;

        /* White */
        color: white;
    }

    .textButton::before{
        content: " ";
        display: inline-block;
        background:url(${props => props.imgpic});
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        margin-right: 15px;
    }

    @media (max-width: 1400px) {
        
    }
    @media (max-width: 1200px) {
       
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
        width:170px;
    }   
    @media (max-width: 576px) {
       
    }    

`

const ButtonSmallStyled = styled.button`
    width: 200px;
    height: 40px;
    background-color: ${props => props.background};
    display: flex;
    align-items: center;
    line-height: 20px;
    border: none;
    cursor: pointer;    
    .textButton{
        display: flex;
        /* justify-content: space-between; */
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        align-items: center;
        cursor: pointer;
        /* identical to box height */

        text-transform: capitalize;

        /* White */
        color: white;
    }

    .textButton::after{
        content: " ";
        display: inline-block;
        background-image:url(${props => props.imgpic});
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        margin-left: 15px;
    }

`

export const ButtonIcon = ({imgpic, type, background, children, ...rest}) =>{
    return (
        type == "true"?
            <ButtonStyled
                imgpic ={imgpic}
                {...rest}
            >
                {/* <div className="imgButton"></div>
                <span className="textButton">Shop Now</span> */}
                <span className="textButton">{children}</span> 
            </ButtonStyled>
        :
        <ButtonSmallStyled
            imgpic ={imgpic}
            background= {background}
        >
            {/* <div className="imgButton"></div>
            <span className="textButton">Shop Now</span> */}
            <span className="textButton">{children}</span> 
        </ButtonSmallStyled>   
    )
}

ButtonIcon.defaultProps = {
    imgpic: "none",
    background: "#1E2832"
}