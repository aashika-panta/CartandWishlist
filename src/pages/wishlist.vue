<script setup>
import { Heart } from "lucide-vue-next";
import { useWishlistStore } from "../stores/Wishlist";
import { useCartStore } from "../stores/Cart";

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const isFav = (id) => wishlistStore.isInWishlist(id);
</script>

<template>
     <!-- Toast Message -->
  <div
    v-if="cartStore.message"
    class="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
  >
    {{ cartStore.message }}
  </div>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Wishlist</h1>
   

    <div
      v-if="wishlistStore.wishlist.length === 0"
      class="text-center text-gray-500 mt-10"
    >
      No items in wishlist
    </div>

    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      <div
        v-for="item in wishlistStore.wishlist"
        :key="item.id"
        class="bg-white border rounded-lg shadow-sm"
      >
        <img :src="item.img" class="w-full h-28 object-cover" />

        <div class="p-3">
          <h2 class="text-sm font-semibold">{{ item.name }}</h2>

          <p class="text-xs text-gray-500">{{ item.description }}</p>

          <div class="flex justify-between items-center mt-3">
            <span class="text-green-600 font-bold"> ${{ item.price }} </span>

            <div class="flex gap-3">
              <!-- remove / toggle wishlist -->
              <button @click="wishlistStore.toggleWishlist(item)">
                <Heart
                  :fill="isFav(item.id) ? 'red' : 'none'"
                  :color="isFav(item.id) ? 'red' : 'gray'"
                />
              </button>

              <!-- ADD TO CART (FIXED BELOW) -->
              <button
                @click="cartStore.addToCart(item)"
                class="bg-blue-600 text-white px-2 py-1 text-xs rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
