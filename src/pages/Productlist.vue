<script setup>
import { ref } from "vue";

import { useCartStore } from "../stores/Cart";
import { Heart } from "lucide-vue-next";
import { useWishlistStore } from "../stores/wishlist";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const products = ref([
  {
    id: 1,
    img: "/images/download.jpg",
    name: "Shoes",
    description:
      "Comfortable running shoes designed for daily use and long walking with soft cushioning.",
    price: 100,
  },
  {
    id: 2,
    img: "/images/images.jpg",
    name: "Watch",
    description:
      "Stylish modern wrist watch with waterproof design and premium metal strap.",
    price: 200,
  },
  {
    id: 3,
    img: "/images/download (2).jpg",
    name: "Bag",
    description:
      "Durable travel backpack with multiple compartments and strong zippers.",
    price: 300,
  },
  {
    id: 4,
    img: "/images/images (1).jpg",
    name: "Headphones",
    description:
      "Wireless headphones with deep bass, noise cancellation, and long battery life.",
    price: 150,
  },
  {
    id: 5,
    img: "/images/download (1).jpg",
    name: "Sunglasses",
    description:
      "UV protection sunglasses with lightweight frame and stylish design.",
    price: 80,
  },
  {
    id: 6,
    img: "/images/images (1).jpg",
    name: "Laptop Bag",
    description:
      "Water-resistant laptop bag with extra padding and secure compartments.",
    price: 220,
  },
  {
    id: 7,
    img: "/images/download (2).jpg",
    name: "Perfume",
    description: "Long-lasting fragrance perfume with fresh and premium scent.",
    price: 90,
  },
  {
    id: 8,
    img: "/images/images (2).jpg",
    name: "Smartphone",
    description:
      "Latest smartphone with high-resolution camera and fast performance.",
    price: 500,
  },
  {
    id: 9,
    img: "/images/download.jpg",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt suitable for daily casual wear.",
    price: 40,
  },
]);
</script>

<template>
  <!-- Toast Message -->
  <div
    v-if="cartStore.message"
    class="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
  >
    {{ cartStore.message }}
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <!-- Card -->
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <!-- Image -->
      <img :src="product.img" class="w-full h-28 sm:h-32 object-cover" />

      <!-- Content -->
      <div class="p-3">
        <h2 class="text-sm font-semibold text-gray-800 truncate">
          {{ product.name }}
        </h2>

        <p class="text-xs text-gray-500 mt-1">
          {{ product.description }}
        </p>

        <div class="flex justify-between items-center mt-3">
          <span class="text-green-600 font-bold text-sm">
            $ {{ product.price }}
          </span>

          <div class="flex gap-3 items-center">
            <button @click="wishlistStore.toggleWishlist(product)">
              <Heart
                :fill="wishlistStore.isInWishlist(product.id) ? 'red' : 'none'"
                :color="
                  wishlistStore.isInWishlist(product.id) ? 'red' : 'black'
                "
              />
            </button>
            <button
              @click="cartStore.addToCart(product)"
              class="bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
