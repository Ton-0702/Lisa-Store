import { styled } from "styled-components";


const CardImgStyled = styled.div`
    position: relative;
    width: 100%;
    img{
            width: ${props => `${props.widthh}%`};
            /* height: ${props => `${props.heightt}px`}; */
            margin-left: ${props => `${props.marginleft}px`};
            position: relative;
            
        }
    
    .textSales{
            position: absolute;
            top: 20px;
            left: ${props => `${props.leftsales}px`};
            background-color: black;
            color: white;
            padding: 3px;

            text-transform: uppercase;
        }

    .textHot{
        position: absolute;
        top: 20px;
        left: 0;
        background-color: #FF6F61;
        color: white;
        padding: 4px 15px;

        text-transform: uppercase;
    }

    .detailCategory{
        position: absolute;
        display:flex;
        align-items:center;
        justify-content: space-between;
        bottom: ${props => `${props.bottom_detail}px`};
        left: ${props => `${props.leftdetail}px`};
        height:40px;
        width: ${props => `${props.width_detail}%`};
        background-color: #1E2832;
        transition: all 0.15s linear;

        visibility: hidden;
        opacity: 0;
        

        .textDetail{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            margin: 0 10px;
            color: #FFFFFF;
            text-transform: capitalize;
        }      
    }

    &:hover .detailCategory {
        opacity:1;
        visibility: visible;
    }


`

const CardImgProductStyled = styled.div`
    width: 312px;
    height: 400px;
    display: flex;
    flex-direction: column;
    position: relative;
    .textSales{
            position: absolute;
            top: 20px;
            left: 0;
            background-color: black;
            color: white;
            padding: 5px 10px;

            text-transform: uppercase;
        }

    .textHot{
        position: absolute;
        top: 20px;
        left: 0;
        background-color: #FF6F61;
        color: white;
        padding: 4px 15px;

        text-transform: uppercase;
    }

    
    .textNameProduct{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #000000;
    }

    .TypeValue{
        display: flex;
        justify-content: space-between;
        width: 312px;


        .textType{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-transform: capitalize;

            /* Dark 50 */

            color: rgba(0, 0, 0, 0.5);
        }

        .priceProduct{
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* margin-right: ${props => `${props.marginright_priceproduct}px`};  */
        }

        .textPriceOrigin{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            margin-right: 8px;
            /* identical to box height */

            text-align: right;
            text-decoration-line: line-through;
            text-transform: capitalize;

            /* Dark 50 */

            color: rgba(0, 0, 0, 0.5);
        }

        .textPrice{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-align: right;
            text-transform: capitalize;
            color: #000000;
        }
    }

    .detailCategory{
        position: absolute;
        display:flex;
        align-items:center;
        justify-content: space-between;
        bottom: ${props => `${props.bottom_detail}px`};
        left: ${props => `${props.leftdetail}px`};
        height:40px;
        width: ${props => `${props.width_detail}%`};
        background-color: #1E2832;
        transition: all 0.15s linear;

        visibility: hidden;
        opacity: 0;
        

        .textDetail{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            margin: 0 10px;
            color: #FFFFFF;
            text-transform: capitalize;
        }

        .imgDetail{
            display: flex;
            margin: 0 10px;
        }

        .imgDetail2{
            display: flex;
            margin-right: 0px;
        }

        .textDetail2{
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 21px;
            line-height: 22px;
            margin: 0 9px;
            color: #FFFFFF;
            text-transform: capitalize;
        }
    }

    &:hover .detailCategory {
        opacity:1;
        visibility: visible;
    }
`


export const CardImg = ({imgpic, children, widthh, marginleft, marginright_priceproduct, leftsales, type,
                             typePrice, detailNameCategory, detailQuantity, nameProduct, imgPicDetail3,
                             textType, textPrice, textPriceOrigin, leftdetail, bottom_detail, width_detail, imgPicDetail, imgPicDetail2, ...rest}) => {
    switch (type) {
        case "category":
            return (
                <CardImgStyled
                    widthh = {widthh}
                    marginleft = {marginleft}
                    leftdetail = {leftdetail}
                    leftsales = {leftsales}
                    bottom_detail = {bottom_detail}
                    width_detail = {width_detail}
                >
                    <img src={imgpic} alt="category"/>

                    {
                        typePrice == "sale" ? 
                        <span className="textSales">{typePrice}</span> 
                        :
                        typePrice == "hot" ?
                        <span className="textHot">{typePrice}</span>
                        :
                        ''
                    }

                    <div className="detailCategory">
                        <span className="textDetail">{detailNameCategory}</span>
                        <span className="textDetail">{detailQuantity}</span>
                    </div>
                </CardImgStyled>
                )
        default:
            return (
                <CardImgProductStyled
                    leftdetail = {leftdetail}
                    bottom_detail = {bottom_detail}
                    width_detail = {width_detail}
                    marginright_priceproduct = {marginright_priceproduct}
                    {...rest}
                >
                    <img src={imgpic} alt="product" />

        
                    {
                        typePrice == "sale" ? 
                        <span className="textSales">{typePrice}</span> 
                        :
                        typePrice == "hot" ?
                        <span className="textHot">{typePrice}</span>
                        :
                        ''
                    }

                    <span className="textNameProduct">{nameProduct}</span>
                    <div className="TypeValue">
                        <span className="textType">{textType}</span>
                        
                        <div className="priceProduct">
                            {
                                typePrice ==="sale"? 
                                <span className="textPriceOrigin">{textPriceOrigin}</span>
                                :
                                ''
                            }

                            {
                                typePrice ==="sale"?
                                    <span className="textPrice" style={{color:"#FF6F61"}}>{textPrice}</span>
                                :
                                    <span className="textPrice">{textPrice}</span>
                            }
                        </div>
                    </div>
                    
                    <div className="detailCategory">
                        
                        { imgPicDetail && imgPicDetail2?
                                <div className="imgDetail"> 
                                    <img src={imgPicDetail} alt="detail1" style={{marginRight: "8px"}} />
                                    <img src={imgPicDetail2} alt="detail2" />
                                </div>
                            :
                                <span className="textDetail"> {detailNameCategory}</span>
                        }
                        
                        { imgPicDetail3?
                                <div className="imgDetail2"> 
                                    <img src={imgPicDetail3} alt="detail1" style={{marginRight: "8px"}} />
                                    <span className="textDetail2">Shop Now</span>
                                </div>
                            :
                                <span className="textDetail">{detailQuantity}</span>
                        }
                        
                    </div>
                </CardImgProductStyled>
            )
    }
    
}

CardImg.defaultProps = {
    widthh: "100",
    // heightt: "263",
    marginleft: "0",
    leftdetail: "0",
    bottom_detail: "0",
    width_detail: "100",
}
