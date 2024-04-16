import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'

const UnAvailableDay = () => {
    return (
        <>
            <HomeInfo name='Reservation' secondName='Reservation on off' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Unavailablity
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Unavailabe Date</th>
                        <th>Available Time</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>4</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default UnAvailableDay