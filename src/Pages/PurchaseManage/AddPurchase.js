import React, { useEffect, useState } from "react";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import { toast } from "react-toastify";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { useNavigate } from "react-router-dom";

function AddPurchase() {
  const navigate = useNavigate()
  const [allSupplier, setAllSupplier] = useState([])
  const [suppName, setSuppName] = useState("")
  const [allIngredient, setAllIngredient] = useState([])
  const [arrIngAdd, setArrIngAdd] = useState([
    {
      qty: "",
      rate: "",
      total: ""
    },
  ]);
  const fn_getAllIngredients = () => {
    axios.get(`${ApiUrl}/allIngredient/getAll`).then((res) => {
      setAllIngredient(res?.data?.data)
    })
  }
  useEffect(() => {
    axios.get(`${ApiUrl}/supplier`).then((res) => {
      setAllSupplier(res?.data?.data)
    })
    fn_getAllIngredients()
  }, [])
  const selectedIng = (id, index) => {
    const selectedProduct = JSON.parse(id);
    if (selectedProduct) {
      const newArrIng = [...arrIngAdd];
      newArrIng[index].availableQty = selectedProduct.availableStock;
      setArrIngAdd(newArrIng);
    }
  }
  const fn_handleInputChange = (index, fieldName, value) => {
    const updatedArr = [...arrIngAdd];
    if (fieldName === "product") {
      updatedArr[index][fieldName] = JSON.parse(value)?._id;
    } else {
      updatedArr[index][fieldName] = parseInt(value);
    }
    updatedArr[index].total = updatedArr[index]?.qty * updatedArr[index]?.rate
    setArrIngAdd(updatedArr);
  };
  const fn_addIngredient = (e) => {
    e.preventDefault(e);
    const newIng = {
      product: "",
    };
    setArrIngAdd([...arrIngAdd, newIng]);
  };
  const fn_removerIng = (e, index) => {
    e.preventDefault();
    const filter = arrIngAdd?.filter((it, i) => i !== index);
    if (filter?.length === 0) {
      return toast.error("One row You can't delete.");
    } else {
      setArrIngAdd(filter);
    }
  };
  const sendData = (values) => {
    const paramitors = {
      'supplier': values.selectSupplier.value,
      'invoiceNo': values.invoiceNo.value,
      'purchaseDate': new Date(values.purchaseDate.value),
      'expiryDate': new Date(values.expiryDate.value),
      'paymentMethod': values.paymentMethod.value,
      'detail': values.detail.value,
      'ingredientArr': arrIngAdd
    }
    axios.post(`${ApiUrl}/purchase`, paramitors).then((res) => {
      if (res?.data?.status === 200) {
        toast.success("Purchase Created")
        navigate("/purchase_item")
      } else {
        toast.error(res.data.message)
      }
    })
  }


  return (
    <>
      <HomeInfo name="Add Purchase" secondName="Add Purchase" />

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendData(e.target);
          }}>
          <div className="categoryMain">
            <div className="categoryTitle fw-bold h5">Add Purchase</div>
            <div className="row">
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Select Suplier</label>
                <select className="posInputText w-100" name="selectSupplier">
                  <option selected value={""}>---Select Supplier---</option>
                  {allSupplier && allSupplier?.map((item) => (
                    <option value={item?._id} onChange={() => setSuppName(item?.name)}>{item?.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Invoice No</label>
                <div>
                  <input type="number" className="posInputText w-100" name="invoiceNo" />
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Purchase Date</label>
                <div className="">
                  <input type="date" className="posInputText w-100" name="purchaseDate" />
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Expiry Date</label>
                <div>
                  <input type="date" className="posInputText w-100" name="expiryDate" />
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Payment Method</label>
                <select className="posInputText w-100" name="paymentMethod">
                  <option selected value={""}>---Select Payment Method---</option>
                  <option>Cash</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <label className="posText mt-2">Detail</label>
                <div className="">
                  <input type="text" className="posInputText w-100" name="detail" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <table className="my-2">
                <tr>
                  <th>Item Information</th>
                  <th>Available Stock</th>
                  <th>Purchase Qty</th>
                  <th>Unit Price</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
                {arrIngAdd && arrIngAdd?.map((item, index) => (
                  <tr>
                    <td>
                      <select
                        className="posInputText"
                        onChange={(e) => {
                          selectedIng(e.target.value, index);
                          fn_handleInputChange(
                            index,
                            "product",
                            e.target.value
                          )
                        }}
                      >
                        <option value={""}>Select Product</option>
                        {allIngredient && allIngredient?.map((item) => (
                          <option value={JSON.stringify(item)}>{item?.ingredientName} <span style={{ fontSize: "5px" }}>({item?.unitName})</span></option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="posInputText"
                        value={item?.availableQty}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="posInputText"
                        value={item.price}
                        onChange={(e) =>
                          fn_handleInputChange(index, "qty", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="posInputText"
                        onChange={(e) =>
                          fn_handleInputChange(
                            index,
                            "rate",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="posInputText"
                        value={arrIngAdd[index]?.rate * arrIngAdd[index]?.qty}
                      />
                    </td>
                    <td>
                      <button
                        type="number"
                        className="btn btn-danger"
                        onClick={(e) => fn_removerIng(e, index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              <div className="text-end">
                <button
                  className="btn btn-danger mb-2"
                  onClick={(e) => fn_addIngredient(e)}
                >
                  +
                </button>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-danger mb-2"
                  style={{ width: "200px" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddPurchase;
