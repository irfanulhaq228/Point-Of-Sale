import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar';
import Navbar from './Navbar/Navbar';

const Wrapper = ({ setToggle, toggle }) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className={toggle ? "new-width" : "old-width"}>
                        <SideBar toggle={toggle} />
                    </div>
                    <div className={toggle ? "new-dashboard-width" : "dashboard-width"} >
                        <Navbar toggle={toggle} setToggle={setToggle} expandWidth={() => {
                            let dashboardWidth = document.querySelector('.dashboard-width');
                            dashboardWidth.classList.toggle('new-width')
                        }
                        } />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Wrapper