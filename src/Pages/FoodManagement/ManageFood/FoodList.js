import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa'
import axios from 'axios';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2'
import { BiSolidEditAlt } from 'react-icons/bi'
import { Button, Modal } from 'antd';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { toast } from 'react-toastify';
import Update from './Update';
import ApiUrl, { imgUrl } from '../../../ApiUrl';
const { confirm } = Modal;

const FoodList = () => {
  const [fList, setFList] = useState('');
  const [cList, setCList] = useState([]);
  const [getIdtoUpdate, setgetIdtoUpdate] = useState([]);
  const [updateModel, setUpdateModel] = useState(false);
  useEffect(() => {

    axios.get(`${ApiUrl}/food`).then((res) => {
      if (res?.data.status === 200) {
        setFList(res?.data?.data?.reverse())
        console.log(res?.data?.data)
      }
      else {
        console.error("Fetching data Error")
      }
    })
    axios.get(`${ApiUrl}/category`).then((res) => {
      if (res?.data.status === 200) {
        console.log(res?.data)
        setCList(res?.data.data)
      }
      else {
        console.error("Fetching data Error")
      }
    })

  }, []);
  const fn_deleteFood = (id) => {
    axios.delete(`${ApiUrl}/food/${id}`).then((res) => {
      if (res?.data?.status === 200) {
        toast.success("Deleted Successfully!")
        axios.get(`${ApiUrl}/food`).then((res) => {
          setFList(res?.data?.data?.reverse())

        })
      }
    })
  }
  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure delete this?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        fn_deleteFood(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <div>
      <div className="container">
        <Update fList={fList} setCList={setCList} setFList={setFList} setUpdateModel={setUpdateModel} updateModel={updateModel} setgetIdtoUpdate={setgetIdtoUpdate} getIdtoUpdate={getIdtoUpdate} Modal={Modal} Button={Button} cList={cList} />
        <div className='container-rep'>
          <FaHome className='home' style={{ color: "#903519" }} />
          <div className='report'>
            <h3>Item Food</h3>
            <p>Food list</p></div>
        </div>
        <hr />
      </div>
      <div className="container mx-5 my-5">
        <div className="row">
          <div className="container border-2">
            <div className="col-md-11 text-center">
              <div>
                <div className="border block" >
                  <table class="table">
                    <thead>
                      <tr className=''>
                        <th scope="col" > <b style={{ display: "flex", justifyContent: "end" }}><HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></b></th>
                        <th scope="col" ><div style={{ display: "flex", justifyContent: "space-between" }}><span>Image  </span><HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></div></th>
                        <th scope="col" ><div style={{ display: "flex", justifyContent: "space-between" }}><span>Category Name </span> <HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></div></th>
                        <th scope="col" ><div style={{ display: "flex", justifyContent: "space-between" }}><span>Food Name </span> <HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></div></th>
                        <th scope="col" ><div style={{ display: "flex", justifyContent: "space-between" }}><span>Status  </span><HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></div></th>
                        <th scope="col" ><div style={{ display: "flex", justifyContent: "space-between" }}><span>Action   </span><HiOutlineArrowsUpDown style={{ color: "#9ba3b3" }} /></div></th>
                      </tr>
                    </thead>
                    <tbody>
                      {fList && fList.map((item, i) => (
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>
                            <img src={`${imgUrl}/${item?.imageUrl}`} alt=" Food missingImg" height={50} />
                          </td>
                          <td>{
                            cList.find((c) => c._id === item?.category)?.categoryName
                          }</td>
                          <td>{item.foodName}</td>

                          <td>{item.status}</td>
                          <td>
                            <BiSolidEditAlt onClick={() => { setUpdateModel(true); setgetIdtoUpdate(item); }} style={{ background: "#62d0f1", color: "white", height: "1.4rem", marginRight: "2rem", width: "1.4rem" }} />
                            <RiDeleteBin5Line onClick={() => { showDeleteConfirm(item._id) }} style={{ background: "red", color: "white", height: "1.4rem", width: "1.4rem" }} />
                          </td>
                        </tr>
                      ))}



                    </tbody>
                  </table>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodList;
