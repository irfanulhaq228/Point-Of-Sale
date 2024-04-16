import React, { useEffect, useState } from 'react'

import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import ApiUrl from '../../ApiUrl';
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from 'antd';

const SupplierManage = () => {
  const [supplierDetails, setSupplierDetail] = useState()
  const [updatNewProduct, setUpdateNewProduct] = useState();
  const [singleStock, setSingleStock] = useState({});

  useEffect(() => {
    axios.get(`${ApiUrl}/supplier`).then((res) => {
      setSupplierDetail(res.data.data)
    })
  }, [])

  const sendData = (values) => {
    const params = {
      'name': values.supplierName.value,
      'email': values.emailAdress.value,
      'phone': values.mobile.value,
      'address': values.adress.value
    }
    axios.post(`${ApiUrl}/supplier`, params)
      .then((res) => {
        if (res?.data?.status === 200) {
          toast.success(' Supplier is Created')
          axios.get(`${ApiUrl}/supplier`).then((res) => {
            setSupplierDetail(res.data.data)
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
            `${ApiUrl}/supplier/${id}`
          )
          .then((res) => {
            if (res?.data?.status === 200) {
              toast.success("Supplier Deleted")
              axios.get(`${ApiUrl}/supplier`).then((res) => {
                setSupplierDetail(res.data.data)
              })
            } else {
              toast.error('something went wrong')
            }
          });
      },
    });
  };

  const updateData = (values) => {
    const params = {
      'name': values.supplierName.value,
      'email': values.emailAdress.value,
      'phone': values.mobile.value,
      'address': values.adress.value
    }
    axios.put(`${ApiUrl}/supplier/updateById/${updatNewProduct}`, params)
      .then((res) => {
        if (res?.status === 200) {
          toast.success('Supplier is Updated')
          axios.get(`${ApiUrl}/supplier/getAll`).then((res) => {
            setSupplierDetail(res.data.data);
          });
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
      <HomeInfo name="Supplier List" secondName="Supplier List" />
      <div className="row p-5 reservation">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-plus "></i> Add Supplier
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Supplier
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
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
                      Supplier Name *
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="inputCategory"
                        name="supplierName"

                      // onChange={(e) => setNewSupplierName(e?.target?.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label
                      for="exampleInputEmail1"
                      class=" col-md-6 form-label"
                    >
                      Email Address
                    </label>
                    <div className="">
                      <input
                        type="email"
                        className="inputCategory"
                        name="emailAdress"
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                      Mobile *
                    </label>
                    <div className="">
                      <input
                        type="number"
                        className="inputCategory"
                        name="mobile"
                      />
                    </div>
                  </div>

                  <div className="d-flex mt-4 mb-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                      Address
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className="inputCategory"
                        name="adress"
                      />
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
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal10"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Update  Supplier
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateData(e.target);
                  }}>
                  <div className="d-flex mt-4">
                    <label
                      for="exampleInputEmail1"
                      class=" col-md-6 form-label"
                    >
                      Supplier Name *
                    </label>
                    <div className="">
                      <input
                        defaultValue={singleStock?.name}
                        type="text"
                        className="inputCategory"
                        name="supplierName"

                      // onChange={(e) => setNewSupplierName(e?.target?.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label
                      for="exampleInputEmail1"
                      class=" col-md-6 form-label"
                    >
                      Email Address
                    </label>
                    <div className="">
                      <input
                        defaultValue={singleStock?.email}
                        type="email"
                        className="inputCategory"
                        name="emailAdress"
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                      Mobile *
                    </label>
                    <div className="">
                      <input
                        type="number"
                        defaultValue={singleStock?.phone}
                        className="inputCategory"
                        name="mobile"
                      />
                    </div>
                  </div>

                  <div className="d-flex mt-4 mb-4">
                    <label for="exampleInputEmail1" class="col-md-6 form-label">
                      Address
                    </label>
                    <div className="">
                      <input
                        type="text"
                        defaultValue={singleStock?.address}
                        className="inputCategory"
                        name="adress"
                      />
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
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <table
          className="mt-3"
          style={{
            borderCollapse: "collapse",
          }}
        >
          <tr>
            <th>Id</th>
            <th>Supplier Name</th>
            <th>Email Address</th>
            <th>Mobile </th>
            <th>Address</th>

            <th>Action</th>
          </tr>
          {supplierDetails?.map((i, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.address}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal10"
                    onClick={() => {
                      setUpdateNewProduct(i?._id)
                      axios.get(`${ApiUrl}/supplier/getById/${i?._id}`).then((res) => {
                        setSingleStock(res?.data.data)
                      })
                    }}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => onDeleteStudent(i?._id)}
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
  );
};

export default SupplierManage;
