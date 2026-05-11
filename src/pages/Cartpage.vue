<script setup lang="ts">
import { ref } from "vue";
import { Minus, Plus, Trash2 } from "lucide-vue-next";
import { useCartStore } from "../stores/Cart";

const store = useCartStore();

const currentPage = ref(1);
const perPage = 3;

// Pagination logic
function paginatedItems() {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return store.carts.slice(start, end);
}

function totalPages() {
  return Math.ceil(store.carts.length / perPage);
}

function nextPage() {
  if (currentPage.value < totalPages()) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
</script>

<template>
  <div class="w-11/12 sm:w-9/12 lg:w-7/12 mx-auto mt-6">
    <!-- EMPTY -->
    <div v-if="store.carts.length === 0" class="text-center text-gray-500">
      Nothing in the cart
    </div>

    <!-- CART ITEMS -->
    <div
      v-for="item in paginatedItems()"
      :key="item.id"
      class="bg-white shadow-md rounded-xl p-4 flex items-center justify-between mb-3"
    >
      <!-- INFO -->
      <div>
        <h2 class="font-semibold">{{ item.name }}</h2>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
      </div>

      <!-- ACTIONS -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
          <Minus class="cursor-pointer" @click="store.decreaseQty(item.id)" />

          <span>{{ item.qty }}</span>

          <Plus class="cursor-pointer" @click="store.increaseQty(item.id)" />
        </div>

        <span class="font-semibold"> ${{ item.price * item.qty }} </span>

        <Trash2
          class="text-red-500 cursor-pointer"
          @click="store.removeCart(item.id)"
        />
      </div>
    </div>

    <!-- TOTAL -->
    <div class="bg-gray-100 p-4 rounded mt-6 flex justify-between">
      <h2>Total</h2>
      <h2 class="font-bold text-green-600">$ {{ store.totalAmount() }}</h2>
    </div>

    <!-- PAGINATION -->
    <div class="flex justify-center items-center gap-4 mt-6">
      <button @click="prevPage" class="px-3 py-1 bg-gray-200 rounded">
        Prev
      </button>

      <span> {{ currentPage }} / {{ totalPages() }} </span>

      <button @click="nextPage" class="px-3 py-1 bg-gray-200 rounded">
        Next
      </button>
    </div>
  </div>
</template>
