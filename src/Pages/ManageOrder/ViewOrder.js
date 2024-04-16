import React from "react";

const ViewOrder = ({ item, Modal, viewModal, setViewModal }) => {
    console.log(item)
    return (
        <div>
            <Modal
                title="View Order"
                style={{
                    top: 20,
                }}
                open={viewModal}
                onOk={() => setViewModal(false)}
                onCancel={() => setViewModal(false)}
                width={800}
            >
                <hr />
                <div>
                    <div className="d-flex gap-3 justify-content-between">
                        <div className="h4 fw-bold">Order # {item?.orderNumber}</div>
                        <div>Order Date : <b>{new Date(item?.startTime).toLocaleDateString()}</b></div>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="h4 fw-bold">Token # {item?.tokenNumber}</div>
                    </div>
                    <hr />
                    <div className="d-flex gap-3">
                        <div className="posText">Customer :</div>
                        <div className="posText fw-bold">{item?.customer}</div>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="posText">Customer Type :</div>
                        <div className="posText fw-bold">{item?.customerType}</div>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="posText">Waiter :</div>
                        <div className="posText fw-bold">{item?.waiter}</div>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="posText">Table :</div>
                        <div className="posText fw-bold">{item?.table}</div>
                    </div>
                    <hr />
                    <table className="w-100">
                        <tr>
                            <th className="ps-1">Sr #</th>
                            <th className="ps-1">Item</th>
                            <th className="ps-1">Unit Price</th>
                            <th className="ps-1">Order Quantity</th>
                            <th className="ps-1">Total Price</th>
                        </tr>
                        {item?.order?.map((i, index) => (
                            <tr>
                                <td className="ps-1">{index + 1}</td>
                                <td className="ps-1">{i?.productName}</td>
                                <td className="ps-1">{i?.orderQty}</td>
                                <td className="ps-1">{i?.unitPrice}</td>
                                <td className="ps-1">{i?.totalPrice}</td>
                            </tr>
                        ))}
                    </table>
                    <div className="d-flex justify-content-end w-100">
                        <label className="me-2 mt-1">Grand Total : <b>Rs {item?.totalAmount}</b></label>
                    </div>
                    <hr />
                </div>
            </Modal>
        </div>
    )
}

export default ViewOrder