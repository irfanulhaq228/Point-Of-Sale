import React from 'react';
import { FaHome } from 'react-icons/fa'

const Reports = ({header, desc , name}) => {
    return (
        <div>
            <div className="container">
                <div className='container-rep'>
                    <FaHome className='home' style={{color:"#903519" }} />
                    <div className='report'>
                        <h3>{header}</h3>
                        <p>{desc}</p></div>
                </div>
            </div>
            <hr className='text-gray w-100' />

            <div className=' mt-5 mx-5'>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-6-md">
                            <div className='stock-form'>
                                <div className="Stock-rep mb-4">
                                    <p className='fs-4'>{name}</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
