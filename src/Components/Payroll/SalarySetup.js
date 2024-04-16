import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const SalarySetup = () => {
    return (
        <>
            <HomeInfo name='Payroll' secondName='Salary Type' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Salary Type
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Manage Salary Type
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SL No</th>
                        <th>Salary Type</th>
                        <th></th>

                    </tr>

                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>3</td>

                    </tr>
                </table>
            </div>
        </>
    )
}

export default SalarySetup