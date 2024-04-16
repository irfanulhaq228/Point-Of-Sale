import React, { useEffect, useState } from "react";
import "./Category.css";
import HomeInfo from "../../../Components/HomeInfo/HomeInfo";
import axios from "axios";
import ApiUrl, { imgUrl } from "../../../ApiUrl";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { useForm } from 'react-hook-form'

function CategoryList() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [newCategory, setNewCategory] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const [newStatus, setNewStatus] = useState("active");
  const [singleStock, setSingleStock] = useState({});
  const [updatNewProduct, setUpdateNewProduct] = useState();
  useEffect(() => {
    axios.get(`${ApiUrl}/category`).then((res) => {
      setNewCategory(res?.data?.data);
    });
  }, []);
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
  const updateData = () => {
    const params = new FormData();
    params.append("categoryName", document.getElementById("updatedName").value);
    params.append('imageUrl', document.getElementById("imageUrl")?.files[0])
    params.append('status', newStatus);
    axios.patch(`${ApiUrl}/category/${updatNewProduct}`, params)
      .then((res) => {
        if (res?.data?.status === 200) {
          toast.success('Category is Updated')
          axios.get(`${ApiUrl}/category`).then((res) => {
            setNewCategory(res.data.data);
          });
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios
          .delete(
            `${ApiUrl}/category/${id}`
          )
          .then((res) => {
            if (res.data.status === 200) {
              axios.get(`${ApiUrl}/category`).then((res) => {
                setNewCategory(res.data.data);
              });
              toast.success('Category is deleted')
            }
          });
      },
    });
  };
  return (
    <>
      {/* Modal Update */}
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
                Update
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit(updateData)}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Category Name
                  </label>
                  <div className="">
                    <input
                      id={"updatedName"}
                      type="text"
                      className="inputCategory"
                      name="categoryName"
                      {...register('categoryName')}
                    />
                  </div>
                </div>

                <div className="row my-4 d-flex align-items-center">
                  <label for="exampleInputEmail1" class="form-label">
                    Image
                  </label>
                  <div className="">
                    <input
                      defaultValue={singleStock?.imageUrl}
                      type="file"
                      className="inputCategoryFile"
                      onChange={handleImageSelect}
                      name="image"
                      id="imageUrl"
                    />
                  </div>
                  <div className="text-center mt-3">
                    {selectedImage ? (
                      <div>
                        <img

                          src={(selectedImage)}
                          alt=""
                          style={{ width: "8rem" }}
                        />
                      </div>
                    ) : (
                      <div>
                        <img

                          src={`${imgUrl}/${singleStock?.imageUrl}`}
                          alt="Selected"
                          style={{ width: "8rem" }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Status
                  </label>
                  <div className="">
                    <select
                      className="inputCategory"
                      name="status"
                      onChange={(e) => setNewStatus(e.target.value)}
                      {...register('status')}
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
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                    Save changes
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <HomeInfo name="Item Category" secondName="Category List" />
      <div className="categoryMain">
        <table
          className="my-3"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <tr>
            <th>Image</th>
            <th>Category Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {newCategory?.map((item, index) => {
            return (
              <tr>
                <td>
                  <div className="prod-img">
                    <img
                      src={`${imgUrl}/${item?.imageUrl}`}
                    />
                  </div>
                </td>
                <td>{item.categoryName}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setUpdateNewProduct(item?._id)
                      axios.get(`${ApiUrl}/category/${item?._id}`).then((res) => {
                        reset(res.data.data)
                        setSingleStock(res.data.data)
                      })
                    }}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => onDeleteStudent(item?._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default CategoryList;
