import React from 'react'
import HomeInfo from '../../Components/HomeInfo/HomeInfo'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ApiUrl from '../../ApiUrl'
import { useEffect } from 'react'
import { useState } from 'react'

const StockOutIngrdients = () => {
    const navigate = useNavigate()
    const [allIngredient, setAllIngredient] = useState([])
    const fn_allIngredients = () => {
        axios.get(`${ApiUrl}/allIngredient/getAll`).then((res) => {
            console.log(res.data)
            setAllIngredient(res.data?.data?.filter(i => i?.availableStock <= i?.stockLvl))
        })
    }
    useEffect(() => {
        fn_allIngredients()
    }, [])
    return (
        <>
            <>
                <HomeInfo name='Purchase' secondName='Stock Out Ingredients' />
                <div className="row p-5 reservation">
                    <div className="d-flex justify-content-end">
                        <button type="button" className='btn btn-info p-2 rounded-1 text-white' style={{ backgroundColor: '#428bca' }} onClick={() => navigate("/addpurchase")}>
                            <i className="fa-solid fa-plus  "></i> Purchase Ingredients
                        </button>
                    </div>
                    <table className='mt-3' style={{ borderCollapse: 'collapse' }}>
                        <tr>
                            <th>Ingredients</th>
                            <th>Qty</th>
                        </tr>
                        {allIngredient?.length > 0 ? allIngredient?.map((item) => (
                            <tr>
                                <td>{item?.ingredientName}</td>
                                <td>{item?.availableStock} {item?.unitName}</td>
                            </tr>
                        )) :
                            <tr>
                                <td colspan="2" style={{ textAlign: "center" }}>No Stock Out Ingredients</td>
                            </tr>
                        }
                    </table>
                </div>
            </>
        </>
    )
}

export default StockOutIngrdients