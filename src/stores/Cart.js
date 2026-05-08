import { defineStore } from "pinia"
import { useLocalStorage } from "./LocalStorage"
import { ref } from "vue"

export const useCartStore = defineStore("cart", () => {

  const carts = useLocalStorage("cart", [])
  const message = ref("")

  function addToCart(product) {

    const item = carts.value.find(p => p.id === product.id)

    if (item) {
      message.value = `${product.name} is already in cart`
      setTimeout(() => message.value = "", 2000)
      return
    }

    carts.value.push({
      id: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      qty: 1
    })

    message.value = `${product.name} added to cart`

    setTimeout(() => message.value = "", 2000)
  }

  function increaseQty(id) {
    const item = carts.value.find(p => p.id === id)
    if (item) item.qty++
  }

  function decreaseQty(id) {
    const item = carts.value.find(p => p.id === id)

    if (item && item.qty > 1) {
      item.qty--
    } else {
      carts.value = carts.value.filter(p => p.id !== id)
    }
  }

  function removeCart(id) {
    carts.value = carts.value.filter(p => p.id !== id)
  }

  function totalAmount() {
    return carts.value.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    )
  }

  return {
    carts,
    message,
    addToCart,
    increaseQty,
    decreaseQty,
    removeCart,
    totalAmount
  }
})