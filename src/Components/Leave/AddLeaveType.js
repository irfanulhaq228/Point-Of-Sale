import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const AddLeaveType = () => {
    return (
        <>
            <HomeInfo name='Leave' secondName='Leave Type' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Leave Type
                    </button>

                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>Id</th>
                        <th>Type Name</th>
                        <th>Total Leave Days</th>
                        <th>Action</th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default AddLeaveType