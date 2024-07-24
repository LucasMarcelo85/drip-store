import { useState } from 'react';
import { PageViewCarousel } from './../PageViewCarousel/PageViewCarousel';
import { BuyBox } from './../BuyBox/BuyBox';

export function ProductDetails(){

    const options_cores = ["#6feeff", "#ff6969", "#5e5e5e", "#6d70b7"];

    const [backgroudColor, setBackgroundColor] = useState("#6feeff");

    const toggleBackgroundColorImage = (backgroundColor) => setBackgroundColor(backgroundColor);
    return (
        <>
            <PageViewCarousel/>
            <BuyBox/>
        </>
    )
}