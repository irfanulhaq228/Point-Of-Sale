import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const Holiday = () => {
    return (
        <>
            <HomeInfo name='Leave' secondName='Selection' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add More Holiday
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        Manage Holiday
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Holiday Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>No Of Days</th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default Holiday