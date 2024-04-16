import React from 'react';
import { CiEdit } from 'react-icons/ci'
import { TiPin } from 'react-icons/ti'
import { TfiReload } from 'react-icons/tfi'
import { RxCross2 } from 'react-icons/rx'
import { BiMinus } from 'react-icons/bi'
import { BsFullscreenExit } from 'react-icons/bs'
import { LuArrowDownUp } from 'react-icons/lu'
const ReportsFooterOne = ({ stock, foodName }) => {
    return (
        <div>
            <div className='resturant-body'>

                <div className='rest-top'>
                    <p><b>{foodName}</b></p>
                    <div className='edit-fun  cursor-pointer'>
                        <div className='func-over text-center'>
                            <CiEdit className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>
                        <div className='func-over text-center'>
                            <TiPin className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>
                        <div className='func-over text-center'>
                            <TfiReload className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>

                        <div className='func-over text-center'>
                            <BiMinus className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>

                        <div className='func-over text-center'>
                            <BsFullscreenExit className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>
                        <div className='func-over text-center'>
                            <RxCross2 className='func-rep' />
                            <div className='overlay-edit'>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='rest-middle'>

                    <div className='res-mid-name text-center'>
                        <h3>
                            Dhaka Restaurant
                        </h3>
                        <p>98 Green Road , Farmgate , Dhaka-1122.</p>
                        <p>Print Date: 02/09/2023</p>
                    </div>
                    <div className='res-mid-row d-flex px-4  justify-content-between align-content-between'>

                        <div className="print">
                            <button className='btn-secondary  btn  copybtns'>
                                copy
                            </button>
                            <button className='btn-secondary border-start-0 btn  copybtns'>
                                CSV
                            </button>
                            <button className='btn-secondary  btn  border-start-0 copybtns'>
                                Excel
                            </button>
                            <button className='btn-secondary border-start-0 btn  copybtns'>
                                Pdf
                            </button>
                            <button className='btn-secondary border-start-0 btn  copybtns'>
                                Print
                            </button>
                            <button className='btn-secondary  btn  border-start-0 copybtns'>
                                Column Visibility
                            </button>
                        </div>
                        <div className="search ">
                            <label className=' search-btn ' htmlFor="search">Search</label>
                            <input type="text" name="search" id="search" />
                        </div>
                    </div>
                    <div className='res-mid-table px-4 py-1'>
                        <table className='purchaseTable'>
                            <tr className=''>
                                <th className=''><span>Purchase Date</span><LuArrowDownUp className='foatArrow' /></th>
                                <th className=''><span>Invoice No</span><LuArrowDownUp className='foatArrow' /> </th>
                                <th className=' '><span>Supplier Name</span><LuArrowDownUp className='foatArrow' /> </th>
                                <th className=' '><span>Total Amount</span><LuArrowDownUp className='foatArrow' /> </th>
                            </tr>
                            <tr>
                                <td className='border-1 no_dataTd text-center' colSpan={4}>
                                    No Data Available in the Table
                                </td>
                            </tr>
                            <tr>
                                <td className='border-1 no_dataTd text-end  text-black fw-bolder' colSpan={3}>
                                    Total Purchase
                                </td>
                                <td className='text-end text-black fw-bolder'>
                                    0
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='rest-bottom d-flex flex-wrap-reverse position-relative'>
                    <p className='entries'>Showing 0 to 0 of 0 entries</p>

                    <div className="btn-last d-flex col position-absolute end-0 pb-2 pr-2 flex-wrap">
                        <button className="btn  pre-next">
                            Previous
                        </button>
                        <button className="btn  px-4 pre-next bord-rit">
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ReportsFooterOne;
