import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const GrantLoan = () => {
    return (
        <>
            <HomeInfo name='Loan' secondName='Create' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Loan
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Manage Genrated Loan
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Name</th>
                        <th>Permitted By</th>
                        <th>Loan No</th>
                        <th>Amount</th>
                        <th>Intrest Percentage</th>
                        <th>Installment Period</th>
                        <th>Repayment Total</th>
                        <th>Approved Date</th>
                        <th>Repayment From</th>

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

export default GrantLoan