import React from "react";
import GraphDashboard from "./GraphDashboard";
import { useEffect } from "react";
import axios from "axios";
import ApiUrl from "../../ApiUrl";
import { useState } from "react";

const FirstSectionDashBoard = () => {
  const [allOrders, setAllOrders] = useState(0)
  useEffect(() => {
    axios.get(`${ApiUrl}/order`).then((res) => {
      setAllOrders(res?.data?.data?.length)
    })
  }, [])
  return (
    <>
      <div className="d-flex p-3 " style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <div className="col-lg-1.5 p-3" style={{ borderRadius: "6px", backgroundColor: "#ff784a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>{allOrders}</h5>
            <p>Life Time Order</p>
          </div>
        </div>
        <div className="col-lg-1.5 p-3 " style={{ borderRadius: "6px", backgroundColor: "#e15671", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>23</h5>
            <p>Today Order</p>
          </div>
        </div>
        <div className="col-lg-1.5 p-3" style={{ borderRadius: "6px", backgroundColor: "#0aab7b", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>336.00</h5>
            <p>Today Saler</p>
          </div>
        </div>
        <div className="col-lg-1.5 p-3" style={{ borderRadius: "6px", backgroundColor: "#8845f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>6.5k</h5>
            <p>Total Customer</p>
          </div>
        </div>
        <div className="col-lg-1.5 p-3" style={{ borderRadius: "6px", backgroundColor: "#1f6bff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>108</h5>
            <p>Total Delivered</p>
          </div>
        </div>
        <div className="col-lg-1.5 p-3" style={{ borderRadius: "6px", backgroundColor: "#ff3b30", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", marginTop: "10px", color: "white" }} >
            <h5>50</h5>
            <p>Total Reservation</p>
          </div>
        </div>

      </div>

      <div className="row mb-5 p-3">
        <div style={{ display: "flex", justifyContent: "space-between", justifyContent: "space-around" }}>
          <div className="col-md-3">
            <div className="panel panel-bd ">
              <div className="panel-heading">
                <div className="panel-title p-3">
                  <h4>Latest Order</h4>
                </div>
              </div>
              <div className="panel-body">
                <div
                  className="slimScrollDiv"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "auto",
                    height: 300
                  }}
                >
                  <div
                    className="message_inner1"
                    style={{ overflow: "hidden", width: "auto", height: 300 }}
                  >
                    <div className="message_widgets">
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/237">
                            (0237)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: </p>
                        <p className="inbox-item-text">Time : 06:50:30</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/236">
                            (0236)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:39:13</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/235">
                            (0235)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:30:12</p>
                      </div>

                    </div>
                  </div>
                  <div
                    className="slimScrollBar"
                    style={{
                      background: "rgb(0, 0, 0)",
                      width: 3,
                      position: "absolute",
                      top: 0,
                      opacity: "0.4",
                      display: "none",
                      borderRadius: 7,
                      zIndex: 99,
                      right: 1,
                      height: "82.1168px"
                    }}
                  />
                  <div
                    className="slimScrollRail"
                    style={{
                      width: 3,
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      display: "none",
                      borderRadius: 7,
                      background: "rgb(51, 51, 51)",
                      opacity: "0.2",
                      zIndex: 90,
                      right: 1
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className="panel panel-bd ">
              <div className="panel-heading">
                <div className="panel-title p-3">
                  <h4>Latest Order</h4>
                </div>
              </div>
              <div className="panel-body">
                <div
                  className="slimScrollDiv"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "auto",
                    height: 300
                  }}
                >
                  <div
                    className="message_inner1"
                    style={{ overflow: "hidden", width: "auto", height: 300 }}
                  >
                    <div className="message_widgets">
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/237">
                            (0237)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: </p>
                        <p className="inbox-item-text">Time : 06:50:30</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/236">
                            (0236)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:39:13</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/235">
                            (0235)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:30:12</p>
                      </div>

                    </div>
                  </div>
                  <div
                    className="slimScrollBar"
                    style={{
                      background: "rgb(0, 0, 0)",
                      width: 3,
                      position: "absolute",
                      top: 0,
                      opacity: "0.4",
                      display: "none",
                      borderRadius: 7,
                      zIndex: 99,
                      right: 1,
                      height: "82.1168px"
                    }}
                  />
                  <div
                    className="slimScrollRail"
                    style={{
                      width: 3,
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      display: "none",
                      borderRadius: 7,
                      background: "rgb(51, 51, 51)",
                      opacity: "0.2",
                      zIndex: 90,
                      right: 1
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-3">
            <div className="panel panel-bd ">
              <div className="panel-heading">
                <div className="panel-title p-3">
                  <h4>Latest Order</h4>
                </div>
              </div>
              <div className="panel-body">
                <div
                  className="slimScrollDiv"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "auto",
                    height: 300
                  }}
                >
                  <div
                    className="message_inner1"
                    style={{ overflow: "hidden", width: "auto", height: 300 }}
                  >
                    <div className="message_widgets">
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/237">
                            (0237)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: </p>
                        <p className="inbox-item-text">Time : 06:50:30</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/236">
                            (0236)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:39:13</p>
                      </div>
                      <div className="inbox-item">
                        <p className="inbox-item-customer-name">
                          <strong className="inbox-item-author">Name : Walkin</strong>
                        </p>
                        <p className="inbox-item-text">Phone: 8801717426371</p>
                        <p className="inbox-item-text">
                          Order No.:{" "}
                          <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/235">
                            (0235)
                          </a>
                        </p>
                        <p className="inbox-item-text">Table No: Table-3</p>
                        <p className="inbox-item-text">Time : 06:30:12</p>
                      </div>

                    </div>
                  </div>
                  <div
                    className="slimScrollBar"
                    style={{
                      background: "rgb(0, 0, 0)",
                      width: 3,
                      position: "absolute",
                      top: 0,
                      opacity: "0.4",
                      display: "none",
                      borderRadius: 7,
                      zIndex: 99,
                      right: 1,
                      height: "82.1168px"
                    }}
                  />
                  <div
                    className="slimScrollRail"
                    style={{
                      width: 3,
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      display: "none",
                      borderRadius: 7,
                      background: "rgb(51, 51, 51)",
                      opacity: "0.2",
                      zIndex: 90,
                      right: 1
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="row mb-5 p-3">
        <div className="col-md-4">

          <div className="panel panel-bd">
            <div className="panel-heading">
              <div className="panel-title">
                <h4>Top selling Item</h4>
              </div>
            </div>
            <div className="panel-body">
              <div
                className="slimScrollDiv"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "auto",
                  height: 300
                }}
              >
                <div
                  className="message_inner1"
                  style={{ overflow: "hidden", width: "auto", height: 300 }}
                >
                  <div className="message_widgets">
                    <table className="table table-bordered table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Food Name</th>
                          <th>Variant Name</th>
                          <th>Quantity </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Bangla Set Menu Rice Boarta</td>
                          <td>1:2</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>Nasi Goreng</td>
                          <td>1:1</td>
                          <td>48</td>
                        </tr>
                        <tr>
                          <td>Pasta</td>
                          <td>Spicy</td>
                          <td>49</td>
                        </tr>
                        <tr>
                          <td>Satay chicken</td>
                          <td>1:2</td>
                          <td>35</td>
                        </tr>
                        <tr>
                          <td>Baked Sea Bream </td>
                          <td>1:1</td>
                          <td>33</td>
                        </tr>
                        <tr>
                          <td>Ramen</td>
                          <td>1:1</td>
                          <td>35</td>
                        </tr>
                        <tr>
                          <td>Idli-sumbal</td>
                          <td>1:2</td>
                          <td>28</td>
                        </tr>
                        <tr>
                          <td>Chicken Dumpling</td>
                          <td>1:3</td>
                          <td>28</td>
                        </tr>
                        <tr>
                          <td>Betel leaf shrimp</td>
                          <td>1:2</td>
                          <td>31</td>
                        </tr>
                        <tr>
                          <td>Salmon Barbecue</td>
                          <td>1:2</td>
                          <td>24</td>
                        </tr>
                        <tr>
                          <td>Tuna Sushi</td>
                          <td>1:2</td>
                          <td>39</td>
                        </tr>
                        <tr>
                          <td>Dinner Rice Package</td>
                          <td>Regular</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td>Chana Aloo Masala</td>
                          <td>1:2</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>Shwarma</td>
                          <td>1:1</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>Spring roll</td>
                          <td>1:3</td>
                          <td>12</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="slimScrollBar"
                  style={{
                    background: "rgb(0, 0, 0)",
                    width: 3,
                    position: "absolute",
                    top: 0,
                    opacity: "0.4",
                    display: "block",
                    borderRadius: 7,
                    zIndex: 99,
                    right: 1,
                    height: "113.493px"
                  }}
                />
                <div
                  className="slimScrollRail"
                  style={{
                    width: 3,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display: "none",
                    borderRadius: 7,
                    background: "rgb(51, 51, 51)",
                    opacity: "0.2",
                    zIndex: 90,
                    right: 1
                  }}
                />
              </div>
            </div>

          </div>

        </div>
        <div className="col-md-8 ">

          <div className="panel panel-bd p-3">
            <div className="panel-heading">
              <div className="panel-title">
                <h4>Monthly Sales Amount and Order</h4>
                <ul className="nav nav-tabs pull-right order_status order_status-new">
                  <li>
                    <input
                      name="yearmonth"
                      id="datepicker3"
                      className="form-control datepicker3 hasDatepicker"
                      type="text"
                      placeholder="Month"
                      defaultValue=""
                      readOnly="readonly"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="button"
                      className="btn btn-success"
                      name="search"
                      defaultValue="Search "
                      onclick="searchmonth()"
                      autoComplete="off"
                    />
                  </li>
                </ul>
              </div>
            </div>


            <GraphDashboard />
          </div>


        </div>

        <div className="col-md-4">
          <div className="panel panel-bd ">
            <div className="panel-heading">
              <div className="panel-title p-3">
                <h4> Pending Order</h4>
              </div>
            </div>
            <div className="panel-body">
              <div
                className="slimScrollDiv"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "auto",
                  height: 300
                }}
              >
                <div
                  className="message_inner1"
                  style={{ overflow: "hidden", width: "auto", height: 300 }}
                >
                  <div className="message_widgets">
                    <div className="inbox-item">
                      <p className="inbox-item-customer-name">
                        <strong className="inbox-item-author">Name : Walkin</strong>
                      </p>
                      <p className="inbox-item-text">Phone: 8801717426371</p>
                      <p className="inbox-item-text">
                        Order No.:{" "}
                        <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/237">
                          (0237)
                        </a>
                      </p>
                      <p className="inbox-item-text">Table No: </p>
                      <p className="inbox-item-text">Time : 06:50:30</p>
                    </div>
                    <div className="inbox-item">
                      <p className="inbox-item-customer-name">
                        <strong className="inbox-item-author">Name : Walkin</strong>
                      </p>
                      <p className="inbox-item-text">Phone: 8801717426371</p>
                      <p className="inbox-item-text">
                        Order No.:{" "}
                        <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/236">
                          (0236)
                        </a>
                      </p>
                      <p className="inbox-item-text">Table No: Table-3</p>
                      <p className="inbox-item-text">Time : 06:39:13</p>
                    </div>
                    <div className="inbox-item">
                      <p className="inbox-item-customer-name">
                        <strong className="inbox-item-author">Name : Walkin</strong>
                      </p>
                      <p className="inbox-item-text">Phone: 8801717426371</p>
                      <p className="inbox-item-text">
                        Order No.:{" "}
                        <a href="https://bhojon.bdtask-demo.com/demo-classic/ordermanage/order/orderdetails/235">
                          (0235)
                        </a>
                      </p>
                      <p className="inbox-item-text">Table No: Table-3</p>
                      <p className="inbox-item-text">Time : 06:30:12</p>
                    </div>

                  </div>
                </div>
                <div
                  className="slimScrollBar"
                  style={{
                    background: "rgb(0, 0, 0)",
                    width: 3,
                    position: "absolute",
                    top: 0,
                    opacity: "0.4",
                    display: "none",
                    borderRadius: 7,
                    zIndex: 99,
                    right: 1,
                    height: "82.1168px"
                  }}
                />
                <div
                  className="slimScrollRail"
                  style={{
                    width: 3,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display: "none",
                    borderRadius: 7,
                    background: "rgb(51, 51, 51)",
                    opacity: "0.2",
                    zIndex: 90,
                    right: 1
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default FirstSectionDashBoard