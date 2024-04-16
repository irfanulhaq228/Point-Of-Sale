import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const Department = () => {
    return (
        <>
            <HomeInfo name='Department Controller' secondName='Department' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add New Department
                    </button>
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white ms-3' style={{ backgroundColor: '#428bca' }}>
                        Manage Department
                    </button>

                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SL No</th>
                        <th>Department Name</th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default Department