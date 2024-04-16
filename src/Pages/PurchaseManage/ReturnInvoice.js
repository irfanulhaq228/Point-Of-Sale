import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'


const ReturnInvoice = () => {
    return (
        <>
            <HomeInfo name='Purchase' secondName='Purchase List' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Return
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Invoice No</th>
                        <th>Supplier Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>5</td>
                        <td>4:00 pm</td>
                        <td>5:00 pm</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ReturnInvoice