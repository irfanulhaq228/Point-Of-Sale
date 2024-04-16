import React, { useEffect, useState } from 'react'
import HomeInfo from '../../../Components/HomeInfo/HomeInfo'
import axios from 'axios';
import ApiUrl from '../../../ApiUrl';
import { toast } from 'react-toastify';
import { Modal } from 'antd';

function IngredentList() {
const [newIngredient,setNewIngredient]=useState()

  useEffect(()=>{

    axios.get(`${ApiUrl}/allIngredient/getAll`).then((res)=>{
      setNewIngredient(res.data.data)
    })
  },[])

    const sendData = (values) => {
        const  params ={
          'unitName':values.unitName.value,
          'ingredientName':values.ingredientName.value,
          'stockLvl':values.reStockLevel.value,
          'status':values.status.value
        }
        axios.post(`${ApiUrl}/allIngredient/create`, params)
        .then((res) => {
          // console.log(res.data.status)
          if (res.status === 200) {
            toast.success('Ingredient is Created')
            axios.get(`${ApiUrl}/allIngredient/getAll`).then((res)=>{
              setNewIngredient(res.data.data)
            })
  
          } else {
            toast.error(res.data.message)
          }
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    }




    const onDeleteStudent = (id) => {
      Modal.confirm({
        title: "Are you sure you want to delete?",
        onOk: () => {
          axios
            .delete(
              `${ApiUrl}/allIngredient/${id}`
            )
            .then((res) => {
              if (res.data.status === 200) {
              axios.get(`${ApiUrl}/allIngredient/getAll`).then((res)=>{
      setNewIngredient(res.data.data)
    })
                toast.success('Ingredient is deleted')
              }
            });
        },
      });
    };


    return (
        <>
            <HomeInfo name='Ingredients' secondName='Ingredients List'/>
            <div className="row p-5 reservation">
                <div className="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-plus  "></i> Add Ingredient
                    </button>
                </div>

{/* .......................................modal.....start................................ */}

     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData(e.target);
        }}>
                  <div className="d-flex mt-4">
                    <label
                      for="exampleInputEmail1"
                      class=" col-md-6 form-label"
                    >
                    Unit Name*
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="inputCategory"
                        name="unitName"
                        placeholder='Unit Name'
                        
                        // onChange={(e) => setNewSupplierName(e?.target?.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label
                      for="exampleInputEmail1"
                      class=" col-md-6 form-label"
                    >
                   Ingredient Name *
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="inputCategory"
                        name="ingredientName"
                        placeholder='Ingredient Name'
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                    Re-Stock Level *
                    </label>
                    <div className="">
                      <input
                        type="number"
                        className="inputCategory"
                        name="reStockLevel"
                        placeholder='Re-Stock Level'
                      />
                    </div>
                  </div>
                 
                  <div className="d-flex mt-4 mb-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                    Status *
                    </label>
                    <div className="">
                    <select
                      className="inputCategory"
                      name="status"
               
                    >
                      <option value={"active"}>Active</option>
                      <option value={"inactive"}>Inactive</option>
                    </select>
                  </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </form>
      </div>
  
    </div>
  </div>
</div>


{/* ...............................modal End .................. */}
                <table className='mt-3' style={{
                    borderCollapse: 'collapse'
                }}>
                    <tr>
                        <th>SI</th>
                        <th>Ingredient Name</th>
                        <th>Unit Name</th>
                        <th>Action</th>
                    </tr>
{newIngredient?.map((item,index)=>{
return(
  <tr>
  <td>{index+1}</td>
  <td>{item.ingredientName}</td>
  <td>{item.unitName}</td>
  <td className='p-2'>
      <button type="button" className="btn-sm rounded-1 btn-info px-2 py-1 me-1 text-white">
          <i className="fa-solid fa-pencil"></i>
      </button>
      <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => onDeleteStudent(item?._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
  </td>
</tr>
)
})}
                   
                </table>
            </div>
        </>
    )
}

export default IngredentList