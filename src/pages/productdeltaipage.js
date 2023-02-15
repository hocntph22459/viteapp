import axios from "axios";
import { useEffect, useState } from "../libs"

const productdeltaipage = ({data:{id}}) => {
    console.log(id);
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/listproduct/${id}`)
        .then(({data})=>setdata(data))
    },[])
  return `
    ${data.map(listone=>{
        return `
                <div class="product">
                <img src="${listone.image}" alt="">
                <h6>${listone.name}</h6>
                <p>${listone.price}</p>
            </div>
        `
    })}
  `
}

export default productdeltaipage