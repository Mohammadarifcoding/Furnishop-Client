import React from 'react';
import BannerImage from './ReUse/BannerImage.tsx';

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:space-y-[0px] space-y-[50px]   items-center pb-[30px] md:pt-20 sm:pt-14 pt-10   xl:px-0 lg:px-[20px] px-[10px] justify-between">
            <div className="flex-1">
                <div className="flex flex-col max-w-[450px] ">
                    <div className="lg:text-start text-center flex lg:justify-start justify-center ">
                        <h2 className="lg:text-start text-center md:text-[47px] text-[28px]  font-bold">
                            Discover the Latest <span className='relative'>
                            Furniture{' '}
                            <img
                                className="lg:max-w-[220px] lg:left-1 -bottom-[4px]  left-1 absolute md:max-w-[200px] max-w-[150px] "
                                src="/Asset/Banner/iconsNumber1.png"
                                alt=""
                            />{' '}
                                </span> 
                            
                            Trends
                        </h2>
                       
                    </div>
                    <p className='lg:mt-[56px] md:text-[22px] sm:text-xl text-base lg:text-[22px] mt-[10px] text-center lg:text-start'>Shop the Latest Fashion Items and Stay ahead of the style game</p>

                    <div className='lg:flex hidden lg:justify-start justify-center lg:mt-32 mt-[30px]'>
                        <button className='btn bg-black border-2 border-black hover:bg-[#1b1b1b] text-white'>Explore</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="flex max-h-[500px] flex-col  gap-[20px]">
                    <div className="flex ">
                        <BannerImage img='/Asset/Banner/Banner1.png'></BannerImage>
                        <BannerImage img='/Asset/Banner/Banner2.png'></BannerImage>
                    </div>
                    <div className="w-full relative">
                    <span className="badge absolute top-5 left-5 p-3">New</span>
                        <img className="w-full" src="/Asset/Banner/Banner3.png" alt="" />
                    </div>
                    <div className='flex lg:hidden rounded-none lg:justify-start justify-center lg:mt-20 mt-[30px]'>
                        <button className='btn bg-black border-2 border-black hover:bg-[#1b1b1b] text-white'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
