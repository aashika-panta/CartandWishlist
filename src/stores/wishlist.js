import { defineStore } from "pinia"
import { useLocalStorage } from "./LocalStorage"

export const useWishlistStore = defineStore("wishlist", () => {

  const wishlist = useLocalStorage("wishlist", [])

  function toggleWishlist(product) {

    const index = wishlist.value.findIndex(
      item => item.id === product.id
    )

    if (index !== -1) {
      wishlist.value.splice(index, 1)
    } else {
      wishlist.value.push(product)
    }
  }

  function isInWishlist(id) {
    return wishlist.value.some(item => item.id === id)
  }

  return {
    wishlist,
    toggleWishlist,
    isInWishlist
  }
})