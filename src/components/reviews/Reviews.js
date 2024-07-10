import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import useMortgageService from "../../services/useMortgageService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./reviews.scss";
import "./reviewSlide.scss";
import 'swiper/css';
import 'swiper/css/bundle';

import google from "../../assets/img/icons/google.png";
import star from "../../assets/img/icons/star.svg";
import halfStar from "../../assets/img/icons/half-star.svg";
import grayStar from "../../assets/img/icons/gray star.svg";
import zillow from "../../assets/img/icons/zillow.png";
import arrowLeft from "../../assets/img/icons/arrow-left.svg";
import arrowRight from "../../assets/img/icons/arrow-right.svg";



const Reviews = () =>{

    const [reviewList, setReviewList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
    const {loading, error, getAllReviews, serverUrl} = useMortgageService();
    const swiperRef = useRef(null);
    

    useEffect(()=> {
        onRequest();
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
          setIsSwiperInitialized(true);
        }
      }, []);


    const onRequest = () =>{
        getAllReviews().then(onReviewListLoaded);
    };

    const onReviewListLoaded = (data) =>{
        setReviewList(data.reviews);
    }

    const nextSlide = () => {
        if (isSwiperInitialized && swiperRef.current) {
          swiperRef.current.swiper.slideNext();
        }
      };
    
      const prevSlide = () => {
        if (isSwiperInitialized && swiperRef.current) {
          swiperRef.current.swiper.slidePrev();
        }
      };

      const onSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
      };

    const renderSlides = () => {
            return reviewList.map((currentSlide, index)=> (
                <SwiperSlide key={index}>
                    <div className="reviews-slide__head">
                        <div className="reviews-slide__avatar">
                            <img src={serverUrl + currentSlide.img}
                            alt={currentSlide.title}/>
                        </div>
                        <div className="reviews-slide__info">
                            <div className="accent-subtitle">{currentSlide.city}</div>
                            <div className="reviews-slide__title">{currentSlide.title}</div>
                            <div className="mentor-card__name">{currentSlide.name}</div>
                        </div>
                        <img src={serverUrl + currentSlide.icon}
                                alt="icon"/>
                    </div>
                    <div className="reviews-slide__content">
                            <div className="reviews-slide__text">{currentSlide.text}</div> 
                        </div>
                        </SwiperSlide>
            ));
        }; 
        

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

return (
    <section className="reviews">
       <div className="reviews__container">
       <div className="reviews__head">
            <h2 className="title title--h2">What our customers say</h2>
            <p>Truly reviews from our clients</p>
        </div>
        <div className="reviews__body">
            <ul className="reviews__items">
                <li className="reviews__item">
                    <div className="reviews__item-content">
                        <div className="reviews__item-total accent-subtitle">4.5 stars rating</div>
                        <img className="reviews__item-img" src={google} alt="google"/>
                        <div className="reviews__item-footer">
                            <p className="reviews__item-text">Based on<a href="#" className="link">85 reviews</a></p>
                        </div>
                    </div>
                    <div className="rating">
                      <img src={star} alt="star"/>
                      <img src={star} alt="star"/>
                      <img src={star} alt="star"/>
                      <img src={star} alt="star"/>
                      <img src={halfStar} alt="halfStar"/>
                    </div>
                </li>
                <li className="reviews__item">
                    <div className="reviews__item-content">
                        <div className="reviews__item-total accent-subtitle">4 stars rating</div>
                        <img className="reviews__item-img" src={zillow} alt="zillow"/>
                        <div className="reviews__item-footer">
                            <p className="reviews__item-text">Based on<a href="#" className="link">22 reviews</a></p>
                        </div>
                    </div>
                    <div className="rating">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={grayStar} alt="grayStar"/>
                    </div>
                </li>
            </ul>
            <div className="reviews__slider-wrapper">
                <div className="reviews__slider-actions">
                    <div className="reviews__slider-count">
                        <span className="reviews__slider-current">{swiperRef.current ? String(swiperRef.current.realIndex + 1).padStart(2, '0') : '01'}</span>
                        <span className="reviews__slider-total"> / {reviewList.length}</span>
                    </div>
                    <div className="reviews__slider-btns">
                        <button onClick={nextSlide} type="button" className="reviews__slider-btn reviews__slider-btn--prev play play--light">
                            <img src={arrowLeft} alt="arrowLeft"/>
                        </button>
                        <button onClick={prevSlide} type="button" className="reviews__slider-btn reviews__slider-btn--next play play--light">
                            <img src={arrowRight} alt="arrowRight"/>
                        </button>
    </div>
             </div>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setCurrentIndex(swiper.realIndex)
            }}
            onSlideChange = {onSlideChange}
            >
                {renderSlides()}
                
        </Swiper>
             <div className="reviews__slider swiper">
                {spinner}
                {errorMessage}
             </div>
        </div>
    </div>
       </div>
    </section>
)

}


export default Reviews;