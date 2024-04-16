import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'

const WeeklyHolidy = () => {
    return (
        <>
            <HomeInfo name='Leave' secondName="Create" />
            <div className="container-fluid p-5">
                <table className="w-100">
                    <tr>
                        <th>SI</th>
                        <th>Weekly Leave Day</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <button type="button" className="btn text-white btn-sm rounded-1 px-2 py-1" style={{backgroundColor:'#7DCD0F'}}>
                                <i className="fa-solid fa-pencil"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default WeeklyHolidy