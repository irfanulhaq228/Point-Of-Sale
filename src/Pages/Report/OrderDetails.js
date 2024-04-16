import React from "react"

const OrderDetails = ({ Modal, modalOpen, setModalOpen, item }) => {
    return (
        <Modal
            title="Sale Report"
            style={{
                top: 20,
            }}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            width={700}
        >
            <hr />
            <div className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between">
                    <div><label className="h4 fw-bold">Order # {item?.orderNumber}</label></div>
                    <div><label className="posText">Order Date : <b>{new Date(item?.startTime).toLocaleDateString()}</b></label></div>
                </div>
                <div className="row">
                    <div><label className="h4 fw-bold">Token # {item?.tokenNumber}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Customer Name</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item?.customer}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Customer Type</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item?.customerType}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Table</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item?.table}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Waiter</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item?.waiter}</label></div>
                </div>
                <div>
                    <table className="w-100">
                        <tr>
                            <th className="ps-2">Item</th>
                            <th className="ps-2">Order Quantity</th>
                            <th className="ps-2">Unit Price</th>
                            <th className="ps-2">Total Price</th>
                        </tr>
                        {item && item?.order?.map((i) => (
                            <tr>
                                <td className="ps-2">{i?.productName}</td>
                                <td className="ps-2">{i?.orderQty}</td>
                                <td className="ps-2">Rs {i?.unitPrice}</td>
                                <td className="ps-2">Rs {i?.totalPrice}</td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td colSpan={3} className="text-end fw-bold">Grand Total:&nbsp;</td>
                            <td className="ps-2 fw-bold">Rs {item?.reduce((acc, j) => {
                                return acc + j?.ingredient?.total
                            }, 0)}</td>
                        </tr> */}
                    </table>
                </div>
            </div>
        </Modal>
    )
}

export default OrderDetails