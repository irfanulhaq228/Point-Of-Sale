import React from "react";
import "../Report/report.css";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import { useState } from "react";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import OrderDetails from "./OrderDetails";
import { Modal } from 'antd';
import { toast } from "react-toastify";

const PurchaseReport = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [singleOrderDetail, setSingleOrderDetail] = useState()
    const [allFoods, setAllFoods] = useState([])
    const [searchedOrders, setSearchedOrders] = useState([])
    const fn_allFoods = () => {
        axios.get(`${ApiUrl}/food`).then((res) => {
            setAllFoods(res.data?.data)
        })
    }
    useEffect(() => {
        fn_allFoods()
    }, [])
    const fn_showDetails = (item) => {
        setModalOpen(true)
        console.log(item)
        setSingleOrderDetail(item)
    }
    const sendData = (values) => {
        const id = values.foodId.value
        const paramitors = {
            'FromDate': values.fromDate.value,
            'ToDate': values.toDate.value,
        }
        axios.post(`${ApiUrl}/order/search/${id}`, paramitors).then((res) => {
            if (res.data?.status === 200) {
                setSearchedOrders(res.data?.data)
            } else {
                toast.error(res?.data?.message)
            }
        })
    }

    return (
        <>
            <OrderDetails Modal={Modal} modalOpen={modalOpen} setModalOpen={setModalOpen} item={singleOrderDetail} />
            <HomeInfo name="Reports" secondName="Sale Report" />
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
                                    Select Food:<span className="text-danger">*</span>
                                </label>
                            </div>
                            <div className="col-md-5">
                                <select className="posInputText" style={{ width: "300px" }} name="foodId">
                                    <option>---Select Food---</option>
                                    {allFoods && allFoods?.map((item) => (
                                        <option value={item?._id}>{item?.foodName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-md-4 text-md-end">
                                <label for="from" className="posText fw-bold">
                                    From:<span className="text-danger">*</span>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="date" id="from" name="fromDate" className="posInputText" style={{ width: "300px" }} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-md-4 text-md-end">
                                <label for="from" className="posText fw-bold">
                                    To:<span className="text-danger">*</span>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="date" id="to" name="toDate" className="posInputText" style={{ width: "300px" }} />
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
                        {searchedOrders && searchedOrders?.map((item) => (
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
                        )}
                    </table>
                </div>
            </div>
        </>
    );
}

export default PurchaseReport;
