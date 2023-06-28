import { styled } from "styled-components";

const TextStyled = styled.span`
    font-family: ${props => props.font_family};
    font-style: ${props => props.font_style};
    font-weight: ${props => props.font_weight};
    font-size: ${props => `${props.font_size}px`};
    line-height: ${props => `${props.line_height}px`};
    /* identical to box height */

    text-transform: ${props => props.text_transform};

    /* White */

    color: ${props => props.color};
`

export const SpanText = ({font_family, font_style, font_weight, font_size, line_height, text_transform, color, children, ...rest}) => {
    return (
        <TextStyled
            font_family = {font_family}
            font_style = {font_style}
            font_weight = {font_weight}
            font_size = {font_size}
            line_height = {line_height}
            text_transform = {text_transform}
            color = {color}
        >
            {children}
        </TextStyled>
    )
}

SpanText.defaultProps = {
    font_family: "Open Sans",
    font_style: "normal",
    font_weight: 400,
    font_size: "16px",
    line_height: "22px",
    text_transform: "capitalize",
    color: "#FFFFFF",
}