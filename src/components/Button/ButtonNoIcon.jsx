import { styled } from "styled-components";
import shopping from "../../assets/shopingwhite.svg"

const ButtonStyled = styled.button`
    width: ${props => `${props.width}px`};;
    height: ${props => `${props.height}px`};
    background: ${props => props.background};
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
        font-size: ${props => `${props.font_size}px`};
        align-items: center;
        /* identical to box height */

        text-transform: capitalize;

        /* #1E2832*/
        color: ${props => props.color} ; 
    }

`


export const ButtonNoIcon = ({background, color, children, width, height, font_size, ...rest}) =>{
    return (
            <ButtonStyled
                background= {background}
                width= {width}
                height = {height}
                color= {color}
                font_size= {font_size}
                {...rest}
            >
                {/* <div className="imgButton"></div>
                <span className="textButton">Shop Now</span> */}
                <span className="textButton">{children}</span> 
            </ButtonStyled>
    )
}

ButtonNoIcon.defaultProps = {
    background: "#FFFFFF",
    width: "160",
    height: "50",
    font_size: "25",
}