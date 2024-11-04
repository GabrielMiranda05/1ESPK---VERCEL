import Grafico from  '../../components/Grafico/Grafico'
import { useState,useEffect } from 'react'

export default function Exemplo1() {

  const [produtos, setProdutos]=useState([])


  useEffect(()=>{
    fetch("https://1-espk-database-server.vercel.app/produto")
    .then((res)=>{
      return res.json()
    }).then((res)=>
      setProdutos(res)
    )
  })

  

  return (
    <div>
       <Grafico data={produtos}/>
    </div>
  )
}
