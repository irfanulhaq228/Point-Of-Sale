import React from "react";
import HomeInfo from "../../Components/HomeInfo/HomeInfo";

const AddUser = () => {
    return (
        <>
            <HomeInfo name="Users" secondName="Add User" />
            <div className="mt-2 mx-5">
                <div className="formFood py-4 px-5">
                    <form
                        className="mt-2"
                    // onSubmit={(e) => {
                    //     e.preventDefault();
                    //     sendData(e.target);
                    // }}
                    >
                        <div className="mb-3 row">
                            <div className="col-md-6">
                                <div>
                                    <label for="from" className="posText fw-bold">
                                        First Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="text" className="posInputText w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label for="from" className="posText fw-bold">
                                        Last Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div>
                                    <input type="text" className="posInputText w-100" />
                                </div>
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
        </>
    )
}

export default AddUser