import React from 'react'
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'

function CustomerList() {
    return (
        <>
            <HomeInfo name='Customer' secondName='List' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Take A Reservation
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Customer Name</th>
                        <th>Table No</th>
                        <th>No Of People</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>4</td>
                        <td>4:00 pm</td>
                        <td>4:00 pm</td>
                        <td>13/2/2020</td>
                        <td>Active</td>
                        <td>
                            <button type="button" className="btn-sm rounded-1 btn-info px-2 py-1 me-1 text-white">
                                <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button type="button" className="btn-sm rounded-1 btn-danger px-2 py-1">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CustomerList