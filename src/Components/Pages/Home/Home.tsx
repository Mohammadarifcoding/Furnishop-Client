import React from "react";
import Container from "../../Shared/Container/Container.tsx";
import Banner from "./Banner/Banner.tsx";
import Collection from "./Collection/Collection.tsx";
import LatestTrend from "./LatestTrend/LatestTrend.tsx";

function Home() {
    return (
        <Container>
            <div className=" ">
           <Banner></Banner>
           <Collection></Collection>
           <LatestTrend></LatestTrend>
            </div>
        </Container>
           
        
    );
};

export default Home;