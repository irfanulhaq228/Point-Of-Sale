import React, { useEffect, useState } from "react";
import HomeInfo from "../../../Components/HomeInfo/HomeInfo";
import { Modal, Radio } from 'antd';
import CreateVarient from "./CreateVarient";
import axios from "axios";
import ApiUrl from "../../../ApiUrl";
import { AiFillDelete } from "react-icons/ai";

function AllVarient() {
    const [modalOpen, setModalOpen] = useState(false);
    const [allVarient, setAllVarient] = useState([])
    const [allFood, setAllFood] = useState([])
    const fn_getVarient = () => {
        axios.get(`${ApiUrl}/varient`).then((res) => {
            setAllVarient(res?.data?.data)
        })
    }
    const fn_getFood = () => {
        axios.get(`${ApiUrl}/food`).then((res) => {
            setAllFood(res?.data?.data)
        })
    }
    useEffect(() => {
        fn_getVarient()
        fn_getFood()
    }, [])
    return (
        <>
            <CreateVarient Modal={Modal} modalOpen={modalOpen} setModalOpen={setModalOpen} fn_getVarient={fn_getVarient} Radio={Radio} allFood={allFood} />
            <HomeInfo name="Item Category" secondName="Varient List" />
            <div className="categoryMain">
                <div className="text-end">
                    <button className="btn btn-danger m-2" onClick={() => setModalOpen(true)}>Create</button>
                </div>
                <table
                    className="my-3"
                    style={{ borderCollapse: "collapse", width: "100%" }}
                >
                    <tr>
                        <th>Varient Name</th>
                        <th>Ratio</th>
                        <th>Food Name</th>
                        <th>Set Ingredients</th>
                        <th>Action</th>
                    </tr>
                    {allVarient && allVarient?.map((item) => (
                        <tr>
                            <td>{item?.varientName}</td>
                            <td>1:{item?.types.length === 0 ? 1 : item?.types.length}</td>
                            <td>{allFood && allFood?.find((i) => i?._id === item?.foodId)?.foodName}</td>
                            {item?.addIngredient === true ? (
                                <td className="text-success fw-bold">Added</td>
                            ) : (
                                <td className="text-danger fw-bold">Not Added Yet</td>
                            )}
                            <td>
                                <button className="btn btn-danger"><AiFillDelete /></button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default AllVarient;
