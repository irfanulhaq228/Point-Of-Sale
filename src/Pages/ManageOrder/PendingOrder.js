import React, { useEffect, useState } from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import ApiUrl from '../../ApiUrl';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
const { confirm } = Modal;

const PendingOrder = () => {
    const [pendOrd, setPendOrd] = useState([]);
    useEffect(() => {
        axios.get(`${ApiUrl}/order`)
            .then((res) => {
                const pendingOrder = res?.data?.data?.filter((pending) => {
                    return pending.state === "pending"
                })
                setPendOrd(pendingOrder)
            })
    }, []);
    const fn_deleteOrder = (id) => {
        axios.delete(`${ApiUrl}/order/${id}`).then((res) => {
            if (res?.data?.status === 200) {
                toast.error("Order Deleted")
                axios.get(`${ApiUrl}/order`).then((res) => {
                    const pendingOrder = res?.data?.data?.filter((pending) => {
                        return pending.state === "pending"
                    })
                    setPendOrd(pendingOrder)
                })
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
            <HomeInfo name='Order' secondName="Pending Order" />
            <div className=" table">
                <div className="row p-3">
                    <div className="d-flex align-items-center border-bottom p-3">
                        <div className="col-md-12"><h5>Pending Order</h5></div>

                    </div>
                    <table className='mt-3'>
                        <tr>
                            <th>Sr #</th>
                            <th>Invoice</th>
                            <th>Customer Name</th>
                            <th>Customer Type</th>
                            <th>Waiter </th>
                            <th>Table</th>
                            <th>Order Date</th>
                            <th>State</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                        {pendOrd?.map((p, i) => (

                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{p?.orderNumber}</td>
                                <td>{p?.customer}</td>
                                <td>{p?.customerType}</td>
                                <td>{p?.waiter}</td>
                                <td>{p?.table}</td>
                                <td>{new Date(p?.startTime).toLocaleDateString()}</td>
                                <td>{
                                    p?.state === "pending" ? <div className='fw-bold text-danger' style={{ textTransform: "capitalize" }}>{p.state}</div> : <div className='text-primary fw-bold' style={{ textTransform: "capitalize" }}>{p.state}</div>
                                }</td>
                                <td>{p?.totalAmount}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => showDeleteConfirm(p?._id)}><AiFillDelete /></button>
                                </td>

                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default PendingOrder