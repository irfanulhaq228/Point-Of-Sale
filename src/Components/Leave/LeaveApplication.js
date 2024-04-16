import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'

const LeaveApplication = () => {
    return (
        <>
            <HomeInfo name='Leave' secondName='Leave Type' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Others Leave
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        Manage Application
                    </button>

                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SL NO</th>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th>Application Start Date</th>
                        <th>Application End Date</th>
                        <th>Approved Start Date</th>
                        <th>Approved End Date</th>
                        <th>Days</th>
                        <th>Approved Day</th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>3</td>
                        <td>John</td>
                        <td>3</td>
                        <td>3</td>
                        <td>John</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default LeaveApplication