import React, { useEffect, useState } from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import axios from 'axios';
import ApiUrl from '../../ApiUrl';
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;

const PurchaseItem = () => {
    const navigate = useNavigate()
    const [purchase, setpurchase] = useState([]);
    const [supplierData, setSupplier] = useState([]);
    const [modalDel, setModalDel] = useState(false)
    useEffect(() => {
        axios.get(`${ApiUrl}/purchase`)
            .then((res) => {
                if (res?.data?.status === 200) {
                    setpurchase(res?.data?.data?.reverse())
                }
            })

        axios.get(`${ApiUrl}/supplier`)
            .then((res) => {
                setSupplier(res?.data?.data)
            })
    }, []);

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure you want to delete this Purchase?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(`${ApiUrl}/purchase/${id}`)
                    .then((res) => {
                        if (res?.data?.status === 200) {
                            toast.success("Deleted Successfully")
                            axios.get(`${ApiUrl}/purchase`).then((res) => {
                                setpurchase(res?.data?.data?.reverse())
                            })
                        }
                        else {
                            console.log(res?.data?.error)
                        }

                    })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <>
            <HomeInfo name='Purchase' secondName='Purchase List' />
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" className='btn btn-info p-2 rounded-1 text-white' onClick={() => navigate("/addpurchase")} style={{ backgroundColor: '#428bca' }}>
                        <i className="fa-solid fa-plus  "></i> Add Purchase
                    </button>
                </div>
                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>Sr # </th>
                        <th>Supplier</th>
                        <th>Purchase Date</th>
                        <th>Payment Method</th>
                        <th>Ingredient Name</th>
                        <th>Ingredient qty</th>
                        <th>Unit Price</th>
                        <th>Ingredient total</th>
                        <th>Action</th>

                    </tr>

                    {purchase?.map((p, i) => (
                        <tr key={i}>

                            <td>{i + 1}</td>
                            <td>{supplierData?.find((s) => { return s?._id === p?.supplier })?.name}
                            </td>
                            <td>{new Date(p?.purchaseDate).toLocaleDateString()}</td>
                            <td>{p?.paymentMethod}</td>
                            <td>{p?.ingredient?.ingredientName}</td>
                            <td>{p?.ingredient?.qty}</td>
                            <td>Rs {p?.ingredient?.rate}</td>
                            <td>Rs {p?.ingredient?.total}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                &nbsp;
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => { showDeleteConfirm(p._id); setModalDel(true) }}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default PurchaseItem