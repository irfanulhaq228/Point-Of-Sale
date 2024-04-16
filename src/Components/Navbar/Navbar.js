import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = ({ expandWidth, setToggle, toggle }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullScreen(true);
            });
        } else {
            document.exitFullscreen().then(() => {
                setIsFullScreen(false);
            });
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'F11') {
                toggleFullScreen();
                event.preventDefault(); // Prevent the default F11 action (browser fullscreen)
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isFullScreen]);


    return (
        <>

            <div className='row border p-3' style={{ backgroundColor: "#903519" }}>
                <div className='col-md-1'>
                    <div className='menu-box' id='menu' >

                        {/* <i   onClick={()=>expandWidth()} */}
                        <i onClick={() => setToggle(!toggle)}
                            className='fa-solid fa-bars'></i>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='d-flex btn-box align-items-center gap-2'>
                            <NavLink to='/pos_invoice' type='button' className='btn px-2 py-1 btn-sm rounded-0 btn-outline-success '><i className='fa-solid fa-plus fw-bold me-1' ></i>POS Invoice</NavLink>
                            <NavLink to='/order_list' type='button' className='btn px-2 py-1 btn-sm rounded-0 btn-outline-success'><i className='fa-solid fa-list fw-bold me-1' ></i>Order List</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='row'>
                        <div className='d-flex s-btn-box align-items-center justify-content-end'>
                            <button type='button' className='btn  rounded-0'>
                                <i className='fa-solid fa-bell'></i>
                            </button>
                            <button type='button' className='btn  rounded-0' onClick={toggleFullScreen}>

                                <i className='fa-solid fa-maximize'></i>
                            </button>
                            {/* dropdown-btn */}
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='fa-solid fa-gear'></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li className='p-2'><a class="dropdown-item" href="#">
                                        <i className='fa-solid fa-user'></i> Profile</a></li>
                                    <li className='p-2'><a class="dropdown-item" href="#">
                                        <i className='fa-solid fa-gear'></i> Setting</a></li>
                                    <li className='p-2'><a class="dropdown-item" href="#">
                                        <i className='fa-solid fa-key'></i> Logout</a></li>
                                </ul>
                            </div>
                            {/* dropdown-btn */}
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Eng
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Arabic</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar