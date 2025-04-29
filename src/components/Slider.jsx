import React from 'react';
import { cardLIST } from '../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Silder = () => {
    return (
        <div className='max-lg:pb-[44px] pb-[30px]'>
            <div className="2xl:container">
              
                <Swiper

                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        630: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4},
                    }}
                >
                    {cardLIST.map((item, index) => (
                        <SwiperSlide key={index}>
                                      <div className='relative group overflow-hidden  w-full mx-auto mt-10'>
                                <img  className='w-full  ' src={item.img} alt={item.alt}/>
                                <div className='absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-all duration-700 ease-in-out  bg-[#EAF9FFF0]  '>
                                    <div className='relative w-full h-full flex justify-center items-center '>
                                        <p className=' text-[32px]  max-md:text-[20px] text-[#00171F] group-hover:opacity-100  transition-all duration-700 ease-in-out  -rotate-90  whitespace-nowrap '>
                                            {item.imgHeading}
                                        </p>
                                    </div>
                                </div>
                                <div className=' group-hover:bg-[#003459] absolute  group-hover:top-[75%] group-hover:opacity-100 opacity-0 transition-all duration-700 ease-out w-full p-8 max-md:p-3'>
                                    <h4 className='text-[32px] font-normal pb-3 text-white max-md:text-2xl max-md:pb-1.5'>{item.title}</h4>
                                    <p className='text-white text-base max-md:text-base'>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Silder;



