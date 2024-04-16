import React, { useState, useEffect } from "react";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from "react-toastify";
const { confirm } = Modal;

const UserAccessRole = () => {
    const navigate = useNavigate()
    const [allData, setAllData] = useState([])
    const fn_getAllData = () => {
        axios.get(`${ApiUrl}/userassignrole`).then((res) => {
            setAllData(res.data?.data)
        })
    }
    useEffect(() => {
        fn_getAllData()
    }, [])
    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(`${ApiUrl}/userassignrole/${id}`).then((res) => {
                    if (res?.data?.status === 200) {
                        fn_getAllData()
                        return toast.success("Deleted")
                    } else {
                        return toast.error(res?.data?.message)
                    }
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <>
            <HomeInfo name="Permission" secondName="User Add Role" />
            <div className="mt-2 mx-5">
                <div className="formFood py-4 px-5">
                    <div className="d-flex justify-content-between">
                        <h4>User Access Role</h4>
                        <button className="btn btn-danger" onClick={() => navigate("/assignrole")}>Assign Role</button>
                    </div>
                    <hr />
                    <table className="w-100">
                        <tr>
                            <th className="text-start ps-2">Sr #</th>
                            <th className="text-start ps-2">User Name</th>
                            <th className="text-start ps-2">Role Name</th>
                            <th className="text-start ps-2">Action</th>
                        </tr>
                        {allData?.length > 0 ? allData?.map((item, index) => (
                            <tr>
                                <td className="ps-2">{index + 1}</td>
                                <td className="ps-2" style={{ textTransform: "capitalize" }}>{item?.userName}</td>
                                <td className="ps-2" style={{ textTransform: "capitalize" }}>{item?.roleName}</td>
                                <td className="ps-2">
                                    <button type="button" className="btn btn-primary">
                                        <i className="fa-solid fa-pencil"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" onClick={() => showDeleteConfirm(item?._id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td className="text-center" colSpan={4}>No Data Found</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserAccessRole