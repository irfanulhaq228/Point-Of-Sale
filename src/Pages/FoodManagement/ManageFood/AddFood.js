import "./food.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ApiUrl from "../../../ApiUrl";
import { useNavigate } from "react-router-dom";

function AddFood() {
    const navigate = useNavigate()
    const [category, setCategory] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [statusCat, setStatusCat] = useState('active')
    const [selectedImage, setSelectedImage] = useState(null);
    const [foodName, setFname] = useState("");
    const [foodDesc, setFoodDesc] = useState("");

    const saveit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', categoryId);
        formData.append('foodName', foodName);
        formData.append('description', foodDesc);
        formData.append('status', statusCat);
        formData.append('imageUrl', selectedImage);
        axios.post(`${ApiUrl}/food`, formData).then((Response) => {
            if (Response?.data?.status === 200) {
                toast.success('Food Added!');
                navigate("/foodlist")
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        axios.get(`${ApiUrl}/category`).then((Response) => {
            console.log(Response?.data)
            setCategory(Response?.data?.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [category?.data])

    return (
        <>
            <div className='categoryMain'>
                <div className='categoryTitle fw-bold h5'>
                    Add Food
                </div>
                <div className=''>
                    <div className='row my-4'>
                        <div className='col-sm-2'><p className='posText'>Category*</p></div>
                        <div className='col-sm-5'>
                            <select className='posInputText w-100' value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}>
                                <option selected disabled value={""}>Select Option</option>
                                {category && category.map((cate) => (
                                    <option key={cate._id} value={cate?._id}>{cate.categoryName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-sm-2'><p className='posText'>Food Name</p></div>
                        <div className='col-sm-5'>
                            <input
                                className='posInputText w-100'
                                name="foodName"
                                value={foodName}
                                onChange={(e) => { setFname(e.target.value) }}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-sm-2'><p className='posText'>Description*</p></div>
                        <div className='col-sm-5'>
                            <input
                                className='posInputText w-100'
                                name="description"
                                value={foodDesc}
                                onChange={(e) => setFoodDesc(e.target.value)}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-sm-2'><p className='posText'>Image*</p></div>
                        <div className='col-sm-5'>
                            <input
                                type="file"
                                name="imageUrl"
                                accept="image/*"
                                className='posInputText w-100 pt-1'
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />
                            {selectedImage && (
                                <div>
                                    <img src={URL.createObjectURL(selectedImage)}
                                        alt="Selected" style={{ height: "8rem" }} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-sm-2'><p className='posText'>Status</p></div>
                        <div className='col-sm-5'>
                            <select className='posInputText w-100' value={statusCat} onChange={(e) => { setStatusCat(e.target.value) }}>
                                <option value={"active"}>Active</option>
                                <option value={"inactive"}>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <button className='btn btn-success text-center mb-1' type='submit' style={{ width: "100px" }} onClick={saveit}>Submit</button>
                </div>
            </div>
        </>

    )
}

export default AddFood