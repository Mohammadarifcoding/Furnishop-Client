import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabsData } from '../../../../../Model/Model';

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';



const TabsCollection = () => {

      const collectionItem:tabsData[]=[
        {
            name:'All Furniture',
            id:0
        },
        {
          name:'Bedroom',
          id:1
        },
        {
          name:'Living Room',
          id:2
      },
      {
        name:'Bedroom',
        id:3
      },
      {
        name:'Home Office',
        id:4
      },
      {
        name:'Dining Table',
        id:5
      }
      ]


    return (
        <div className='pb-20'>
             <Tabs>
    <TabList className='flex overflow-auto flex-nowrap pb-5   text-nowrap  gap-3'>
      {collectionItem.map(item => (
                    <Tab className='bg-[#00000026] px-4  py-2   rounded-full' key={item.id}>
                        {item.name}
         </Tab>
       ))}

    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

  <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    );
};

export default TabsCollection;