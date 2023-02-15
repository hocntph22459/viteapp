import { render, router } from "./src/libs";
import Notfound from "./src/pages/404";
import homepages from "./src/pages/homepages";
import productdeltaipage from "./src/pages/productdeltaipage";
import productpage from "./src/pages/productpage";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const root = document.querySelector("#app");

router.on('/',()=>{
    render(homepages,root)
})
router.on('/product/',()=>{
    render(productpage,root)
})
router.on('/product/:id',(parmas)=>{
    render(()=>{ root
        return productdeltaipage(parmas)
    },root)
})
router.notFound(()=>{
    render(Notfound,root)
})

router.resolve()