import React, { useEffect, useState } from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import ApiUrl from '../../ApiUrl';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from "react-toastify";
const { confirm } = Modal;

const CompleteOrder = () => {
    const [compOrd, setcompOrd] = useState([])

    useEffect(() => {
        axios.get(`${ApiUrl}/order`)
            .then((res) => {
                console.log(res?.data?.data)
                const filteredData = res?.data?.data?.filter((order) => {
                    return order?.state === "served";
                })
                setcompOrd(filteredData)
            })
    }, []);

    const fn_deleteOrder = (id) => {
        axios.delete(`${ApiUrl}/order/${id}`).then((res) => {
            if (res?.data?.status === 200) {
                toast.error("Order Deleted")
                axios.get(`${ApiUrl}/order`).then((res) => {
                    const filteredData = res?.data?.data?.filter((order) => {
                        return order?.state === "served";
                    })
                    setcompOrd(filteredData)
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
            <HomeInfo name='Order' secondName="Complete Order" />
            <div className=" table">
                <div className="row p-3">
                    <div className="d-flex align-items-center border-bottom p-3">
                        <div className="col-md-12"><h5>Complete Order</h5></div>
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
                        {compOrd?.map((v, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{v?.orderNumber}</td>
                                <td>{v?.customer}</td>
                                <td>{v?.customerType}</td>
                                <td>{v?.waiter}</td>
                                <td>{v?.table}</td>
                                <td>{new Date(v?.startTime).toLocaleDateString()}</td>
                                <td><div className='fw-bold text-success' style={{ textTransform: "capitalize" }}>{v?.state}</div></td>
                                <td>Rs {v?.totalAmount}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => showDeleteConfirm(v?._id)}><AiFillDelete /></button>
                                </td>

                            </tr>)
                        )
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompleteOrder