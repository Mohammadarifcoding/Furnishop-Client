import React from "react";
import Container from "../../Shared/Container/Container.tsx";
import Banner from "./Banner/Banner.tsx";
import Collection from "./Collection/Collection.tsx";

function Home() {
    return (
        <Container>
            <div className=" ">
           <Banner></Banner>
           <Collection></Collection>
            </div>
        </Container>
           
        
    );
};

export default Home;