import { defineStore } from "pinia";
import { useLocalStorage } from "./LocalStorage";
import { ref } from "vue";
import { useToast } from "vue-toastification";

export const useCartStore = defineStore("cart", () => {
  const carts = useLocalStorage("cart", []);
  const toast = useToast();

  function addToCart(product) {
    const item = carts.value.find((p) => p.id === product.id);

    if (item) {
      toast.error(`${product.name} already added`);

      return;
    }

    carts.value.push({
      id: product.id,
      name: product.name,
      description: product.description,
      price: Number(product.price),
      qty: 1,
    });

    toast.success(`${product.name} added to cart`);
  }

  function increaseQty(id) {
    const item = carts.value.find((p) => p.id === id);
    if (item) item.qty++;
  }

  function decreaseQty(id) {
    const item = carts.value.find((p) => p.id === id);

    if (item && item.qty > 1) {
      item.qty--;
    } else {
      carts.value = carts.value.filter((p) => p.id !== id);
    }
  }

  function removeCart(id) {
    carts.value = carts.value.filter((p) => p.id !== id);
    toast.info("Removed from cart");
  }

  function totalAmount() {
    return carts.value.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  return {
    carts,
    addToCart,
    increaseQty,
    decreaseQty,
    removeCart,
    totalAmount,
  };
});
