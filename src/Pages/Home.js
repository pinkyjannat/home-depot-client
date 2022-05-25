import React from 'react';
import Banner from '../Components/Banner';
import Info from '../Components/Info';
import Summary from '../Components/Summary';
import ToolsCard from '../Components/ToolsCard';




const Home = () => {
    return (
      
        
        <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            <ToolsCard></ToolsCard>
            <Info></Info>
            <Summary></Summary>
           
        </div>
    );
};

export default Home;