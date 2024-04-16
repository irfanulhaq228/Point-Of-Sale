import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'

const ReservationSetting = () => {
    return (
        <>
            <HomeInfo name='Reservation' secondName='Reservation Setting' />
            <div className="row p-5">
                <div className="border p-3">
                    <h5>Reservation Setting</h5>
                </div>
                <div className="row">
                    <div className="border p-3">
                        <div className="d-flex align-items-center">
                            <div className="col-md-3 text-end">
                                <label htmlFor='time-two' className="fw-bold me-5">
                                    Opening Time
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input type="time" id="time-two" className='form-control w-100 p-2  ' />
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <div className="col-md-3 text-end">
                                <label htmlFor='time-two' className="fw-bold me-5">
                                    Closing Time
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input type="time" id="time-two" className='form-control w-100 p-2  ' />
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <div className="col-md-3 text-end">
                                <label htmlFor='time-two' className="fw-bold me-5">
                                    Max Reserve person
                                </label>
                            </div>
                            <div className="col-md-8">
                                <input type="text" id="time-two" placeholder='Max Reserve Person' className='form-control w-100 p-2  ' />
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-end mt-3">
                            <button type="button" className="btn rounded-1 btn-info px-4 py-1 me-3 text-white" style={{ backgroundColor: '#428BCA' }}>
                                Reset
                            </button>
                            <button type="button" className="btn rounded-1 btn-success px-4 py-1" style={{ backgroundColor: '#37a000' }}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ReservationSetting