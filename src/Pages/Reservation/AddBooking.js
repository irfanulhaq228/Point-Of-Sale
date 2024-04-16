import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'

const AddBooking = () => {
    return (
        <>
            <HomeInfo name='Reservation' secondName='Take a Reservation' />
            <div className="row p-5">
                <div className="border p-3">
                    <h4>Book A Table</h4>
                    <div className="border p-3">
                        <div className="row">
                            <div className="d-flex align-items-center">
                                <div className="col-md-3">
                                    <div className="d-flex flex-column align-items-start">
                                        <label htmlFor="date" className="fw-bold">Date</label>
                                        <input type="date" id="date" className='form-control w-75 p-1 bg-light' />
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="d-flex flex-column align-items-start">
                                        <label htmlFor="time" className="fw-bold">Time</label>
                                        <input type="date" id="time" className='form-control w-75 p-1 bg-light' />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="d-flex flex-column align-items-start">
                                        <label htmlFor="time" className="fw-bold">No Of People</label>
                                        <input type="text" id="time" className='form-control w-75 p-1 bg-light' placeholder='No of People' />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <button type="button" className="btn rounded-1 btn-success px-2 py-1" style={{ backgroundColor: '#37a000' }}>
                                        Check Availibality
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBooking
