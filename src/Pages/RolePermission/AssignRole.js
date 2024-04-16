import React, { useEffect, useState } from "react";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { Checkbox } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AssignRole = () => {
    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    const [allRole, setAllRole] = useState([])
    const [selectUserId, setSelectUserId] = useState("")
    const [selectUserName, setSelectUserName] = useState("")
    const [selectRoleId, setSelectRoleId] = useState("")
    const [selectRoleName, setSelectRoleName] = useState("")
    useEffect(() => {
        axios.get(`${ApiUrl}/user`).then((res) => {
            setAllUser(res?.data?.data)
        })
        axios.get(`${ApiUrl}/permission`).then((res) => {
            setAllRole(res?.data?.data)
        })
    }, [])
    const fn_selectUser = (e) => {
        const user = JSON.parse(e.target.value)
        setSelectUserName(`${user?.firstName} ${user?.lastName}`)
        setSelectUserId(user?._id)
    }
    const fn_selectRole = (e) => {
        setSelectRoleId(e.target.value)
        setSelectRoleName(e.target.name)
    }
    const fn_submit = () => {
        if (selectUserId === "" || selectUserName === "") {
            return toast.error("Select User")
        } else if (selectRoleId === "" || selectRoleName === "") {
            return toast.error("Select Role")
        }
        const params = {
            userId: selectUserId,
            userName: selectUserName,
            roleId: selectRoleId,
            roleName: selectRoleName
        }
        axios.post(`${ApiUrl}/userassignrole`, params).then((res) => {
            console.log(res?.data)
            if (res?.data?.status === 200) {
                navigate("/useraccessrole")
                return toast.success("Role Assigned to User")
            } else {
                return toast.error(res?.data?.message)
            }
        })
    }
    return (
        <>
            <HomeInfo name="Permission" secondName="Assign Role to User" />
            <div className="mt-2 mx-5">
                <div className="formFood py-4 px-5">
                    <div>
                        <h4>Assign Role to User</h4>
                    </div>
                    <hr />
                    <div className='d-md-flex gap-4 align-items-center justify-content-center mb-2'>
                        <div className='col-md-2'><label>User</label></div>
                        <div className='col-md-6'>
                            <select className="posInputText w-100" onChange={(e) => fn_selectUser(e)}>
                                <option>---Select User---</option>
                                {allUser && allUser?.map((item) => (
                                    <option value={JSON.stringify(item)}>{item?.firstName} {item?.lastName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className='d-md-flex gap-4 align-items-center justify-content-center'>
                        <div className='col-md-2'><label>Role</label></div>
                        <div className='col-md-6'>

                            {allRole && allRole?.map((item) => (
                                <div className="col-md-6"><Checkbox value={item._id} name={item?.roleName} onChange={(e) => fn_selectRole(e)}>{item?.roleName}</Checkbox></div>
                            ))}
                        </div>
                    </div>
                    <br />
                    <div className="text-center">
                        <button className="btn btn-danger" onClick={fn_submit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignRole