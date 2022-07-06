import { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../styles/sliderWithThumb.scss';
import blankImg from '../img/blank-profile-picture.png'


const SliderWithThumb = ({ userImages }) => {

    const images = userImages.length ? userImages : [blankImg]



    const fullImgSlider = useRef();
    const thumbImgSlider = useRef();

    const FullSliderImgs = (fullImages) => {

        const fullImagesToRender = [...fullImages].map(image => (
            <SplideSlide
                key={image}>
                <img
                    src={image}
                    alt="user img" />
            </SplideSlide>))

        return fullImagesToRender;
    }

    const ThumbSliderImgs = (thumbImages) => {

        const thumbImagesToRender = [...thumbImages].map(image => (
            <SplideSlide
                key={image + 'thumb'}>
                <img
                    src={image}
                    alt="user img" />
            </SplideSlide>
        ))

        return thumbImagesToRender


    }


    useEffect(() => {


        fullImgSlider.current.sync(thumbImgSlider.current.splide)

    }, [userImages])


    return (
        <div className='user-img-wrapper'>
            <div className='user-img-container'>
                <Splide
                    id="fullImgSlider"
                    ref={fullImgSlider}
                    options={{
                        fixedWidth: 400,
                        fixedHeight: 400,
                        cover: true,
                        reactive: true,
                        type: 'slide',
                        rewind: true,
                        pagination: false,
                        arrows: false,
                    }}
                >
                    {FullSliderImgs(images)}
                </Splide>
            </div >
            <div className={` ${userImages.length} user-thumb-container  ${userImages.length <= 1 && 'hide'}`}>
                <Splide
                    id="thumbImgSlider"
                    ref={thumbImgSlider}
                    options={
                        {
                            fixedWidth: 100,
                            fixedHeight: 100,
                            gap: 10,
                            rewind: true,
                            pagination: false,
                            cover: true,
                            isNavigation: true,
                            breakpoints: {
                                600: {
                                    fixedWidth: 60,
                                    fixedHeight: 44,
                                }
                            }
                        }
                    }
                >
                    {ThumbSliderImgs(images)}
                </Splide>
            </div>
        </div >
    );
}

export default SliderWithThumb;






// const imagesToRender = [...userData.imgUrl]
// const userImgsSlides = [];


// if (imagesToRender.length) {


//     imagesToRender.forEach(image => (
//         userImgsSlides.push(<SplideSlide><img src={image} alt="user img" /></SplideSlide>)
//     ))




// } else {

//     userImgsSlides.push(<SplideSlide><img src={blankImg} alt="blank user img" /></SplideSlide>)

// }

// return (
//     <Splide className="user-img-container" options={{ rewind: true }} aria-label="React Splide Example">

//         {userImgsSlides}
//     </Splide>
// )