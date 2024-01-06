import React, { FC } from 'react';
import { tabProduct } from '../../../../../Model/Model';

interface ProductsProps {
    data: tabProduct;
}
const ProductItem:FC<ProductsProps> = ({data}) => {
    return (
        <div className='lg:w-[310px] w-[270px]'>
            <div className='lg:w-[315px] w-[270px] '>
                <img className='w-full rounded-xl' src={data?.Product_Image} alt="" />
            </div>
        </div>
    );
};

export default ProductItem;