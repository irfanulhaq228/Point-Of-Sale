import React, { useEffect, useState } from 'react'
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'
import axios from 'axios';
import { toast } from 'react-toastify';
import ApiUrl from '../../../ApiUrl';
import { Modal } from 'antd';

function CustomerTypeList() {
    const [singleStock, setSingleStock] = useState({});
    const [customerType, setCustomerType] = useState([])

    useEffect(() => {
        axios.get(`${ApiUrl}/customertype`).then((res) => {
            setCustomerType(res.data?.data)
            console.log(res.data.data)
        })
    }, [])

    const sendData = (values) => {
        const parammitor = {
            'title': values.title.value,

        }
        axios.post(`${ApiUrl}/customertype`, parammitor)
            .then((res) => {
                // console.log(res.data.status)
                if (res.status === 200) {
                    axios.get(`${ApiUrl}/customertype`).then((res) => {
                        setCustomerType(res.data?.data)
                        console.log(res.data.data)
                    })
                    toast.success('customer Type  is Created')
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.error("Error:", err);
            });


    }

    const onDeleteStudent = (id) => {
        Modal.confirm({
            title: "Are you sure you want to delete?",
            onOk: () => {
                axios
                    .delete(
                        `${ApiUrl}/customertype/${id}`
                    )
                    .then((res) => {
                        if (res.data.status === 200) {
                            axios.get(`${ApiUrl}/customertype`).then((res) => {
                                setCustomerType(res.data?.data)
                                console.log(res.data.data)
                            })
                            toast.success('customer type is deleted')
                        }
                    });
            },
        });
    };

    const onUpdate = (values, item) => {
        const params = {
            title: values.updateTitle.value
        }
        axios.patch(`${ApiUrl}/customertype/${item?._id}`, params)
            .then((res) => {
                if (res?.data?.status === 200) {
                    toast.success('Updated')
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }


    return (
        <>
            <HomeInfo name='Customer Type' secondName='List' />

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Ingredient</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendData(e.target);
                                }}>
                                <div className="row mt-4">
                                    <div className='col-md-6'>
                                        <label
                                            for="exampleInputEmail1"
                                            class="posLableText"
                                        >
                                            Customer Type Name*
                                        </label>
                                    </div>
                                    <div className="col-md-6">

                                        <input
                                            type="text"
                                            className="posInputText"
                                            name="title"
                                            placeholder='Type Name'


                                        />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">



                                    </div>

                                </div>





                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Ingredient</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onUpdate(e.target, singleStock);
                                }}>
                                <div className="row mt-4">
                                    <div className='col-md-6'>
                                        <label
                                            for="exampleInputEmail1"
                                            class="posLableText"
                                        >
                                            Customer Type Name*
                                        </label>
                                    </div>
                                    <div className="col-md-6">

                                        <input
                                            type="text"
                                            className="posInputText"
                                            name="updateTitle"
                                            placeholder='Type Name'
                                            defaultValue={singleStock?.title}
                                        />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-plus  "></i> Add Customer Type
                    </button>
                </div>

                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>Sr #</th>
                        <th>Type Name</th>
                        <th>Action</th>
                    </tr>
                    {customerType?.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>Active</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1"


                                    onClick={() => setSingleStock(item)}
                                >
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => onDeleteStudent(item?._id)}
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

export default CustomerTypeList