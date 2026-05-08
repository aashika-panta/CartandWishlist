import { createRouter, createWebHistory } from "vue-router";
import Cartpage from "../pages/Cartpage.vue";
import Productlist from "../pages/Productlist.vue";
import Wishlist from "../pages/wishlist.vue";

const routes =[{
    path:"/",
    component:Productlist
},{
 
path:"/cart",
component:Cartpage
},{
 
path:"/wishlist",
component:Wishlist
}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router