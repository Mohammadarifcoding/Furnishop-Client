import React, { FC } from 'react';

type newData = {
   children: any
}
 
const Container:FC<newData> = ({children}) => {
    return (
        <div className='max-w-[1250px] mx-auto '>
            {children}
        </div>
    );
};

export default Container;