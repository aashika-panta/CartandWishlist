<script setup>
import { Heart } from "lucide-vue-next";
import { useWishlistStore } from "../stores/Wishlist";
import { useCartStore } from "../stores/Cart";

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const isFav = (id) => wishlistStore.isInWishlist(id);
</script>

<template>
  <div class="p-6 bg-gray-50">
    <h1 class="text-2xl font-bold mb-6">Wishlist</h1>

    <!-- EMPTY -->
    <div
      v-if="wishlistStore.wishlist.length === 0"
      class="text-center text-gray-500 mt-10"
    >
      No items in wishlist
    </div>

    <!-- GRID UI (SIMPLE + CLEAN) -->
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="item in wishlistStore.wishlist"
        :key="item.id"
        class="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
      >
        <!-- IMAGE -->
        <img :src="item.img" class="w-full h-32 object-cover" />

        <!-- CONTENT -->
        <div class="p-3">
          <h2 class="text-sm font-semibold truncate">
            {{ item.name }}
          </h2>

          <p class="text-xs text-gray-500 mt-1 line-clamp-2">
            {{ item.description }}
          </p>

          <div class="flex justify-between items-center mt-3">
            <span class="text-green-600 font-bold"> ${{ item.price }} </span>

            <div class="flex gap-2 items-center">
              <!-- WISHLIST -->
              <button @click="wishlistStore.toggleWishlist(item)">
                <Heart
                  :fill="isFav(item.id) ? 'red' : 'none'"
                  :color="isFav(item.id) ? 'red' : 'gray'"
                  size="18"
                />
              </button>

              <!-- CART -->
              <button
                @click="cartStore.addToCart(item)"
                class="bg-blue-600 text-white text-xs px-2 py-1 rounded"
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
