import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai"
import "./Order.css"
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiUrl, { imgUrl } from '../../ApiUrl';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import OnGoingOrder from './OnGoingOrder';
import TodayOrder from './TodayOrder';

const POSInvoice = () => {
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
    const [tableShow, setTableShow] = useState(false)
    const [selectedPrice, setSelectedPrice] = useState("")
    const [varientQty, setVarientQty] = useState("1")
    const [selectVarient, setSelectedVarient] = useState({})
    const [selectVarientId, setSelectedVarientId] = useState("")
    const [allFood, setAllFood] = useState([])
    const [allVarient, setAllVarient] = useState([])
    const [addToCartProduct, setAddToCartProduct] = useState([])
    const [orderOption, setOrderOption] = useState("newOrder")
    const [orderPermission, setOrderPermission] = useState("")
    const [updateOrder, setUpdateOrder] = useState({})
    useEffect(() => {
        axios.get(`${ApiUrl}/food`).then((res) => {
            setAllFood(res?.data?.data)
        })
        axios.get(`${ApiUrl}/varient`).then((res) => {
            setAllVarient(res.data.data)
        });
        Permission()
    }, [])
    useEffect(() => {
        if (Object.keys(updateOrder)?.length > 0) {
            const a = updateOrder?.order
            setAddToCartProduct(a)
        }
    }, [updateOrder])
    const fn_showAllVarients = () => {
        axios.get(`${ApiUrl}/varient`).then((res) => {
            setAllVarient(res.data.data)
        })
    }
    const fn_showVarients = (id) => {
        axios.get(`${ApiUrl}/varient/foodVarient/${id}`).then((res) => {
            setAllVarient(res.data.data)
        })
    }
    const fn_varientDetails = (item) => {
        setModalOpen(true)
        setTableShow(true)
        setSelectedVarient(item)
        setSelectedVarientId(item?._id)
    }
    const fn_addToCart = () => {
        if (selectVarientId === "") {
            return toast.error("Select Varient")
        } else if (document.getElementById("orderQty").value === "") {
            return toast.error("Enter Order Quantity")
        }
        else {
            let params = {}
            if (selectVarient?.types?.length > 0) {
                params = {
                    productId: selectVarientId,
                    productName: selectVarient?.varientName,
                    orderQty: parseInt(document.getElementById("orderQty").value),
                    totalPrice: parseInt(document.getElementById("orderQty").value) * parseInt(selectedPrice),
                    unitPrice: parseInt(selectedPrice)
                }
            } else if (selectVarient?.types?.length === 0) {
                params = {
                    productId: selectVarientId,
                    productName: selectVarient?.varientName,
                    orderQty: parseInt(document.getElementById("orderQty").value),
                    totalPrice: parseInt(document.getElementById("orderQty").value) * parseInt(selectVarient?.price),
                    unitPrice: parseInt(selectVarient?.price)
                }
            }
            addToCartProduct?.push(params)
            setTableShow(false)
            setModalOpen(false)
        }
    }
    const printInvoice = (tokenNumber, orderNumber, startTime) => {
        const invoiceContent = `
    <html>
      <head>
        <title>Document</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h3{
            text-align: center;
          }
          table {
            margin: 0 auto; /* Center the table horizontally */
            border-collapse: collapse;
            width: 50%; /* Adjust the width as needed */
          }
          th, td {
            border-bottom: 1px solid #000;
            padding: 8px;
          }
        </style>
      </head>
      <body>
        <h3 className="printHeading">Token No: ${tokenNumber}</h3>
        <h4 className="printHeading">Order No: ${orderNumber}</h4>
        <p>Date: ${new Date(startTime).toLocaleDateString()}</p>
        <hr>
        <table>
        ${addToCartProduct?.map((item) => `
        <tr>
              <td>Item</td>
              <td>${item?.productName}</td>
              </tr>
              <tr>


              <td>Quantity</td>
              <td>${item?.orderQty}</td>
              <tr>
              </tr>
              <td>Total</td>
                 <td>Rs ${item?.totalPrice}</td>
            </tr>
       
            <tr>
             
          
           
            </tr>
          `).join('')}
        </table>
      </body>
    </html>
  `;
        const printWindow = window.open('', '', 'width=1000,height=1000');
        printWindow.document.open();
        printWindow.document.write(invoiceContent);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
        window.location.reload(true);

    }
    const fn_order = () => {
        if (document.getElementById('customer').value === "") {
            return toast.error("Choose Customer")
        } else if (document.getElementById('customerType').value === "") {
            return toast.error("Choose Customer Type")
        }
        if (orderPermission?.waiter === true) {
            if (document.getElementById('waiter').value === "") {
                return toast.error("Choose Waiter")
            }
        }
        if (orderPermission?.table === true) {
            if (document.getElementById('table').value === "") {
                return toast.error("Choose table")
            }
        }
        const params = {
            customer: document.getElementById('customer').value,
            customerType: document.getElementById('customerType').value,
            waiter: document.getElementById('waiter').value,
            table: document.getElementById('table').value,
            order: addToCartProduct,
            startTime: new Date(localStorage.getItem('startTime')).toISOString(),
            totalAmount: addToCartProduct?.reduce((acc, i) => { return acc + i?.totalPrice }, 0),
            tokenNumber: parseInt(localStorage.getItem("tokenNumber"))
        }
        axios.post(`${ApiUrl}/order`, params).then((res) => {
            console.log(res.data)
            if (res.data.status === 200) {
                const prevToken = localStorage.getItem("tokenNumber")
                localStorage.setItem("tokenNumber", parseInt(prevToken) + 1)
                Swal.fire({
                    title: 'Order Placed!',
                    text: "Do you want to Print Token No. ???",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#157347',
                    cancelButtonColor: '#B9BFBC',
                    confirmButtonText: 'Yes, Print!',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        printInvoice(res.data.data?.tokenNumber, res.data.data?.orderNumber, res.data?.data?.startTime);
                    }
                });
                setTimeout(() => {
                    setAddToCartProduct([])
                }, 1500)
            } else {
                return toast.error(res.data.message)
            }
        })
    }
    const fn_OrderOption = (value) => {
        setOrderOption(value)
    }
    const Permission = (() => {
        axios.get(`${ApiUrl}/orderpermission`).then((res) => {
            setOrderPermission(res.data.data?.find(i => i?.permissionType === 'placeOrder'))
        })
    })
    const fn_updateOrder = () => {
        if (document.getElementById('customer').value === "") {
            return toast.error("Choose Customer")
        } else if (document.getElementById('customerType').value === "") {
            return toast.error("Choose Customer Type")
        }
        if (orderPermission?.waiter === true) {
            if (document.getElementById('waiter').value === "") {
                return toast.error("Choose Waiter")
            }
        }
        if (orderPermission?.table === true) {
            if (document.getElementById('table').value === "") {
                return toast.error("Choose table")
            }
        }
        const params = {
            customer: document.getElementById('customer').value,
            customerType: document.getElementById('customerType').value,
            waiter: document.getElementById('waiter').value,
            table: document.getElementById('table').value,
            order: addToCartProduct,
            totalAmount: addToCartProduct?.reduce((acc, i) => { return acc + i?.totalPrice }, 0),
        }
        axios.patch(`${ApiUrl}/order/updateorder/${updateOrder?._id}`, params).then((res) => {
            if (res?.data?.status === 200) {
                setUpdateOrder({})
                setAddToCartProduct([])
                toast.success("Order Updated")
                return setOrderOption("onGoingOrder")
            } else {
                return toast.error(res?.data?.message)
            }
        })
    }
    return (
        <>
            {/* Product Click Modal */}
            <Modal
                title="Product Detail"
                style={{
                    top: 20,
                }}
                open={modalOpen}
                onOk={() => {
                    fn_addToCart()
                }}
                onCancel={() => {
                    setModalOpen(false)
                    setTableShow(false)
                }}
                width={800}
                okText="Add to Cart"
            >
                <hr />
                {tableShow && Object.keys(selectVarient).length !== 0 && (
                    <table className='w-100'>
                        <tr>
                            <th>Item Info</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                        </tr>
                        <tr>
                            <td>{selectVarient?.varientName}</td>
                            {selectVarient.types.length > 0 ? (
                                <td>
                                    <select className='posInputText w-100' onChange={(e) => setSelectedPrice(e.target.value)}>
                                        <option value={""} selected>Select Size</option>
                                        {selectVarient?.types?.map((item) => (
                                            <option value={item?.modulePrice}>{item?.moduleName}</option>
                                        ))}
                                    </select>
                                </td>
                            ) : (
                                <td>None</td>
                            )}
                            <td style={{ width: "100px" }}><input type='number' className='posInputText w-100' id='orderQty' value={varientQty} onChange={(e) => setVarientQty(e.target.value)} /></td>
                            {selectVarient?.types?.length === 0 ? (
                                <td>Rs {selectVarient?.price}</td>
                            ) : (
                                <td>{selectedPrice !== "" && "Rs " + selectedPrice}</td>
                            )}
                            {selectVarient?.types?.length === 0 ? (
                                <td>Rs {parseInt(selectVarient?.price) * parseInt(varientQty)}</td>
                            ) : (
                                <td>{selectedPrice !== "" && "Rs " + parseInt(selectedPrice) * parseInt(varientQty)}</td>
                            )}
                        </tr>
                    </table>
                )}
            </Modal>
            <div className='d-flex gap-2 mt-4 mb-2'>
                <button className='btn btn-success' onClick={() => navigate("/")}><AiOutlineHome /></button>
                <button className='btn btn-warning' onClick={() => fn_OrderOption("newOrder")}>New Order</button>
                <button className='btn btn-info' onClick={() => fn_OrderOption("onGoingOrder")}>On Going Order</button>
                <button className='btn btn-primary' onClick={() => fn_OrderOption("todayOrder")}>Today Order</button>
            </div>
            <hr />
            {orderOption === "newOrder" && (
                <div className='row'>
                    <div className='col-md-2'>
                        <div className="d-sm-flex flex-column gap-1">
                            <button className='btn btn-success' onClick={fn_showAllVarients}>All</button>
                            {allFood && allFood?.map((item) => (
                                <button className='btn btn-success' onClick={() => fn_showVarients(item?._id)}>{item?.foodName}</button>
                            ))}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='posProduct'>
                            <div className='row'>
                                {allVarient && allVarient?.filter(i => i?.addIngredient === true)?.map((item) => (
                                    <div className='col-md-3 col-sm-4 posPorductBox'>
                                        <div className='pb-3' onClick={(e) => fn_varientDetails(item)}>
                                            <div className='px-2 text-center'>
                                                <img src={`${imgUrl}/${item?.imageUrl}`} alt="image missing" width={"80%"} />
                                            </div>
                                            <hr />
                                            <label className='posText'>{item?.varientName}</label><br />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 my-2 row'>
                        <div className='col-md-6'>
                            <label className='posText' style={{ fontSize: "11px" }}>Select Customer*</label>
                            <select className='posInputText mb-1 w-100' style={{ fontSize: "11px" }} id='customer'>
                                <option value={""}>Select Customer</option>
                                <option value={"Customer 1"} selected={updateOrder?.customer === "Customer 1" && true}>Customer 1</option>
                                <option value={"Customer 2"} selected={updateOrder?.customer === "Customer 2" && true}>Customer 2</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label className='posText' style={{ fontSize: "11px" }}>Select Customer Type*</label>
                            <select className='posInputText mb-1 w-100' style={{ fontSize: "11px" }} id='customerType'>
                                <option value={""}>Customer Type</option>
                                <option value={"Dine in Customer"} selected={updateOrder?.customerType === "Dine in Customer" && true}>Dine in Customer</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label className='posText'>Waiter*</label>
                            <select className='posInputText mb-1 w-100' style={{ fontSize: "11px" }} id='waiter'>
                                <option value={""}>Select Waiter</option>
                                <option value={"Waiter 1"} selected={updateOrder?.waiter === "Waiter 1" && true}>Waiter 1</option>
                                <option value={"Waiter 2"} selected={updateOrder?.waiter === "Waiter 2" && true}>Waiter 2</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label className='posText'>Table*</label>
                            <select className='posInputText mb-1 w-100' style={{ fontSize: "11px" }} id='table'>
                                <option value={""}>Select Table</option>
                                <option value={"Table 1"} selected={updateOrder?.table === "Table 1" && true}>Table 1</option>
                                <option value={"Table 2"} selected={updateOrder?.table === "Table 2" && true}>Table 2</option>
                            </select>
                        </div>
                        <div className='paymentPOSMain'>
                            <label className='fw-bold posText mb-3'>Cart</label>
                            {addToCartProduct && addToCartProduct?.map((item) => (
                                <>
                                    <div className='d-flex justify-content-between'>
                                        <div style={{ fontSize: "11px" }}>
                                            <label>{item?.productName}</label><br />
                                            <label>{item?.unitPrice} Rs</label>
                                        </div>
                                        <div style={{ fontSize: "11px" }}>
                                            <label>Total : {item?.totalPrice} Rs</label>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))}
                            {addToCartProduct?.length > 0 && (
                                <>
                                    <div className='text-end'>
                                        <label>Grand Total: {addToCartProduct?.reduce((acc, i) => { return acc + i?.totalPrice }, 0)} Rs</label>
                                    </div>
                                    <div>
                                        {Object.keys(updateOrder)?.length > 0 ? (
                                            <button className='btn btn-danger w-100 mt-4' onClick={fn_updateOrder}>Update Order</button>
                                        ) : (
                                            <button className='btn btn-danger w-100 mt-4' onClick={fn_order}>Place Order</button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {orderOption === "onGoingOrder" && (
                <OnGoingOrder setOrderOption={setOrderOption} setUpdateOrder={setUpdateOrder} />
            )}
            {orderOption === "todayOrder" && (
                <TodayOrder />
            )}
        </>
    )
}

export default POSInvoice