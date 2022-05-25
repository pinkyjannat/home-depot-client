import React from 'react';
import Banner from '../Components/Banner';
import Summary from '../Components/Summary';
import ToolsCard from '../Components/ToolsCard';
import Footer from './Shared/Footer';



const Home = () => {
    return (
      
        
        <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            <ToolsCard></ToolsCard>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;