import React from 'react'
import HomeInfo from '../HomeInfo/HomeInfo'
const SalaryGenrate = () => {
    return (
        <>
            <HomeInfo name='Payroll' secondName='Create' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Genrate Now
                    </button>
                    <button type="button" className='btn ms-3 btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Manage Salary Genrate
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SL No</th>
                        <th>Employee Name</th>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Genrate Date</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Salary Type</th>
                        <th>Genrated By</th>

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

                    </tr>
                </table>
            </div>
        </>
    )
}

export default SalaryGenrate