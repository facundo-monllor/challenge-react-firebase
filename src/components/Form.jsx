import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import formData from '../api/formData.json';

import { addCollectionsAndDocuments } from '../utils/firebase/firebase.utils';


export const Form = () => {

const [data, setData] = useState([])
const navigate = useNavigate()

useEffect(() => {
    setData(formData.items)
    console.log("data",data)
}, [])

const [user, setUser] = useState({
    full_name : "",
    email : "",
    birth_date : "",
    country_of_origin : "",
    terms_and_conditions : "",
})

const handleData = (e) => {
    setUser({
      ...user,
        [e.target.name] : e.target.value
    })
    console.log("user",user)
}

const handleSubmit = (e) => {
    e.preventDefault()
    addCollectionsAndDocuments(user.email, user)
    navigate(`/responses/${user.email}`)
    console.log("submit")
    setUser({
    full_name : "",
    email : "",
    birth_date : "",
    country_of_origin : "",
    terms_and_conditions : "",
    })
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {
                data && data.map((d) => {
                    return(
                        <div key={d.label}>
                            <label>{d.label}</label>
                            {
                                d.type !== "select"
                                ? (<input 
                                    type={d.type} 
                                    name={d.name ? d.name : d.label} 
                                    required={d.required ? d.required : null} 
                                    placeholder={d.name}
                                    onChange={handleData}
                                    value={user[d.name]}
                                    >
                                    </input>)
                                : (
                                    <select name={d.name} required={d.required} onChange={handleData} value={user[d.name]} >
                                        <option value="" hidden>Selecciona una opción</option>
                                        {
                                            d.options && d.options.map((o) => {
                                                return(
                                                    <option key={o.value} value={o.value}>{o.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                )
                            }
                        </div>
                    )
                })
            }
        </form>
    </div>
  )
}
