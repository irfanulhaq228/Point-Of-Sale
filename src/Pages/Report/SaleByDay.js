import React from "react";
import "../Report/report.css";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import { useState } from "react";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { AiFillEye } from "react-icons/ai";
import OrderDetails from "./OrderDetails";
import { Modal } from 'antd';
import { toast } from "react-toastify";

const SaleByDay = () => {
    const [allOrders, setAllOrders] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [singleOrderDetail, setSingleOrderDetail] = useState()
    const fn_showDetails = (item) => {
        setModalOpen(true)
        setSingleOrderDetail(item)
    }
    const sendData = (values) => {
        if (values.date.value === "") {
            return toast.error("Select Date")
        } else {
            axios.post(`${ApiUrl}/order/searchbydate`, { date: values.date.value }).then((res) => {
                if (res?.data?.status === 200) {
                    setAllOrders(res?.data?.data)
                } else {
                    setAllOrders([])
                    return toast.error(res?.data?.message)
                }
            })
        }
    }

    return (
        <>
            <OrderDetails Modal={Modal} modalOpen={modalOpen} setModalOpen={setModalOpen} item={singleOrderDetail} />
            <HomeInfo name="Reports" secondName="Sale Report By Day" />
            {/* First Box */}
            <div className="mt-2 mx-5">
                <div className="formFood py-4 px-5">
                    <form
                        className="mt-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendData(e.target);
                        }}
                    >
                        <div className="mb-3 row">
                            <div className="col-md-4 text-md-end">
                                <label for="from" className="posText fw-bold">
                                    Select Day:<span className="text-danger">*</span>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="date" id="from" name="date" className="posInputText" style={{ width: "300px" }} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-danger mx-2">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Second Box */}
            <div className="my-2 mx-5">
                <div className="formFood py-4 px-5">
                    <table className="w-100">
                        <tr>
                            <th className="ps-2">View</th>
                            <th className="ps-2">Order No.</th>
                            <th className="ps-2">Token No.</th>
                            <th className="ps-2">Order Date</th>
                            <th className="ps-2">Customer</th>
                            <th className="ps-2">Waiter</th>
                            <th className="ps-2">Total Bill</th>
                            <th className="ps-2">Discount</th>
                            <th className="ps-2">Payable Bill</th>
                            <th className="ps-2">Due Amount</th>
                        </tr>
                        {allOrders?.length > 0 ? allOrders?.map((item) => (
                            <tr>
                                <td className="ps-2" style={{ width: "50px" }}>
                                    <button className="btn btn-sm btn-info" onClick={() => fn_showDetails(item)}><AiFillEye /></button>
                                </td>
                                <td className="ps-2">{item?.orderNumber}</td>
                                <td className="ps-2">{item?.tokenNumber}</td>
                                <td className="ps-2">{new Date(item?.startTime).toLocaleDateString()}</td>
                                <td className="ps-2">{item?.customer}</td>
                                <td className="ps-2">{item?.waiter}</td>
                                <td className="ps-2">Rs {item?.totalAmount}</td>
                                <td className="ps-2">{item?.discountType !== "percent" && item?.discountType} {item?.discount} {item?.discountType === "percent" && "%"}</td>
                                <td className="ps-2">Rs {item?.payableAmount}</td>
                                <td className="ps-2">Rs {item?.due}</td>
                            </tr>
                        )
                        ) : (
                            <tr>
                                <td colSpan={10} className="text-center">No Order Found</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </>
    );
}

export default SaleByDay;
