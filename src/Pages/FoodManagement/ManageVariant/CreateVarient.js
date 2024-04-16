import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ApiUrl from "../../../ApiUrl";

const CreateVarient = ({ Modal, modalOpen, setModalOpen, fn_getVarient, Radio, allFood }) => {
    const [selectedModule, setSelectedModule] = useState("single")
    const [imageUrl, setimageUrl] = useState()
    const [arrModuleAdd, setArrModuleAdd] = useState([])
    const handleInputChange = (index, fieldName, value) => {
        const updatedModules = [...arrModuleAdd];
        updatedModules[index][fieldName] = value;
        setArrModuleAdd(updatedModules);
    };
    const fn_addModuleInputs = () => {
        const newModule = {
            moduleName: '',
            modulePrice: '',
        };
        setArrModuleAdd([...arrModuleAdd, newModule]);
    };
    const fn_submit = () => {
        if (document.getElementById("foodId").value === "") {
            toast.error("Select Food")
        } else if (document.getElementById("varientName").value === "") {
            toast.error("Enter Varient Name")
        }
        else {
            if (selectedModule === "single") {
                if (document.getElementById("singleModulePrice").value === "") {
                    return toast.error("Enter Price")
                } else {
                    const param = new FormData()
                    param.append('foodId', document.getElementById("foodId").value);
                    param.append('varientName', document.getElementById("varientName").value);
                    param.append('price', parseInt(document.getElementById("singleModulePrice").value));
                    param.append('imageUrl', imageUrl);
                    param.append('type', []);
                    axios.post(`${ApiUrl}/varient`, param).then((res) => {
                        console.log(res.data)
                        if (res.data.status === 200) {
                            toast.success("Varient Added")
                            fn_getVarient()
                            setModalOpen(false)
                        } else {
                            return toast.error(res.data.message)
                        }
                    })
                }
            }
            else if (selectedModule === "multiple") {
                if (arrModuleAdd?.length === 0) {
                    return toast.error("Select Module Types")
                } else {
                    const param = new FormData()
                    param.append('foodId', document.getElementById("foodId").value);
                    param.append('varientName', document.getElementById("varientName").value);
                    param.append('imageUrl', imageUrl);
                    param.append('types', JSON.stringify(arrModuleAdd));
                    param.append('price', 0);
                    axios.post(`${ApiUrl}/varient`, param).then((res) => {
                        if (res.data.status === 200) {
                            toast.success("Varient Added")
                            fn_getVarient()
                            setModalOpen(false)
                        } else {
                            return toast.error(res.data.message)
                        }
                    })
                }
            }
        }
    }
    return (
        <Modal
            title="Add Varient"
            style={{
                top: 20,
            }}
            open={modalOpen}
            onOk={() => fn_submit()}
            onCancel={() => setModalOpen(false)}
            width={600}
        >
            <hr />
            <div className="me-3">
                <label className="textAllFields ms-3 mb-1">Select Food</label>
                <select className="inputCategory" id="foodId">
                    <option selected value={""}>---Select Food---</option>
                    {allFood && allFood?.map((item) => (
                        <option value={item?._id}>{item?.foodName}</option>
                    ))}
                </select>
                <br />
                <label className="textAllFields ms-3 mb-1">Varient Name</label>
                <input className="inputCategory" placeholder="Enter Food Varient Name" id="varientName" />
                <br />
                <label className="textAllFields ms-3 mb-1">Varient Image</label>
                <input type="file" className="inputCategory" onChange={(e) => setimageUrl(e.target.files?.[0])} />
                <br />
                <label className="textAllFields ms-3 mb-1">Select Module</label>
                <br />
                <Radio.Group defaultValue="single" className="ms-3" buttonStyle="solid" onChange={(e) => setSelectedModule(e.target.value)}>
                    <Radio.Button value="single">Single</Radio.Button>
                    <Radio.Button value="multiple">Multiple</Radio.Button>
                </Radio.Group>
                <br />
                {selectedModule === "single" && (
                    <>
                        <label className="textAllFields ms-3 mb-1 mt-3">Price</label>
                        <input type="number" className="inputCategory" placeholder="Enter Food Varient Price" id="singleModulePrice" />
                    </>
                )}
                {selectedModule === "multiple" && (
                    <>
                        <label className="textAllFields ms-3 mb-1 mt-3">Enter Module Data</label>
                        <br />
                        {arrModuleAdd?.length > 0 && arrModuleAdd?.map((module, index) => (
                            <div className="d-flex mb-1" key={index}>
                                <input
                                    className="inputCategory"
                                    placeholder="Module Name"
                                    value={module.moduleName}
                                    onChange={(e) => handleInputChange(index, 'moduleName', e.target.value)}
                                />
                                <input
                                    className="inputCategory"
                                    placeholder="Module Price"
                                    value={module.modulePrice}
                                    onChange={(e) => handleInputChange(index, 'modulePrice', e.target.value)}
                                />
                            </div>
                        ))}
                        <div className="m-3 text-end">
                            <button className="btn btn-danger" onClick={fn_addModuleInputs}>+</button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    )
}

export default CreateVarient