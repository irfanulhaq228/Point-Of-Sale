import React from 'react';
import "./Dashboard.css"
import FirstSectionDashBoard from './FirstSection';
import HomeInfo from '../../Components/HomeInfo/HomeInfo';


const Dashboard = () => {
    return (
        <>
            <HomeInfo name='Home' secondName='Home' />
            <div className="content-section p-3">
                <p className='dashboadHeading' >Dashboard</p >
                <hr className='dashboardLine' />
                <div id="section_Dashboard">
                    <FirstSectionDashBoard />
                </div>
            </div >
        </>
    );
};

export default Dashboard;
