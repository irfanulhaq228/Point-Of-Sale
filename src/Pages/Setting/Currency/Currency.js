import React, { useEffect, useState } from "react";
import HomeInfo from "../../../Components/HomeInfo/HomeInfo";
import { Modal } from 'antd'
import { toast } from "react-toastify";
import axios from "axios";
import ApiUrl from "../../../ApiUrl";

const Currency = () => {
    const [currencyInput, setCurrencyInput] = useState("")
    const [modal1Open, setModal1Open] = useState(false);
    const [getCurr, setGetCurr] = useState([]);
    const fn_getCurrency = () => {
        axios.get(`${ApiUrl}/currency`).then((res) => {
            if (res?.data?.status === 200) {
                setGetCurr(res?.data?.data)
            }
        })
    }
    useEffect(() => {
        fn_getCurrency()
    }, [])
    const fn_submit = () => {
        if (currencyInput === "") {
            return toast.error("Enter Currency")
        }
        axios.post(`${ApiUrl}/currency`, { currency: currencyInput }).then((res) => {
            if (res?.data?.status === 200) {
                toast.success(res?.data?.message)
                setModal1Open(false)
                setCurrencyInput("")
                fn_getCurrency()
            } else {
                toast.error(res?.data?.message)
            }

        })
    }
    return (
        <>
            <HomeInfo name="Settings" secondName="Change Currency" />
            <Modal
                title="Add Currency"
                style={{ top: 40 }}
                open={modal1Open}
                onOk={() => fn_submit()}
                onCancel={() => setModal1Open(false)}
            >
                <hr />
                <div className="d-flex gap-5 align-items-center">
                    <div>
                        <label className="posText fw-bold">Currency</label>
                    </div>
                    <div className="w-100">
                        <input type="text" className="posInputText w-100" value={currencyInput} onChange={(e) => setCurrencyInput(e?.target?.value)} />
                    </div>
                </div>
            </Modal>
            <div className="mt-2 mx-5">
                <div className="formFood py-4 px-5">
                    <div className="text-end">
                        <button className="btn btn-danger" onClick={() => setModal1Open(true)}>Add Currency</button>
                    </div>
                    <div>
                        <table className="w-100 mt-3" style={{ tableLayout: "fixed" }}>
                            <tr>
                                <th className="ps-2">Sr #</th>
                                <th className="ps-2">Currency</th>
                            </tr>
                            {getCurr?.length > 0 ? (
                                <tr>
                                    <td className="ps-2">1</td>
                                    <td className="ps-2">{getCurr?.[0]?.currency}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan={2}>No Data</td>
                                </tr>
                            )}

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Currency