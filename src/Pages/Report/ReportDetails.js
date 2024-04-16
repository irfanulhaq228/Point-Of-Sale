import React from "react";

const PurchaseDetails = ({ Modal, modalOpen, setModalOpen, item }) => {
    return (
        <Modal
            title="Purchase Details"
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
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="h4 fw-bold">Invoice # {item[0]?.invoiceNo}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Supplier Name</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item[0]?.supplierName}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Purchase Date</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{new Date(item[0]?.purchaseDate).toLocaleDateString()}</label></div>
                </div>
                <div className="row gap-2">
                    <div className="col-sm-3"><label className="posText">Payment Method</label></div>
                    <div className="col-sm-8"><label className="posText fw-bold">{item[0]?.paymentMethod}</label></div>
                </div>
                <div>
                    <table className="w-100">
                        <tr>
                            <th className="ps-2">Item</th>
                            <th className="ps-2">Purchase Quantity</th>
                            <th className="ps-2">Unit Price</th>
                            <th className="ps-2">Total Price</th>
                        </tr>
                        {item && item?.map((i) => (
                            <tr>
                                <td className="ps-2">{i?.ingredient?.ingredientName}</td>
                                <td className="ps-2">{i?.ingredient?.qty}</td>
                                <td className="ps-2">Rs {i?.ingredient?.rate}</td>
                                <td className="ps-2">Rs {i?.ingredient?.total}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Grand Total:&nbsp;</td>
                            <td className="ps-2 fw-bold">Rs {item?.reduce((acc, j) => {
                                return acc + j?.ingredient?.total
                            }, 0)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Modal>
    )
}

export default PurchaseDetails