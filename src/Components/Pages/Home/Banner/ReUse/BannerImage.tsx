import React from 'react';

type baImage = {
  img:string
}

const BannerImage:React.FC<baImage> = ({img}) => {
    return (
        <div className="pr-[10px] w-[50%] relative">
            <span className="badge absolute top-5 left-5 p-3">New</span>
        <img className="w-full" src={img} alt="" />
        
    </div>
    );
};

export default BannerImage;