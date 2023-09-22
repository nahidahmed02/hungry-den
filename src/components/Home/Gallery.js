import React from 'react';
import gImg1 from '../../../public/images/gallery/restaurant-interior.jpg';
import gImg2 from '../../../public/images/gallery/restaurant-interior (1).jpg';
import gImg3 from '../../../public/images/gallery/restaurant-hall.jpg';
import gImg4 from '../../../public/images/gallery/living-room.jpg';
import gImg5 from '../../../public/images/gallery/life-style.jpg';
import gImg6 from '../../../public/images/gallery/dining-room.jpg';
import gImg7 from '../../../public/images/gallery/food-industry-expert.jpg';
import gImg9 from '../../../public/images/gallery/outdoors.jpg';
import Image from 'next/image';

const Gallery = () => {
    return (
        <section>

            <h2 className='border-b-2 border-b-custom-500 mt-24 -mb-20 mx-9 md:mx-24 lg:mx-72'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-custom-500 bg-black'>Gallery</h2>

            <div className="mx-4 md:mx-12 lg:mx-36 carousel carousel-center rounded-box">

                <div className="carousel-item">
                    <Image src={gImg1} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg2} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg3} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg4} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg5} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg6} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg7} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>
                <div className="carousel-item">
                    <Image src={gImg9} width={275} height={195} className="mr-2.5" alt="gallery" />
                </div>

            </div>
        </section>
    );
};

export default Gallery;