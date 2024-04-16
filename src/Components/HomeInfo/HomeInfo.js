import React from 'react'
import "./HomeInfo.css"
import { SlHome } from "react-icons/sl"
const HomeInfo = ({ name, secondName }) => {
    return (
        <>
            <div className='row border'>
                <div className='d-flex justify-content-start p-3'>
                    <SlHome className='homeInfoIcon' />
                    <div className='ms-4'>
                        <h5 className='fw-bold'>{name}</h5>
                        <p className='mt-2'>{secondName}</p>
                    </div>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        </>
    )
}

export default HomeInfo