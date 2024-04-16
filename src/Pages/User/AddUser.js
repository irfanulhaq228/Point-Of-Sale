import React, { useState } from 'react'
import "../FoodManagement/ManageCategory/Category.css"

import HomeInfo from '../../Components/HomeInfo/HomeInfo';
import ApiUrl from '../../ApiUrl';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddUser() {

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
        const params = new FormData();
        params.append("firstName", values.firstName.value);
        params.append("lastName", values.lastName.value);
        params.append("email", values.email.value);
        params.append("about", values.about.value);
        params.append("password", values.password.value);
        params.append('imageUrl', values.image.files[0]);
        params.append('status', values.status.value);

        axios.post(`${ApiUrl}/user`, params)
            .then((res) => {
                console.log(res.data.status)
                if (res.data.status === 200) {
                    toast.success('user is Created')

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
                                <div className='col-sm-2'><p className='posText'>First Name*</p></div>
                                <div className='col-md-5'><input type='text' className='posInputText w-100' name='firstName' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
                            </div>



                            <div className='row my-4'>
                                <div className='col-sm-2'><p className='posText'>Last Name*</p></div>
                                <div className='col-md-5'><input type='text' className='posInputText w-100' name='lastName' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
                            </div>


                            <div className='row my-4'>
                                <div className='col-sm-2'><p className='posText'>Email*</p></div>
                                <div className='col-md-5'><input type='text' className='posInputText w-100' name='email' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
                            </div>


                            <div className='row my-4'>
                                <div className='col-sm-2'><p className='posText'>Password*</p></div>
                                <div className='col-md-5'><input type='text' className='posInputText w-100' name='password' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
                            </div>

                            <div className='row my-4'>
                                <div className='col-sm-2'><p className='posText'>About*</p></div>
                                <div className='col-md-5'><input type='text' className='posInputText w-100' name='about' onChange={(e) => setNewCategory(e?.target?.value)} /></div>
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
                                    <select className='posInputText w-100' name='status'>
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

export default AddUser