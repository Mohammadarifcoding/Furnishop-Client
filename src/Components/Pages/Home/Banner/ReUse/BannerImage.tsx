import React from 'react';

type baImage = {
  img:string
}

const BannerImage:React.FC<baImage> = ({img}) => {
    return (
        <div className="pr-[10px] w-[50%]">
        <img className="w-full" src={img} alt="" />
    </div>
    );
};

export default BannerImage;