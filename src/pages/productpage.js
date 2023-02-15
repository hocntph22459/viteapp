import header from "../components/header"
import listproduct from "../components/listproduct"

const productpage = () => {
  return `
  ${header()}
    <div>productpage</div>

    ${listproduct()}
  `
}

export default productpage