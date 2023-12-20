import React from 'react';

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:space-y-[0px] space-y-[50px] items-center py-[20px] xl:px-0 lg:px-[20px] px-[20px] justify-between">
            <div className="flex-1">
                <div className="flex flex-col max-w-[450px]">
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
                    <p className='lg:mt-[36px] md:text-[22px] sm:text-xl text-base lg:text-[22px] mt-[10px] text-center lg:text-start'>Shop the Latest Fashion Items and Stay ahead of the style game</p>

                    <button>Explore Now</button>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="flex max-h-[500px] flex-col  gap-[20px]">
                    <div className="flex ">
                        <div className="pr-[10px] w-[50%]">
                            <img className="w-full" src="/Asset/Banner/Banner1.png" alt="" />
                        </div>
                        <div className="pl-[10px] w-[50%]">
                            <img className="w-full" src="/Asset/Banner/Banner2.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full">
                        <img className="w-full" src="/Asset/Banner/Banner3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
