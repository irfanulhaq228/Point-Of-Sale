import React from 'react'

import Select from 'react-select'
import HomeInfo from '../HomeInfo/HomeInfo'
const LoanReport = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }

    ]
    return (
        <>
        <HomeInfo name='Loan' />
            <div className="container-fluid p-5">


                <div className="row g-4 align-items-center justify-content-between" >

                    <div className="col-md-4">
                        <div className="d-flex align-items-center justify-content-between ">
                            <label htmlFor="" className='fw-bold'>Enter Your Employee Id*</label>
                            <Select options={options} className='form-control' />
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <input type="date" name="" id="" className="form-control p-1" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="date" name="" id="" className="form-control p-1" />
                    </div>
                    <div className="col-md-1">
                        <button type="button" className="btn btn-info rounded-1 px-2 py-1 text-white" style={{ backgroundColor: '#428BCA' }}>
                            <i className="fa-solid fa-search"></i> Filter</button>
                    </div>
                </div>
                <table className='w-100 mt-5'>
                    <tr>
                        <th>SI</th>
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Total Loan</th>
                        <th>Total Amount</th>
                        <th>Payment Total</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>2</td>
                        <td>200</td>
                        <td>20</td>
                        <td>200</td>
                    </tr>
                </table>


            </div>
        </>
    )
}

export default LoanReport