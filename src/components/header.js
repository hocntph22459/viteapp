import axios from "axios"
import { useEffect, useState } from "../libs"

const header = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/listmenu")
        .then(({data})=>setdata(data))
    },[])
  return `
  ${data.map(nav=>{
    return `
    <div class="menu">
    <ul>
      <li><a href="${nav.path}">${nav.name}</a></li>
    </ul>
  </div>
    `
  }).join("")}
  `
}

export default header