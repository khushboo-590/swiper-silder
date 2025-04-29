import React from 'react';
import { cardLIST } from '../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Silder = () => {
    return (
        <div className='max-lg:pb-[44px] pb-[30px]'>
            <div className="2xl:container">
                <h2 className='text-[#00171F] font-normal text-5xl max-md:text-3xl leading-[52.8px] pb-4 text-center'>
                    Simple Steps to <span className='font-bold'>Switch</span>
                </h2>
                <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] leading-[25.6px] mx-auto text-center pb-[58px] max-md:pb-10 max-md:mx-auto max-md:px-3'>
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
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
                                      <div className='relative group overflow-hidden  w-full mx-auto'>
                                <img  className='w-full  ' src={item.img} alt={item.alt}/>
                                <div className='absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-all duration-700 ease-in-out  bg-[#EAF9FFF0]  '>
                                    <div className='relative w-full h-full flex justify-center items-center '>
                                        <p className=' text-[32px]  max-md:text-[20px] text-[#00171F] group-hover:opacity-100  transition-all duration-700 ease-in-out  -rotate-90  whitespace-nowrap '>
                                            {item.imgHeading}
                                        </p>
                                    </div>
                                </div>
                                <div className=' group-hover:bg-[#003459] absolute top-[50%] group-hover:top-[70%] group-hover:opacity-100 opacity-0 transition-all duration-700 ease-out w-full p-8 max-md:p-3'>
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



