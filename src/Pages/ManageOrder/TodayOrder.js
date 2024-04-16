import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiUrl from "../../ApiUrl";
import { AiFillDelete } from "react-icons/ai"
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from "react-toastify";
const { confirm } = Modal;

const TodayOrder = () => {
    const [allOrder, setAllOrder] = useState([])
    const fn_allOrder = () => {
        axios.get(`${ApiUrl}/order`).then((res) => {
            const toDayDate = new Date(localStorage.getItem("startTime")).toLocaleDateString()
            const filteredOrders = res.data?.data.filter((order) => {
                const orderDate = new Date(order?.startTime).toLocaleDateString()
                return orderDate === toDayDate;
            });
            setAllOrder(filteredOrders.reverse());
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
    )
}

export default TodayOrder 