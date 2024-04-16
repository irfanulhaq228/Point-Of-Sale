import React, { useState } from 'react'
import "./Category.css"
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'
import ApiUrl from '../../../ApiUrl';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function AddCategory() {
  const navigate = useNavigate()
  const [newCategory, setNewCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [newStatus, setNewStatus] = useState('active');
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const sendData = (values) => {
    if (newCategory === "") {
      return toast.error("Enter Category Name")
    } else if (values.image.files.length === 0) {
      return toast.error("Select Image Category")
    } else if (newStatus === "") {
      return toast.error("Select Status")
    }
    const params = new FormData();
    params.append("categoryName", newCategory);
    params.append('imageUrl', values.image.files[0]);
    params.append('status', newStatus);
    axios.post(`${ApiUrl}/category`, params)
      .then((res) => {
        console.log(res.data.status)
        if (res.data.status === 200) {
          toast.success(' Category is Created')
          navigate('/categorylist')
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <HomeInfo name='Item Category' secondName='Add Category' />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData(e.target);
        }}>
        <div className='categoryMain'>
          <div className='categoryTitle fw-bold h5'>
            Add Category
          </div>
          <div className=''>
            <div>
              <div className='row my-4'>
                <div className='col-sm-2'><p className='posText'>Category Name*</p></div>
                <div className='col-md-5'><input type='text' className='posInputText w-100' name='categoryName' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
              </div>
              <div className='row my-4'>
                <div className='col-sm-2'><p className='posText'>Image*</p></div>
                <div className='col-md-5'>
                  <input type="file" className='posInputText w-100 pt-1' onChange={handleImageSelect} name='image' />
                  {selectedImage !== null && (
                    <div className='mt-3'>
                      {selectedImage && (
                        <div>
                          <img src={selectedImage} alt="Selected" style={{ height: "8rem" }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className='row my-4'>
                <div className='col-sm-2'><p className='posText'>Status*</p></div>
                <div className='col-md-5'>
                  <select className='posInputText w-100' name='status' onChange={(e) => setNewStatus(e.target.value)}>
                    <option value={"active"}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                  </select>
                </div>
              </div>
              <button className='btn btn-success text-center mb-1' type='submit' style={{ width: "100px" }}>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>

  )
}

export default AddCategory