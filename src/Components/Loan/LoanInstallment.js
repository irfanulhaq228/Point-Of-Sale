import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'

const LoanInstallment = () => {
    return (
        <>
            <HomeInfo name='Loan' secondName='Create' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Installment
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Manage Installment
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Loan No</th>
                        <th>Installment Amount</th>
                        <th>Payment</th>
                        <th>Date</th>
                        <th>Receiver</th>
                        <th>Install No</th>
                        <th>Date</th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default LoanInstallment