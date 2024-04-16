import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
import Select from 'react-select'

const AddDivision = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }

    ]

    return (
        <>
            <HomeInfo name='Division Controller' secondName='Add Division' />
            <div className="container-fluid p-5">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-3 text-end">
                        <label htmlFor="" className='fw-bold'>Division Name*</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" id="" className="form-control p-1" placeholder='Division Name' />
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-between mt-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="" className='fw-bold'>Department Name*</label>
                    </div>
                    <div className="col-md-8 ">
                        <Select options={options} className='form-control' />

                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-between mt-3">
                    <div className="col-md-3 text-end">
                     
                    </div>
                    <div className="col-md-8  d-flex justify-content-end">
                        < button type="button" className="btn text-white px-4 py-1 rounded-1" style={{ backgroundColor: '#428BCA' }}>
                            Reset
                        </button >
                        <button type="button" className="btn text-white ms-2 px-4 py-1 rounded-1" style={{ backgroundColor: '#7DCD0F' }}>
                            Save
                        </button>
                    </div>

                </div >

            </div>


        </>
    )
}

export default AddDivision
