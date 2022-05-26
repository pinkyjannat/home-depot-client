import React from 'react';
import Banner from '../Components/Banner';
import Facilities from '../Components/Facilities';
import Info from '../Components/Info';
import Summary from '../Components/Summary';
import ToolsCard from '../Components/ToolsCard';
import ShowReview from './ShowReview';




const Home = () => {
    return (
      
        
        <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            <ToolsCard></ToolsCard>
            <Info></Info>
            <Summary></Summary>
            <Facilities></Facilities>
            <ShowReview></ShowReview>
           
        </div>
    );
};

export default Home;