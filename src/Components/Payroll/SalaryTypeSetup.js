import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'


const SalaryTypeSetup = () => {
    return (
        <>
            <HomeInfo name='Payroll' secondName='Create' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Salary Setup
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Manage Salary Setup
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SL No</th>
                        <th>Employee Name</th>
                        <th>Employee Id</th>
                        <th>Salary Type</th>
                        <th>Date</th>

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

export default SalaryTypeSetup