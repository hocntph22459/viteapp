import axios from "axios"
import { useEffect, useState } from "../libs"

const listproduct = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/listproduct")
        .then(({data})=>setdata(data))
    },[])
  return `
  <div class="row">
  ${data.map(listpro=>{
    return `
                    <div class="col">
                    <a href="/product/${listpro.id}">
                    <img src="${listpro.image}" alt="">
                    </a>
                    <a href="/product/${listpro.id}">
                    <h6>${listpro.name}</h6>
                    </a>
                    <p>${listpro.price}</p>
                </div>
    `
  }).join("")}
  </div>
  `
}

export default listproduct