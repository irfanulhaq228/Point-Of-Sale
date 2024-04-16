import React, { useState } from 'react'
import { foodData, orderData, purchaseData, report, setting, Unit } from './AddRoleData';
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import { Checkbox } from 'antd';
import { toast } from 'react-toastify';
import axios from 'axios';
import ApiUrl from '../../ApiUrl';

function AddRole() {
  const [foodArray, setFoodArray] = useState([])
  const [orderArray, setOrderArray] = useState([])
  const [purchaseArray, setPurchaseArray] = useState([])
  const [reportArray, setReportArray] = useState([])
  const [settingArray, setSettingArray] = useState([])
  const [unitArray, setUnitArray] = useState([])
  const fn_foodcheckInput = (e, name, item, index) => {
    setFoodArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_ordercheckInput = (e, name, item, index) => {
    setOrderArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_purchasecheckInput = (e, name, item, index) => {
    setPurchaseArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_reportcheckInput = (e, name, item, index) => {
    setReportArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_settingcheckInput = (e, name, item, index) => {
    setSettingArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_unitcheckInput = (e, name, item, index) => {
    setUnitArray((prevValues) => ({
      ...prevValues,
      [item.title]: {
        ...prevValues[item.title],
        [name]: !prevValues[item.title]?.[name]
      },
    }));
  }
  const fn_submit = () => {
    if (document.getElementById('roleName').value === "") {
      return toast.error("Enter Role Name")
    } else if (document.getElementById('roleDes').value === "") {
      return toast.error("Enter Role Description")
    }
    const params = {
      roleName: document.getElementById('roleName').value,
      description: document.getElementById('roleDes').value,
      foodArray: foodArray,
      orderArray: orderArray,
      purchaseArray: purchaseArray,
      reportArray: reportArray,
      settingArray: settingArray,
      unitArray: unitArray
    }
    axios.post(`${ApiUrl}/permission`, params).then((res) => {
      if (res.data?.status === 200) {
        return toast.success("Role Created")
      } else {
        return toast.error(res?.data?.message)
      }
    })
  }
  return (
    <>
      <HomeInfo name="Role" secondName="Add Role" />
      <div className="mt-2 mx-5">
        <div className="formFood py-4 px-5">
          <div>
            <h4>Add Role</h4>
          </div>
          <hr />
          <div className='d-md-flex gap-4 align-items-center justify-content-center mb-2'>
            <div className='col-md-2'><label>Role Name</label></div>
            <div className='col-md-6'><input type='text' className='posInputText w-100' id='roleName' /></div>
          </div>
          <div className='d-md-flex gap-4 align-items-center justify-content-center'>
            <div className='col-md-2'><label>Role Description</label></div>
            <div className='col-md-6'><textarea type='text' className='posInputText w-100' style={{ height: "4rem" }} id='roleDes' /></div>
          </div>
          <hr />
          {/* Food Management */}
          <div>
            <h4 className='fw-bold mt-4'>Food Management</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>Can Create</th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {foodData && foodData?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2' onChange={(e) => fn_foodcheckInput(e, "create", item, index)}><Checkbox></Checkbox></td>
                  <td className='ps-2' onChange={(e) => fn_foodcheckInput(e, "read", item, index)}><Checkbox></Checkbox></td>
                  <td className='ps-2' onChange={(e) => fn_foodcheckInput(e, "edit", item, index)}><Checkbox></Checkbox></td>
                  <td className='ps-2' onChange={(e) => fn_foodcheckInput(e, "delete", item, index)}><Checkbox></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          {/* Order Management */}
          <div>
            <h4 className='fw-bold mt-4'>Order Management</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>
                  Can Create
                </th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {orderData && orderData?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_ordercheckInput(e, "create", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_ordercheckInput(e, "read", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_ordercheckInput(e, "edit", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_ordercheckInput(e, "delete", item, index)}></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          {/* Purchase Manage */}
          <div>
            <h4 className='fw-bold mt-4'>Purchase Manage</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>
                  Can Create
                </th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {purchaseData && purchaseData?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_purchasecheckInput(e, "create", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_purchasecheckInput(e, "read", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_purchasecheckInput(e, "edit", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_purchasecheckInput(e, "delete", item, index)}></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          {/* Report */}
          <div>
            <h4 className='fw-bold mt-4'>Report</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>
                  Can Create
                </th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {report && report?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_reportcheckInput(e, "create", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_reportcheckInput(e, "read", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_reportcheckInput(e, "edit", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_reportcheckInput(e, "delete", item, index)}></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          {/* Setting */}
          <div>
            <h4 className='fw-bold mt-4'>Setting</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>
                  Can Create
                </th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {setting && setting?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_settingcheckInput(e, "create", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_settingcheckInput(e, "read", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_settingcheckInput(e, "edit", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_settingcheckInput(e, "delete", item, index)}></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          {/* Unit and Ingredients */}
          <div>
            <h4 className='fw-bold mt-4'>Unit and Ingredients</h4>
            <table className='w-100'>
              <tr>
                <th className='text-start ps-2'>SL No.</th>
                <th className='text-start ps-2'>Menu Title</th>
                <th className='text-start ps-2'>
                  Can Create
                </th>
                <th className='text-start ps-2'>Can Read</th>
                <th className='text-start ps-2'>Can Edit</th>
                <th className='text-start ps-2'>Can Delete</th>
              </tr>
              {Unit && Unit?.map((item, index) => (
                <tr>
                  <td className='ps-2'>{index + 1}</td>
                  <td className='ps-2'>{item?.title}</td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_unitcheckInput(e, "create", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_unitcheckInput(e, "read", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_unitcheckInput(e, "edit", item, index)}></Checkbox></td>
                  <td className='ps-2'><Checkbox onChange={(e) => fn_unitcheckInput(e, "delete", item, index)}></Checkbox></td>
                </tr>
              ))}
            </table>
          </div>
          <button className='btn btn-danger my-2' onClick={fn_submit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default AddRole