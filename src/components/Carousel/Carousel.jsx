import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { CardImg } from "../Card/CardImg";
import { styled } from 'styled-components';
import heart from "../../assets/heart.svg"
import magnifying_glass_white from "../../assets/magnifying_glass_white.svg"
import shopping_white from "../../assets/shopingwhite.svg"

const SlickStyled = styled.div`
  .slick-prev{
    left: 7px;
    z-index: 999;
  }

  .slick-next {
    right: 47px;
  }

  .slick-next, .slick-prev{
    top:48%
  }

  .slick-prev:before {
    color: red;
    font-size: 50px;
  }

  .slick-next:before{
    font-size: 50px;
    color: red;
  }

  .slick-next:before, .slick-prev:before {
    line-height: 0;
    opacity: .45;
  }
`

export const Carousel = ({ data }) => {
  console.log("Data: ", data);
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    //   className: 'section-outstanding__slider',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (!data) {
    return <div>Loading...</div>
  }

  const listItems = data?.map(
    (element) => {
      return (
        <CardImg key={element.id} imgpic={element.imgpic} detailNameCategory={element.detailNameCategory}
          detailQuantity={element.detailQuantity} nameProduct={element.nameProduct}
          textType={element.textType} textPrice={element.textPrice}
          typePrice={element.typePrice} textPriceOrigin={element.textPriceOrigin} 
          imgPicDetail={heart} imgPicDetail2={magnifying_glass_white} imgPicDetail3={shopping_white}
          bottom_detail={"0"} marginleft={"18"} width_detail={96}  >
        </CardImg>
      )
    }
  )

  return (
    <SlickStyled>
      <Slider ref={ref} {...settings}>
        {/* <div> */}
        {listItems}
        {/* </div> */}

      </Slider>
    </SlickStyled>
  );
};


