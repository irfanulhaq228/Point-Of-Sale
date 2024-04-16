import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'

const ManageDivision = () => {
    return (
        <>
            <HomeInfo name='Division Controller' />
            <div className="container-fluid p-5">
                <div className="row">
                    <table className="w-100">
                        <tr>
                            <th>SL No</th>
                            <th>Division Name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>bd</td>
                            <td>
                                <button type="button" className="btn btn-sm rounded-1 p-1 text-white px-2" style={{backgroundColor:'#7DCD0F'}}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button type="button" className="btn btn-sm rounded-1 p-1 ms-2 text-white px-2" style={{backgroundColor:'#e5343d'}}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManageDivision