import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ApiUrl from '../../ApiUrl'

const POSSetting = () => {
    const [placeOrderPermission, setPlaceOrderPermission] = useState({})
    const [quickOrderPermission, setQuickOrderPermission] = useState({})
    const [placeOrder, setPlaceOrder] = useState({})
    const [quickOrder, setQuickOrder] = useState({})
    const fn_getPermission = () => {
        axios.get(`${ApiUrl}/orderpermission`).then((res) => {
            const pOrder = res?.data?.data?.find(i => i?.permissionType === "placeOrder")
            if (pOrder) {
                setPlaceOrder(pOrder)
            }
            const qOrder = res?.data?.data?.find(i => i?.permissionType === "quickOrder")
            if (qOrder) {
                setQuickOrder(qOrder)
            }
        })
    }
    useEffect(() => {
        fn_getPermission()
    }, [])
    const fn_placeOrderSetting = (e) => {
        if (e.target.checked) {
            setPlaceOrderPermission({ ...placeOrderPermission, [e.target.name]: true })
        } else {
            const updatedPermissions = { ...placeOrderPermission };
            delete updatedPermissions[e.target.name];
            setPlaceOrderPermission(updatedPermissions);
        }
    }
    const fn_quickOrderSetting = (e) => {
        if (e.target.checked) {
            setQuickOrderPermission({ ...quickOrderPermission, [e.target.name]: true })
        } else {
            const updatedPermissions = { ...quickOrderPermission };
            delete updatedPermissions[e.target.name];
            setQuickOrderPermission(updatedPermissions);
        }
    }
    const fn_submitPlaceOrderPer = () => {
        if (Object.keys(placeOrderPermission).length === 0) {
            return toast.error("Select Permissions")
        }
        const params = { ...placeOrderPermission, permissionType: "placeOrder" }
        axios.post(`${ApiUrl}/orderpermission`, params).then((res) => {
            if (res?.data?.status === 200) {
                toast.success("Permission Created")
                fn_getPermission()
            } else {
                toast.error("Error Found")
            }
        })
    }
    const fn_submitquickOrderPer = () => {
        if (Object.keys(quickOrderPermission).length === 0) {
            return toast.error("Select Permissions")
        }
        const params = { ...quickOrderPermission, permissionType: "quickOrder" }
        axios.post(`${ApiUrl}/orderpermission`, params).then((res) => {
            if (res?.data?.status === 200) {
                toast.success("Permission Created")
            } else {
                toast.error("Error Found")
            }
        })
    }
    return (
        <>
            <div className="row p-5 ">
                <div className="border-bottom pb-2">
                    <h5 className='fs-4'>Place Order Setting</h5>
                </div>
                <div className="row my-2">
                    <div className="row mt-2">
                        <div className="col-md-2 d-flex align-items-center">
                            {placeOrder?.waiter === true ? (
                                <input type="checkbox" defaultChecked id='one' name="waiter" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='one' name="waiter" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            )}
                            <label htmlFor="one" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Waiter</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {placeOrder?.table === true ? (
                                <input type="checkbox" defaultChecked id='two' name="table" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='two' name="table" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            )}
                            <label htmlFor="two" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Table</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {placeOrder?.cookingTime === true ? (
                                <input type="checkbox" defaultChecked id='three' name="cookingTime" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='three' name="cookingTime" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            )}
                            <label htmlFor="three" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Cooking Time</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {placeOrder?.tableMap === true ? (
                                <input type="checkbox" defaultChecked id='four' name="tableMap" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='four' name="tableMap" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            )}
                            <label htmlFor="four" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Table Map</label>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            {placeOrder?.soundEnabled === true ? (
                                <input type="checkbox" defaultChecked id='five' name="soundEnabled" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='five' name="soundEnabled" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_placeOrderSetting(e)} />
                            )}
                            <label htmlFor="five" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Is Sound Enabled</label>
                        </div>
                        <div className='col-md-1'>
                            <button className='btn btn-sm btn-danger' onClick={fn_submitPlaceOrderPer}>Submit</button>
                        </div>
                    </div>
                </div>

                <div className="border-bottom pb-2 mt-5">
                    <h5 className='fs-4'>Quick Order Setting</h5 >
                </div>

                <div className="row my-2">
                    <div className="row mt-2">
                        <div className="col-md-2 d-flex align-items-center">
                            {quickOrder?.waiter === true ? (
                                <input type="checkbox" defaultChecked id='one' name="waiter" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='one' name="waiter" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            )}
                            <label htmlFor="one" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Waiter</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {quickOrder?.table === true ? (
                                <input type="checkbox" defaultChecked id='two' name="table" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='two' name="table" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            )}
                            <label htmlFor="two" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Table</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {quickOrder?.cookingTime === true ? (
                                <input type="checkbox" defaultChecked id='three' name="cookingTime" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='three' name="cookingTime" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            )}
                            <label htmlFor="three" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Cooking Time</label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            {quickOrder?.tableMap === true ? (
                                <input type="checkbox" defaultChecked id='four' name="tableMap" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='four' name="tableMap" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            )}
                            <label htmlFor="four" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Table Map</label>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            {quickOrder?.soundEnabled === true ? (
                                <input type="checkbox" defaultChecked id='five' name="soundEnabled" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            ) : (
                                <input type="checkbox" id='five' name="soundEnabled" style={{ width: '20px', height: '20px', cursor: 'pointer' }} onChange={(e) => fn_quickOrderSetting(e)} />
                            )}
                            <label htmlFor="five" className='fw-bold ms-2 posText' style={{ cursor: 'pointer' }}>Is Sound Enabled</label>
                        </div>
                        <div className='col-md-1'>
                            <button className='btn btn-sm btn-danger' onClick={fn_submitquickOrderPer}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default POSSetting