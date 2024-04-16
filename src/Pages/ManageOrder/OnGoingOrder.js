import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiUrl from "../../ApiUrl";
import { AiFillEye } from "react-icons/ai"
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from "react-toastify";
import { BiSolidEdit } from "react-icons/bi";
import ViewOrder from "./ViewOrder";
const { confirm } = Modal;

const OnGoingOrder = ({ setOrderOption, setUpdateOrder }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [viewModal, setViewModal] = useState(false)
    const [selectedDiscount, setSelectedDiscount] = useState("percent")
    const [discount, setDiscount] = useState("")
    const [showPayment, setShowPayment] = useState(false)
    const [cusPay, setCusPay] = useState("")
    const [allOrders, setAllOrders] = useState([])
    const [singleOrderDetail, setSingleOrderDetail] = useState([])
    const [orderAmount, setOrderAmount] = useState("")
    const [viewSindleOrder, setViewSingleOrder] = useState({})
    const fn_getAllOrders = () => {
        axios.get(`${ApiUrl}/order`).then((res) => {
            if (res?.data?.status === 200) {
                setAllOrders(res.data?.data?.filter((item) => item?.state === "pending"))
            }
        })
    }
    useEffect(() => {
        fn_getAllOrders()
    }, [])
    const fn_completeOrder = (item) => {
        setSingleOrderDetail(item)
        setOrderAmount(item?.totalAmount)
        setModalOpen(true)
    }
    const printInvoice = (params) => {
        const invoiceContent = `
        <html>
        <head>
          <title>Document</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            .dotted-line {
                border-top: 1px dashed #000;
                width: 100%;
                margin: 10px 0;
            }
          </style>
        </head>
        <body style="padding-top: 50px;">
        <h3 style="text-align: center;">Light House Development</h3>
          <table style="margin: 10% 30% 3% 30%; width: 100%;">
            <tr>
              <td style="width: 250px;">Date:</td>
              <td>${new Date().toLocaleDateString()}</td>
            </tr>
          </table>
          <div style="margin: 0 30%; width: 400px;">
          <div class="dotted-line"></div>
          </div>
          <table style="margin: 2% 30% 2% 30%; width: 100%;">
            <tr>
              <th style="text-align: left; width: 250px;">Item</th>
              <th style="text-align: left;">Total</th>
            </tr>
            ${singleOrderDetail?.order?.map((item) => `
            <tr>
                <td>${item?.productName}</td>
                <td>Rs ${item?.totalPrice}</td>
            </tr>
          `).join('')}
          </table>
          <div style="margin: 0 30%; width: 400px;">
          <div class="dotted-line"></div>
          </div>
          <table style="margin: 0 30%; width: 100%;">
            <tr>
              <td style="width: 250px;">Subtotal</td>
              <th style="text-align: left;">Rs ${orderAmount}</th>
            </tr>
            <tr>
              <td style="width: 250px;">Service Charge</td>
              <th style="text-align: left;">Rs 0</th>
            </tr>
            <tr>
              <td style="width: 250px;">Discount</td>
              <th style="text-align: left;">Rs ${discount === "" ? 0 : parseInt(discount)}</th>
            </tr>
          </table>
          <div style="margin: 0 30%; width: 400px;">
          <div class="dotted-line"></div>
          </div>
          <table style="margin: 0 30%; width: 100%;">
            <tr>
              <th style="text-align: left;">GrandTotal</th>
              <th style="text-align: left;">Rs ${params?.payableAmount}</th>
            </tr>
            <tr>
              <td style="width: 250px;">Customer Paid Amount</td>
              <th style="text-align: left;">Rs ${params?.payableAmount}</th>
            </tr>
            <tr>
              <td style="width: 250px;">Due</td>
              <th style="text-align: left;">Rs ${params?.due}</th>
            </tr>
            <tr>
              <td style="width: 250px;">Total Payment</td>
              <th style="text-align: left;">Rs ${params?.payableAmount}</th>
            </tr>
          </table>
          <div style="margin: 0 30%; width: 400px;">
          <div class="dotted-line"></div>
          </div>
          <h3 style="text-align: center;">Payment Status: Paid</h3>
          <h4 style="text-align: center;">Thank You Very Much</h4>
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
    const fn_submit = () => {
        const params = {
            orderId: singleOrderDetail?._id,
            order: singleOrderDetail,
            discountType: selectedDiscount,
            discount: discount === "" ? 0 : parseInt(discount),
            totalAmount: orderAmount,
            payableAmount: selectedDiscount === "amount" ?
                (discount === "" ? orderAmount : orderAmount - parseInt(discount))
                :
                (discount === "" ? orderAmount : orderAmount - (orderAmount * (parseInt(discount) / 100))),
            due: selectedDiscount === "amount" ? (
                discount === "" ? orderAmount : (orderAmount - parseInt(discount)) - parseInt(cusPay)
            ) : (
                discount === "" ? orderAmount : orderAmount - (orderAmount * (parseInt(discount) / 100)) - parseInt(cusPay)
            )
        }
        if (params?.due > 0) {
            return toast.error("Due amount Required")
        } else if (params?.due < 0) {
            return toast.error("Invalid Due Amount")
        }
        axios.patch(`${ApiUrl}/order`, params).then((res) => {
            console.log(res.data.status)
            if (res?.data?.status === 200) {
                toast.success("Order Served!")
                setModalOpen(false)
                printInvoice(params);
                fn_getAllOrders()
            }
        })
    }
    const fn_cancelOrder = (id) => {
        axios.patch(`${ApiUrl}/order/cancel/${id}`).then((res) => {
            if (res?.data?.status === 200) {
                toast.success("Order Cancelled")
                return fn_getAllOrders()
            } else {
                toast.error(res.data?.message)
            }
        })
    }
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure Cancel this Order?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                fn_cancelOrder(id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const fn_viewOrder = (item) => {
        setViewSingleOrder(item)
        setViewModal(true)
    }
    return (
        <>
            <Modal
                title="Selct Your Payment Method"
                style={{
                    top: 20,
                }}
                open={modalOpen}
                onOk={() => fn_submit()}
                onCancel={() => setModalOpen(false)}
                width={900}
                okText="Pay Now and Print invoice"
            >
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <label>Discount Type</label><br />
                                <select className="posInputText w-100" onChange={(e) => setSelectedDiscount(e.target.value)}>
                                    <option selected value={"percent"}>Percent(%)</option>
                                    <option value={"amount"}>Amount</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label>Discount</label><br />
                                <input type="number" className="posInputText w-100" onChange={(e) => setDiscount(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <br />
                                <button className="btn btn-sm btn-success" onClick={() => setShowPayment(true)}>Payment</button>
                            </div>
                        </div>
                        <hr />
                        {showPayment && (
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="posText">Payment Method</label><br />
                                    <select className="posInputText w-100">
                                        <option selected>Cash Payment</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="posText">Customer Payment</label><br />
                                    <input type="number" className="posInputText w-100" onChange={(e) => setCusPay(e.target.value)} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <table>
                            <tr>
                                <td>Total Amount</td>
                                <td>{orderAmount} Rs</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>{discount === "" ? 0 : discount} {selectedDiscount === "percent" ? (<>%</>) : (<>Rs</>)}</td>
                            </tr>
                            <tr>
                                <td>Payable Amount</td>
                                {selectedDiscount === "amount" ? (
                                    <td>{discount === "" ? orderAmount : orderAmount - parseInt(discount)} Rs</td>
                                ) : (
                                    <td>{discount === "" ? orderAmount : orderAmount - (orderAmount * (parseInt(discount) / 100))} Rs</td>
                                )}
                            </tr>
                            <tr>
                                <td>Total Due</td>
                                {selectedDiscount === "amount" ? (
                                    <td>{discount === "" ? orderAmount : (orderAmount - parseInt(discount)) - parseInt(cusPay)} Rs</td>
                                ) : (
                                    <td>{discount === "" ? orderAmount : orderAmount - (orderAmount * (parseInt(discount) / 100)) - parseInt(cusPay)} Rs</td>
                                )}
                            </tr>
                        </table>
                    </div>
                </div>
            </Modal>
            <ViewOrder item={viewSindleOrder} Modal={Modal} viewModal={viewModal} setViewModal={setViewModal} />
            <div className="allOrdersListMain row">
                {allOrders && allOrders?.map((item) => (
                    <div className="col-md-4 p-1">
                        <div className="singleOrderDetail">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label className="posText fw-bold">Token # {item?.tokenNumber}</label><br />
                                    <label className="posText fw-bold">Order # {item?.orderNumber}</label>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-warning" title="Update Order" onClick={() => {
                                        setOrderOption("newOrder")
                                        setUpdateOrder(item)
                                    }}>
                                        <BiSolidEdit />
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-sm btn-success" title="View Order" onClick={() => fn_viewOrder(item)}>
                                        <AiFillEye />
                                    </button>
                                </div>
                            </div>
                            <label className="posText">Table: {item?.table}</label><br />
                            <label className="posText">Waiter: {item?.waiter}</label><br />
                            <label className="posText">Customer: {item?.customer}</label><br />
                            <label className="posText">Customer Type: {item?.customerType}</label><br />
                            <label className="posText">Order Date: {new Date(item?.startTime).toLocaleDateString()}</label><br />
                            <div className="d-flex gap-1 mt-2 justify-content-end">
                                <button className="btn btn-sm btn-success" onClick={() => fn_completeOrder(item)}>Complete</button>
                                <button className="btn btn-sm btn-danger" onClick={() => showDeleteConfirm(item?._id)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OnGoingOrder