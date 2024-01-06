import React, { FC } from 'react';
import { tabProduct } from '../../../../../Model/Model';
import ProductItem from './ProductItem.tsx';

interface ProductsProps {
    data: tabProduct[];
}

const Products: FC<ProductsProps> = ({ data }) => {
    return (
        <div className='flex flex-col'>

            <div className={`mt-10 mb-10 flex md:overflow-none overflow-auto   flex-nowrap gap-7`}>
                {data?.slice(0, 4).map(item => <ProductItem data={item}></ProductItem>)}
            </div>
        </div>

    );
};

export default Products;