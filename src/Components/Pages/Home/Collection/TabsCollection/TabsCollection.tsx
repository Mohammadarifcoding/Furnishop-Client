import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CollectionData from './CollectionData.js';




const TabsCollection = () => {

      const collectionItem:CollectionData[]=[
        {
            name:'Home',
            id:5
        }
      ]


    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
      {collectionItem.map(item => (
                    <Tab key={item.id}>
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