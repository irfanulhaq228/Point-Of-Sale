/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Update = ({ updateModel, setUpdateModel, Modal, Button, getIdtoUpdate, cList, setCList, setgetIdtoUpdate, flist, setFList }) => {

    const [fieldData, setFieldData] = useState({});
    const [catLis, setCatLis] = useState("")

    const submit = () => {
        const id = getIdtoUpdate._id;
        const cat = {
            categoryName: catLis,
        }
        const fieldData = {
            foodName: getIdtoUpdate.foodName,
            status: getIdtoUpdate.status
        }
        axios.patch(`http://192.168.18.48.5000/api/v1/food/${id}`, fieldData).then((res) => {
            if (res?.data?.status === 200) {
                console.log(res?.data?.data)
                setgetIdtoUpdate(res?.data)
                setUpdateModel(false);
                toast.success("Successfully Food Updated!")
                axios.get('http://192.168.18.48:5000/api/v1/food').then((res) => {
                    console.log(res?.data?.data)
                    setFList(res?.data?.data.reverse())

                })
            }
            else {
                console.error("Problem in updating Food")
            }
        }
        )

        axios.patch(`http://192.168.18.48.5000/api/v1/category/${id}`, cat).then((res) => {
            if (res?.data?.status === 200) {

                console.log(res?.data?.data)
                toast.success("Successfully Category Updated!")
                setCList(res?.data?.data)
            }
            else {
                console.error("Problem in updating Category")
            }

        })
    }
    return (



        <Modal
            title="Edit Food Data"
            style={{ top: 20 }}
            open={updateModel}
            onOk={() => setUpdateModel(false)}
            onCancel={() => setUpdateModel(false)}
            footer={[

                <Button key="ok" type="primary" onClick={submit}>  Update</Button>
            ]}
        >
            <div>
                <div className="container-fluid">

                    <div className="row" >
                        <div className="col-6-md">
                            <label htmlFor="edit">Food Image</label>
                            <img src={`http://192.168.18.48:5000/images/${getIdtoUpdate?.imageUrl}`} alt=" Food missingImg" height={30} width={50} />
                        </div><div className="col-6-md">
                            <label htmlFor="edit">Category Name </label>
                            <input type="text" name="foodname" id="foodname" value={cList.find((c) => c._id === getIdtoUpdate?.category)?.categoryName
                            } onChange={(e) => { setCatLis(e.target.value) }} />

                        </div>
                        <div className="col-6-md">
                            <label htmlFor="edit">Food Name</label>
                            <input type="text" name="foodname" id="foodname" value={getIdtoUpdate.foodName} onChange={(e) => { setgetIdtoUpdate(e.target.value) }} />
                        </div>
                        <div className="col-6-md">
                            <label htmlFor="edit">Status</label>
                            <input type="text" name="foodname" id="foodname" value={getIdtoUpdate.status} onChange={(e) => { setgetIdtoUpdate(e.target.value) }} />
                        </div>

                    </div>


                </div>
            </div>
        </Modal >
    );
}

export default Update;
