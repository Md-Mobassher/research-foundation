import React from 'react';

const Slider1 = () => {
    return (
        <div id="slide1" class="carousel-item relative w-full">
            <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" alt=''/>

            
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default Slider1;