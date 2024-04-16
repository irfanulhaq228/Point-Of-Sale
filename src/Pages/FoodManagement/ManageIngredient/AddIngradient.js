import React, { useEffect, useState } from 'react'
import "../ManageCategory/Category.css"
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'
import { toast } from 'react-toastify';
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function AddIngradient() {
  const navigate = useNavigate()
  const totalRef = useRef()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedFood, setSelectedFood] = useState("")
  const [selectedVarient, setSelectedVarient] = useState("")
  const [selectedVarientType, setSelectedVarientType] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [getFood, setGetFood] = useState([])
  const [getVarient, setGetVarient] = useState([])
  const [getVarientType, setGetVarientType] = useState({})
  const [allIngredient, setAllIngredient] = useState([])
  const [arrIngAdd, setArrIngAdd] = useState([
    {
      product: '',
      qtyUsed: '',
      price: ''
    },
  ])
  const fn_category = () => {
    axios.get(`${ApiUrl}/category`).then((res) => {
      setAllCategory(res?.data?.data)
    })
  }
  const fn_getFood = () => {
    axios.get(`${ApiUrl}/food/catefood/${selectedCategory}`).then((res) => {
      setGetFood(res?.data?.data)
    })
  }
  const fn_getVarient = () => {
    axios.get(`${ApiUrl}/varient/foodVarient/${selectedFood}`).then((res) => {
      setGetVarient(res.data?.data)
    })
  }
  const fb_getVarientType = () => {
    axios.get(`${ApiUrl}/varient/getVarientType/${selectedVarient}`).then((res) => {
      console.log(res?.data?.data)
      setGetVarientType(res?.data?.data)
    })
  }
  useEffect(() => {
    fn_category()
    axios.get(`${ApiUrl}/allIngredient/getAll`).then((res) => {
      setAllIngredient(res.data.data)
    })
  }, [])
  useEffect(() => {
    fn_getFood(selectedCategory)
  }, [selectedCategory])
  useEffect(() => {
    fn_getVarient()
  }, [selectedFood])
  useEffect(() => {
    fb_getVarientType()
  }, [selectedVarient])
  const fn_addIngredient = (e) => {
    e.preventDefault(e)
    const newIng = {
      product: '',
    };
    setArrIngAdd([...arrIngAdd, newIng]);
  };
  const fn_removerIng = (e, index) => {
    e.preventDefault()
    const filter = arrIngAdd?.filter((it, i) => i !== index)
    if (filter?.length === 0) {
      return toast.error("One row You can't delete.")
    } else {
      setArrIngAdd(filter)
    }
  }
  const fn_handleInputChange = (index, fieldName, value) => {
    const updatedArr = [...arrIngAdd];
    if (fieldName === "product") {
      updatedArr[index][fieldName] = value;
    } else {
      updatedArr[index][fieldName] = parseInt(value);
    }
    updatedArr[index].total = updatedArr[index]?.price * updatedArr[index]?.qtyUsed
    setArrIngAdd(updatedArr);
  };
  const fn_submit = (e) => {
    e.preventDefault()
    const params = {
      category: selectedCategory,
      food: selectedFood,
      varient: selectedVarient,
      varientType: selectedVarientType,
      arrayIng: arrIngAdd
    }
    axios.post(`${ApiUrl}/invarientingredient`, params).then((res) => {
      if (res.data?.status === 200) {
        toast.success("Ingredient Added")
        navigate("/allvarient")
      } else {
        toast.error(res?.data?.message)
      }
    })
  }
  console.log(arrIngAdd)
  return (
    <>
      <HomeInfo name='Item Ingredient' secondName='Add Ingredient' />
      <form>
        <div className='categoryMain'>
          <div className='categoryTitle fw-bold h5'>
            Add Ingredient
          </div>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column'>
              <label className='posText my-1'>Select Category</label>
              <select className='posInputText mb-2' onChange={(e) => setSelectedCategory(e.target.value)}>
                <option selected value={""}>---Select Category---</option>
                {allCategory && allCategory?.map((item) => (
                  <option value={item?._id}>{item?.categoryName}</option>
                ))}
              </select>
            </div>
            <div className='col-md-6 d-flex flex-column'>
              <label className='posText my-1'>Select Food</label>
              <select className='posInputText mb-2' onChange={(e) => setSelectedFood(e.target.value)}>
                <option selected value={""}>---Select Food---</option>
                {getFood && getFood?.map((item) => (
                  <option value={item?._id}>{item?.foodName}</option>
                ))}
              </select>
            </div>
            <div className='col-md-6 d-flex flex-column'>
              <label className='posText my-1'>Select Varient</label>
              <select className='posInputText mb-2' onChange={(e) => setSelectedVarient(e.target.value)}>
                <option selected value={""}>---Select Varient---</option>
                {getVarient && getVarient?.map((item) => (
                  <option value={item?._id}>{item?.varientName}</option>
                ))}
              </select>
            </div>
            {getVarientType?.types?.length > 0 && (
              <div className='col-md-6 d-flex flex-column'>
                <label className='posText my-1'>Select Module</label>
                <select className='posInputText mb-2' onChange={(e) => setSelectedVarientType(e.target.value)}>
                  <option selected value={""}>---Select Module---</option>
                  {getVarientType?.types?.map((item) => (
                    <option value={item?.moduleName}>{item?.moduleName}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className='col-12 w-100'>
            <table className='w-100 my-2'>
              <tr>
                <th>Product</th>
                <th>Quantity Used</th>
                <th>Unit Price</th>
                <th>Total Price of used Product</th>
                <th>Action</th>
              </tr>
              {arrIngAdd && arrIngAdd?.map((item, index) => (
                <tr>
                  <td>
                    <select
                      className='posInputText'
                      value={item?.product}
                      onChange={(e) => fn_handleInputChange(index, 'product', e.target.value)}
                    >
                      <option value={""}>Select Product</option>
                      {allIngredient && allIngredient?.map((item) => (
                        <option value={item?._id}>{item?.ingredientName} ({item?.unitName})</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type='number'
                      className='posInputText'
                      value={item.qtyUsed}
                      onChange={(e) => fn_handleInputChange(index, 'qtyUsed', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='posInputText'
                      value={item.price}
                      onChange={(e) => fn_handleInputChange(index, 'price', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type='number'
                      className='posInputText'
                      value={arrIngAdd[index]?.price * arrIngAdd[index]?.qtyUsed}
                      disabled
                    />
                  </td>
                  <td><button type='number' className='btn btn-danger' onClick={(e) => fn_removerIng(e, index)}>Delete</button></td>
                </tr>
              ))}
            </table>
            <div className='text-end'>
              <button className='btn btn-danger mb-2' onClick={(e) => fn_addIngredient(e)}>+</button>
            </div>
            <div className='text-center'>
              <button className='btn btn-danger mb-2' style={{ width: "200px" }} onClick={(e) => fn_submit(e)}>Submit</button>
            </div>
          </div>
        </div>
      </form >
    </>

  )
}

export default AddIngradient