import { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import blankImg from '../img/blank-profile-picture.png'


const SliderWithThumb = ({ userImages }) => {

    const initialState = userImages.length ? userImages : [blankImg]

    const [images, setImages] = useState(initialState)



    const fullImgSlider = useRef();
    const thumbImgSlider = useRef();

    const FullSliderImgs = (fullImages) => {

        const fullImagesToRender = [...images].map(image => (
            <SplideSlide
                key={image}>
                <img
                    src={image}
                    alt="user img" />
            </SplideSlide>))

        return fullImagesToRender;
    }

    const ThumbSliderImgs = (thumbImages) => {




        const thumbImagesToRender = [...images].map(image => (
            <SplideSlide
                key={image}>
                <img
                    src={image}
                    alt="user img" />
            </SplideSlide>))

        return thumbImagesToRender;
    }


    useEffect(() => {


        fullImgSlider.current.sync(thumbImgSlider.current.splide)

    }, [images])




    return (
        <div className='user-img-container'>
            <h1>slider w thum</h1>
            <Splide
                id="fullImgSlider"
                ref={fullImgSlider}
                options={{
                    type: 'fade',
                    rewind: true,
                    pagination: false,
                    arrows: false,
                }}
            >
                {FullSliderImgs(images)}
            </Splide>
            <Splide
                id="thumbImgSlider"
                ref={thumbImgSlider}
                options={{
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