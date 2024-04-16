import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiUrl from "../ApiUrl";

function CheckIn() {
  const [startTime, setStartTime] = useState(null);
  const [todayOrder, setTodayOrder] = useState();
  const [todayPurchase, setTodayPurchase] = useState();
  const [todaySale, setTodaySale] = useState();
  const [elapsedTime, setElapsedTime] = useState(0);

  const fn_todayOrders = () => {
    const inputDate = new Date(localStorage.getItem("startTime"));
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    axios.post(`${ApiUrl}/order/searchbydate`, { date: formattedDate }).then((res) => {
      setTodayOrder(res?.data?.data?.length)
      setTodaySale(res?.data?.data?.reduce((acc, i) => {
        return acc + i?.payableAmount
      }, 0))
    })
  }

  const fn_todayPurchases = () => {
    const inputDate = new Date(localStorage.getItem("startTime"));
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    axios.post(`${ApiUrl}/purchase/purchasebyday`, { date: formattedDate }).then((res) => {
      setTodayPurchase(res?.data?.data?.reduce((acc, i) => {
        return acc + i?.ingredient?.total
      }, 0))
    })
  }

  useEffect(() => {
    fn_todayOrders()
    fn_todayPurchases()
  }, [Modal])

  useEffect(() => {
    const storedStartTime = localStorage.getItem('startTime');
    const storedElapsedTime = localStorage.getItem('elapsedTime');

    if (storedStartTime) {
      setStartTime(new Date(storedStartTime));
    }

    if (storedElapsedTime) {
      setElapsedTime(parseInt(storedElapsedTime, 10));
    }

    fn_todayOrders()
  }, []);

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        const now = new Date();
        const elapsed = Math.floor((now - startTime) / 1000);
        setElapsedTime(elapsed);
        localStorage.setItem('elapsedTime', elapsed.toString());
        localStorage.setItem('tokenNumber', 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startTime]);

  const handleCheckIn = () => {
    const now = new Date();
    setStartTime(now);
    localStorage.setItem('startTime', now.toString());
  };

  const handleCheckOut = () => {
    fn_todayOrders()
    Modal.confirm({
      title: "Are you sure you want to Check Out and Close the Day?",
      okText: "Close day and Print Invoice",
      width: 500,
      onOk: () => {
        printInvoice(localStorage.getItem("startTime"))
        localStorage.removeItem('startTime');
        localStorage.removeItem('tokenNumber');
        setStartTime(null);
        setElapsedTime(0);
        localStorage.removeItem('elapsedTime');
      }
    });
  };

  const printInvoice = (date) => {
    const invoiceContent = `
<html>
  <head>
    <title>Document</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center
      }
      body>div{
        width: 50%;
      }
      h3, h2 {
        text-align:center;
      }
      table{
        width:100%;
        table-layout: fixed;
      }
    </style>
  </head>
  <body>
      <div>
        <h2>Light House Development</h2>
        <hr>
        <h3>Invoice Date : ${new Date(date).toLocaleDateString()}</h3>
        <hr/>
        <table>
          <tr>
            <th style="text-align:left">Total Sale</th>
            <td style="text-align:right">Rs ${todaySale}</td>
          </tr>
          <tr>
            <th style="text-align:left">Total Orders</th>
            <td style="text-align:right">${todayOrder}</td>
          </tr>
          <tr>
            <th style="text-align:left">Total Purchase</th>
            <td style="text-align:right">Rs ${todayPurchase}</td>
          </tr>
        </table>
        <hr/>
        <h5 style="text-align:center">Day Closed! :)</h5>
    </div>
  </body>
</html>
`;
    const printWindow = window.open('', '', 'width=1000,height=1000');
    printWindow.document.open();
    printWindow.document.write(invoiceContent);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
    window.location.reload(true);

  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="col-md-12 text-center p-5">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div>
          <button className="btn btn-success d-flex" style={{ backgroundColor: "green", height: "60px", width: "60px", borderRadius: "50px", justifyContent: "center", alignItems: "center", color: "white", cursor: "pointer" }} onClick={handleCheckIn}
            disabled={localStorage.getItem("startTime") && true}
          >
            <i class="fa-solid fa-arrow-right-to-bracket" ></i>

          </button>

          <h8 className="" style={{ fontWeight: "bold" }}>Check in</h8>
        </div>


        <div>
          <h2>Working Hours</h2>
          <h1>{formatTime(elapsedTime)}</h1>
        </div>
        <div>
          <button className="d-flex btn btn-danger" style={{ height: "60px", width: "60px", borderRadius: "50px", justifyContent: "center", alignItems: "center", color: "white", cursor: "pointer" }} onClick={handleCheckOut}
            disabled={!localStorage.getItem("startTime") && true}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
          <h8 className="" style={{ fontWeight: "bold" }}>Check out</h8>
        </div>
      </div>
    </div>
  )
}

export default CheckIn