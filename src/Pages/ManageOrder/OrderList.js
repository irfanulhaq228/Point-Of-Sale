import React, { useEffect, useState } from "react";
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { AiFillDelete } from "react-icons/ai"
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from "react-toastify";
const { confirm } = Modal;

const OrderList = () => {
    const [allOrder, setAllOrder] = useState([])
    const fn_allOrder = () => {
        axios.get(`${ApiUrl}/order`).then((res) => {
            const filteredOrders = res.data?.data;
            setAllOrder(filteredOrders?.reverse());
        })
    }
    useEffect(() => {
        fn_allOrder()
    }, [])
    const fn_deleteOrder = (id) => {
        axios.delete(`${ApiUrl}/order/${id}`).then((res) => {
            if (res?.data?.status === 200) {
                toast.error("Order Deleted")
                return fn_allOrder()
            } else {
                toast.error(res.data?.message)
            }
        })
    }
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this Order?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                fn_deleteOrder(id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <>
            <HomeInfo name="Order" secondName="Order List" />
            <div className=" table">
                <div className="row p-3">
                    <div className="d-flex align-items-center border p-3">
                        <div className="col-md-2"><h5>Order List</h5></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <div className="col-md-5">
                                        <div className="d-flex align-items-center">

                                            <label className='fw-bold me-2' htmlFor="">From</label>
                                            <input type="date" className='form-control w-75 p-1 bg-light' />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="d-flex align-items-center">

                                            <label className='fw-bold me-2' htmlFor="">To</label>
                                            <input type="date" className='form-control w-50 p-1 bg-light' />
                                            <button type="button" className="btn btn-success rounded-1 ms-2 px-3 py-1 text-white">Save</button>
                                            <button type="button" className="btn btn-warning rounded-1 ms-2 px-3 py-1 text-white">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="w-100">
                            <tr>
                                <th>Sr #</th>
                                <th>Invoice</th>
                                <th>Customer Name</th>
                                <th>Customer Type</th>
                                <th>Waiter</th>
                                <th>Table No.</th>
                                <th>Order Date</th>
                                <th>State</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                            {allOrder && allOrder?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item?.orderNumber}</td>
                                    <td>{item?.customer}</td>
                                    <td>{item?.customerType}</td>
                                    <td>{item?.waiter}</td>
                                    <td>{item?.table}</td>
                                    <td>{new Date(item?.startTime).toLocaleDateString()}</td>
                                    {item?.state === 'served' ? (
                                        <td className="fw-bold text-success" style={{ textTransform: "capitalize" }}>{item?.state}</td>
                                    ) : (
                                        <td className="fw-bold text-danger" style={{ textTransform: "capitalize" }}>{item?.state}</td>
                                    )}
                                    <td>Rs {item?.state === 'served' ? item?.payableAmount : item?.totalAmount}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => showDeleteConfirm(item?._id)}><AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OrderList