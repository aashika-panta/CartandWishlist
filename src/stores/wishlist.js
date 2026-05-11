import { defineStore } from "pinia";
import { useLocalStorage } from "./LocalStorage";
import { useToast } from "vue-toastification";

export const useWishlistStore = defineStore("wishlist", () => {
  const wishlist = useLocalStorage("wishlist", []);
  const toast = useToast();

  function toggleWishlist(product) {
    const exists = wishlist.value.some((item) => item.id === product.id);

    if (exists) {
      wishlist.value = wishlist.value.filter((item) => item.id !== product.id);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      wishlist.value.push(product);
      toast.success(`${product.name} added to wishlist`);
    }
  }

  function isInWishlist(id) {
    return wishlist.value.some((item) => item.id === id);
  }

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
  };
});
