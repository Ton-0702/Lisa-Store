import { styled } from "styled-components";
import { ButtonIcon } from "../Button/ButtonIcon";
import thoitrang from "../../assets/thoitrang.jpg"
const ContentStyled = styled.div`
    height: 400px;
    width: ${props => `${props.width}px`};
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
`

export const ContentHeaderTop = ({width, titleContent, Content}) => {
    return (
        <ContentStyled
            width = {width}
        >
            <div className="leftContent">
                <span className="spanTextTitle">{titleContent}</span>
                <span className="spanTextContentLeft">{Content}</span>
                <ButtonIcon type="true">Shop Now</ButtonIcon>
            </div>
            
            <div className="rightContent">
                <img className="imgPicRight" src={thoitrang} alt="tumapdit" />
            </div>

        </ContentStyled>
    )
};

ContentHeaderTop.defaultProps = {
    width: "0", 
    titleContent: "Collections",
    Content: "you can explore ans shop many differnt collection from various barands here.",
}