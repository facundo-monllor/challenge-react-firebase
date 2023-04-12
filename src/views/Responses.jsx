import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDocument } from '../utils/firebase/firebase.utils'

export const Responses = () => {

  const params = useParams()
  console.log(params)
  const [responses, setResponses] = useState("")

  useEffect(() => {

    setTimeout(() => {
      (async function get(){
        let result = await getDocument(params.user)
        setResponses(result)
      })()
    }, 3000);

  })
  


  return (
    <div>
      <h1>Gracias por responder la encuesta!</h1>
      <p>User:{responses.email}</p>
      <h3>Aqui tienes tus respuestas</h3>
      <p>Name:{responses.full_name}</p>
      <p>Birthday:{responses.birth_date}</p>
      <p>Country:{responses.country_of_origin} </p>
    </div>
  )
}
