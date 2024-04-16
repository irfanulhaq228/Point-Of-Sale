import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'


const PurchaseReturn = () => {

    return (
        <>
            <HomeInfo name='Purchase' secondName='Purchase Return' />
            <div className="row p-5">
                <div className="border p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <div className="col-md-3">
                                        <label htmlFor="" className="fw-bold">Supplier Name</label>
                                    </div>
                                    <div className="col-md-9">
                                        <select id="select-box" className='form-control p-2' >
                                            <option value="val-1">Val-1</option>
                                            <option value="val-2">Val-2</option>
                                            <option value="val-3">Val-3</option>
                                            <option value="val-4">Val-4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <div className="col-md-3">
                                        <label htmlFor="" className="fw-bold ms-2">Supplier Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <select id="select-box" className='form-control p-2' >
                                            <option value="val-1">Val-1</option>
                                            <option value="val-2">Val-2</option>
                                            <option value="val-3">Val-3</option>
                                            <option value="val-4">Val-4</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        button
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PurchaseReturn