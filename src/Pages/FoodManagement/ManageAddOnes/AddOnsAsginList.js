import React from 'react'
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'

function AddOnsAsginList() {
  return (
    <>
        <HomeInfo name='Item Category' secondName='Category List' />
        <div className='categoryMain'>
            <table className='my-3' style={{ borderCollapse: 'collapse', width: "100%" }}>
                <tr>
                    <th>Sr #</th>
                    <th>Image</th>
                    <th>Category Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>3</td>
                    <td>4</td>
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

export default AddOnsAsginList