import React, { FC } from 'react';

type newData = {
   children: any
}
 
const Container:FC<newData> = ({children}) => {
    return (
        <div className='max-w-[1450px] xl:px-14 lg:px-12 md:px-6 px-2 bg-[#EEF2FB] mx-auto '>
            {children}
        </div>
    );
};

export default Container;