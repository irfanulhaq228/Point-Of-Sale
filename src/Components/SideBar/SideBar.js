import React from 'react'
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go"

const SideBar = ({ toggle }) => (

    <>
        <div className="side-bar">
            <div className="info-box py-4 ">
                <div className="box">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipPMJehKBLVzsoyQfNRdTGvRogoKQhxzdsbnIpR4=s680-w680-h510" alt="user-img" style={{ borderRadius: "25px" }} />
                </div>
                <h6 className='text-white'>Uzair Mirza</h6>
                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle" />
                    <small>Admin</small>
                </div>
            </div>
            {/* Accordians */}
            <div className='accordian-box'>
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='no-body'>
                            <i className='fa-solid fa-map-location'></i>
                            <NavLink to='/manageday'><p className='mt-3'>Manage Day</p></NavLink>
                        </button>
                    </div>
                    <div className="accordion-item">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='no-body'>
                            <i className='fa-solid fa-home'></i>
                            <NavLink to='/'><p className='mt-3'>Dashboard</p></NavLink>
                        </button>
                    </div>
                    {/* Manage Order */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="fa-solid fa-arrows-to-dot"></i>
                                <p className='mt-3'>Manage Order</p>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                <NavLink to='/pos_invoice'>POS Invoice</NavLink>
                                <NavLink to='/order_list'>Order List</NavLink>
                                <NavLink to='/pending_order'>Pending Order</NavLink>
                                <NavLink to='/complete_order'>Complete Order</NavLink>
                                <NavLink to='/cancel_order'>Cancel Order</NavLink>
                                <NavLink to='/pos_setting'>POS Setting</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* Reservation */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i className='fa-solid fa-tags'></i>
                                <p className='mt-3'>Reservation</p>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                <NavLink to='/reservation'>Reservation</NavLink>
                                <NavLink to='/add_booking'>Add Booking</NavLink>
                                <NavLink to='/unavailable_day'>Unavailable Day</NavLink>
                                <NavLink to='/reservation_setting'>Reservation Setting</NavLink>

                            </div>
                        </div>
                    </div> */}
                    {/* purchase Manage */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <i className='fa-solid fa-shopping-cart'></i>
                                <p className='mt-3'>Purchase Manage</p>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  d-flex flex-column">

                                <NavLink to='/purchase_item'>Purchase Item</NavLink>
                                <NavLink to='/addpurchase'>Add Purchase</NavLink>
                                <NavLink to='/purchase_return'>Purchase Return</NavLink>
                                <NavLink to='/return_invoice'>Return Invoice</NavLink>
                                <NavLink to='/supplier_manage'>Supplier Manage</NavLink>
                                <NavLink to='/pos_invoice'>Supplier Ledgar</NavLink>
                                <NavLink to='/stockout_ingredients'>Stock Out Ingredients</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* report     multi-accordians*/}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <i className='fa-solid fa-chart-line'></i>
                                <p className='mt-3'>Report</p>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                <NavLink to='/purchasereport'>Purchase Report</NavLink>
                                <NavLink to='/salereport'>Sale Report(Food Items)</NavLink>
                                <NavLink to='/salebyday'>Sale By Date</NavLink>
                                {/* Accordian inside Accordian */}
                                {/* <div className="accordion " id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                Sales Report
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <NavLink to='/pos_invoice'>Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Item Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Item Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Waiters Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Kitchen Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Diliver Type Sales Report</NavLink>
                                                <NavLink to='/pos_invoice'>Sale Report Cashier</NavLink>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to='/pos_invoice'>Cash Register Report</NavLink>
                                <NavLink to='/pos_invoice'>Sale Report Filtering</NavLink>
                                <NavLink to='/pos_invoice'>Sale By Date</NavLink>
                                <NavLink to='/pos_invoice'>Commision</NavLink>
                                <NavLink to='/pos_invoice'>Sale By Table</NavLink> */}
                            </div>
                        </div>
                    </div>
                    {/* food Management   multi accordians */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <i class="fa-solid fa-cube"></i>
                                <p className='mt-3'>Food Management</p>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="accordion " id="accordionFlushExample">
                                    {/* Manage Category */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                <GoDotFill className='me-1' />Manage Category
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <NavLink to='/addCategory'>Add Category</NavLink>
                                                <NavLink to='/categorylist'>Category List</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Manage Food */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseTwo"
                                            >
                                                <GoDotFill className='me-1' />Manage Food
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingTwo"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <NavLink to='/addfood'>Add Food</NavLink>
                                                <NavLink to='/foodlist'>Food List</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Manage varient */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                <GoDotFill className='me-1' />Manage Varients
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <NavLink to='/allvarient'>All Varient</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Manage Ingredient */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFour"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseFour"
                                            >
                                                <GoDotFill className='me-1' />Manage Ingredient
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingFour"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                <NavLink to='/addingredient'>Add Ingredient</NavLink>
                                            </div>
                                            <div className="accordion-body">
                                                <NavLink to='/allvarient'>All Ingredient</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Setting */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <i class="fa-solid fa-gear"></i>
                                <p className='mt-3'>Setting</p>
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body    d-flex flex-column">

                                {/* -------------------- */}

                                <div className="accordion " id="accordionFlushExample">


                                    {/* Customer Type */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                Customer Type
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">

                                                <NavLink to='customertypelist'>Customer Type List</NavLink>

                                            </div>
                                        </div>
                                    </div>


                                    {/* Unit Measurement */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFive"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseFive"
                                            >
                                                Unit Measurement
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingFive"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">

                                                <NavLink to='ingradientlist'>Ingredient List</NavLink>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* -------------------------------- */}

                                <NavLink to='/pos_invoice'>Application Setting</NavLink>
                                <NavLink to='/pos_invoice'>App Setting</NavLink>

                                <NavLink to='/setting/currency'>Currency</NavLink>

                            </div>
                        </div>
                    </div>

                    {/* humman Resources */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingon">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseon" aria-expanded="false" aria-controls="collapseon">
                                <i class="fa-solid fa-users"></i>
                                <p className='mt-3'>Humman Resources</p>
                            </button>
                        </h2>
                        <div id="collapseon" className="accordion-collapse collapse" aria-labelledby="headingon"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {/* ---------- */}
                                <div className="accordion " id="accordionFlushExample">

                                    {/* HRM */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                HRM
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">


                                                <NavLink to='/'>Add Employee</NavLink>
                                                <NavLink to='/'>Manage Employee</NavLink>


                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------- */}
                    <div className='default'>
                        <small >Default</small>
                    </div>

                    {/* ------ */}

                    {/* user */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeventeen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                <i class="fa-solid fa-user"></i>
                                <p>User</p>
                            </button>
                        </h2>
                        <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                <NavLink to='/pos_invoice'>User</NavLink>
                                <NavLink to='/adduser'>Add User</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* ------------ */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle=""
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='no-body'>
                                <i class="fa-brands fa-themeco"></i>
                                <p>Modules</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">

                        </div>
                    </div> */}
                    {/* ------------ */}

                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='no-body'>
                                <i class="fa-brands fa-themeco"></i>
                                <p>Themes</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">

                        </div>
                    </div> */}
                    {/* role Permission */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEleven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                <i class="fa-solid fa-lock"></i>
                                <p>Role Permission</p>
                            </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                {/* <NavLink to='permissionsetup'>Permission Setup</NavLink> */}
                                <NavLink to='/addrole'>Add Role </NavLink>
                                <NavLink to='rolelist'>Role List</NavLink>
                                <NavLink to='useraccessrole'>User Access Role</NavLink>
                            </div>
                        </div>
                    </div>
                    {/* web Setting */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTweleve">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTweleve" aria-expanded="false" aria-controls="collapseTweleve">
                                <i class="fa-solid fa-gear"></i>
                                <p>Web Setting</p>
                            </button>
                        </h2>
                        <div id="collapseTweleve" className="accordion-collapse collapse" aria-labelledby="headingTweleve"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column">
                                <NavLink to='/pos_invoice'>Common Setting</NavLink>
                                <NavLink to='/pos_invoice'>Mange Store Time</NavLink>
                                <NavLink to='/pos_invoice'>Banner Setting</NavLink>
                                <NavLink to='/pos_invoice'>SEO Setting</NavLink>
                                <NavLink to='/pos_invoice'>Social Setting</NavLink>
                                <NavLink to='/pos_invoice'>Widget Setting</NavLink>
                                <NavLink to='/pos_invoice'>Email Setting</NavLink>
                                <NavLink to='/pos_invoice'>Customer Setting</NavLink>
                                <NavLink to='/pos_invoice'>Customer Rating</NavLink>
                                <NavLink to='/pos_invoice'>Coupon  List</NavLink>
                                <NavLink to='/pos_invoice'>Subscibe List</NavLink>

                            </div>
                        </div>
                    </div> */}
                    {/* ------------ */}

                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle=""
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id='no-body'>
                                <i class="fa-solid fa-repeat"></i>
                                <p>Auto Update</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">

                        </div>
                    </div> */}
                    {/* Messeges */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThirteen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                <i class="fa-solid fa-message"></i>
                                <p>Messeges</p>
                            </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <NavLink to='/pos_invoice'>New</NavLink>
                                <NavLink to='/pos_invoice'>Inbox</NavLink>
                                <NavLink to='/pos_invoice'>Sent</NavLink>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
)

export default SideBar