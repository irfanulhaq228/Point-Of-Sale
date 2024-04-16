import React, { useState } from 'react'
import "./AddOns.css"
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'

function AddAddons() {
  const [selectedImage, setSelectedImage] = useState(null);
  const selectImage = (e) => {
    document.getElementById('imageInput').click();
  }
  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <>
      <HomeInfo name='Item Category' secondName='Add Category' />
      <div className='categoryMain'>
        <div className='categoryTitle fw-bold h5'>
          Add Category
        </div>
        <div className='row mx-5 mb-3'>
          <div className='col-md-6'>
            <div className='row my-4 d-flex align-items-center'>
              <div className='col-sm-3 text-end'><p className='textAllFields'>Category Name*</p></div>
              <div className='col-sm-9'><input type='text' className='inputCategory' /></div>
            </div>
            <div className='row my-4 d-flex align-items-center'>
              <div className='col-sm-3 text-end'><p className='textAllFields'>Image*</p></div>
              <div className='col-sm-9'>
                <input type="file" className='inputCategoryFile' onChange={handleImageSelect} />
              </div>
              <div className='text-center mt-3'>
                {selectedImage && (
                  <div>
                    <img src={selectedImage} alt="Selected" style={{ height: "8rem" }} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row my-4'>
              <div className='col-sm-3 text-end'><p className='textAllFields'>Offer</p></div>
              <div className='col-sm-1 ms-5'><input type='checkbox' /></div>
            </div>
            <div className='row my-4'>
              <div className='col-sm-3 text-end'><p className='textAllFields'>Status</p></div>
              <div className='col-sm-3 ms-5'>
                <select className='inputCategory'>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-center gap-3'>
              <button className='btnCategory btn btn-info'>Reset</button>
              <button className='btnCategory btn btn-success'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AddAddons