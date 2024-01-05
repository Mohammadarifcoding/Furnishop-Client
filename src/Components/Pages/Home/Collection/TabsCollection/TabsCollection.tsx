import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabsData } from '../../../../../Model/Model';


// Import Swiper styles




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
    <TabList className='flex overflow-auto flex-nowrap pb-5 tabData md:cursor-default cursor-pointer   text-nowrap  gap-3'>
      {collectionItem.map(item => (
                    <Tab className='bg-[#00000026] px-4  py-2 cursor-pointer  rounded-full' key={item.id}>
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

  
        </div>
    );
};

export default TabsCollection;