import { styled } from "styled-components";
import user_icon from "../../assets/user.svg"
const IconStyled = styled.a`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 25px;
    cursor: pointer;
    .imgIcon{
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 20px;;
        background: none;
    }
    .spanLink{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: ${props => props.font_weight_span};
        font-size: ${props => `${props.font_size_span}px`};
        line-height: ${props => `${props.line_height_span}px`};
        background: none;
        /* identical to box height */
        text-transform: capitalize;
        color: #1E2832;
        margin-left: 8px;
    }

    @media (max-width: 1400px) {
        
    }
    @media (max-width: 1200px) {
       
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
        .imgIcon{
            width:18px;
            height:18px;
        }
    }   
    @media (max-width: 576px) {
        .imgIcon{
            display:none;
        }
       
    }    
`

export const LinkNewPage = ({imgpic, textIcon, font_weight_span, font_size_span, line_height_span}) =>{
    return (
        <IconStyled
            font_weight_span = {font_weight_span}
            font_size_span = {font_size_span}
            line_height_span = {line_height_span}
        >
            <img className="imgIcon" src={imgpic} alt="icon"></img>
            <span className="spanLink">{textIcon}</span>
        </IconStyled>
    )
}

LinkNewPage.defaultProps = {
    imgpic: user_icon,
    textIcon: "Your Text",
    font_weight_span: 400,
    line_height_span: "21px",
    font_size_span: "18px",
}