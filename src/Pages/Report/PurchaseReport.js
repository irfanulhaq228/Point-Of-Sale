import React from "react";
import "../Report/report.css";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";
import { useState } from "react";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { toast } from "react-toastify";
import { AiFillEye } from "react-icons/ai";
import { Button, Modal } from 'antd';
import PurchaseDetails from "./ReportDetails";

const PurchaseReport = () => {
  const [allPurchase, setAllPurchase] = useState();
  const [groupedData, setGroupedData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [singlePurchaseDetail, setSinglePurchaseDetail] = useState([])
  let groupedArray = Object.values(groupedData);
  const sendData = (values) => {
    const paramitors = {
      'FromDate': values.fromDate.value,
      'ToDate': values.toDate.value,
    }
    axios.post(`${ApiUrl}/purchase/search`, paramitors).then((res) => {
      if (res?.data?.status === 200) {
        res.data?.data.forEach((item) => {
          const invoice = item.invoiceNo;
          if (!groupedData[invoice]) {
            groupedData[invoice] = [];
          }
          groupedData[invoice].push(item);
        });
        setAllPurchase(res.data?.data)
      } else {
        toast.error(res.data.message)
      }
    })
  }
  const fn_showDetails = (item) => {
    setSinglePurchaseDetail(item)
    setModalOpen(true)
  }

  return (
    <>
      <HomeInfo name="Purchase" secondName="Report" />
      <PurchaseDetails Modal={Modal} modalOpen={modalOpen} setModalOpen={setModalOpen} item={singlePurchaseDetail} />
      {/* First Box */}
      <div className="mt-2 mx-5">
        <div className="formFood py-4 px-5">
          <form
            className="mt-2"
            onSubmit={(e) => {
              e.preventDefault();
              sendData(e.target);
            }}
          >
            <div className="mb-3 row">
              <div className="col-md-4 text-md-end">
                <label for="from" className="posText fw-bold">
                  From:<span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-6">
                <input type="date" id="from" name="fromDate" className="posInputText" style={{ width: "300px" }} />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-4 text-md-end">
                <label for="from" className="posText fw-bold">
                  To:<span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-md-6">
                <input type="date" id="to" name="toDate" className="posInputText" style={{ width: "300px" }} />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger mx-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Second Box */}
      <div className="my-2 mx-5">
        <div className="formFood py-4 px-5">
          <table className="w-100">
            <tr>
              <th className="ps-2">View</th>
              <th className="ps-2">Purchase Date</th>
              <th className="ps-2">Invoice No.</th>
              <th className="ps-2">Supplier Name</th>
              <th className="ps-2">Total Amount</th>
            </tr>
            {groupedArray && groupedArray?.map((i) => (
              <tr>
                <td className="ps-2" style={{ width: "50px" }}>
                  <button className="btn btn-sm btn-info" onClick={() => fn_showDetails(i)}><AiFillEye /></button>
                </td>
                <td className="ps-2">{new Date(i[0].purchaseDate).toLocaleDateString()}</td>
                <td className="ps-2">{i[0].invoiceNo}</td>
                <td className="ps-2">{i[0]?.supplierName}</td>
                <td className="ps-2">Rs {i?.reduce((acc, j) => {
                  return acc + j?.ingredient?.total
                }, 0)}</td>
              </tr>
            )
            )}
            <tr>
              <td colSpan={"4"} className="text-end pe-3">
                Grand Total :
              </td>
              <td className="ps-2">
                <b>
                  {allPurchase && "Rs "} {allPurchase?.reduce((acc, i) => {
                    return acc + i?.ingredient?.total
                  }, 0)}
                </b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default PurchaseReport;
