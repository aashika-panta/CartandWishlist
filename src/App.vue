<template>

  <div>

    <nav class="flex gap-5 p-5 bg-gray-100">

      <router-link to="/">
        Products
      </router-link>

      <router-link to="/cart">
        Cart
      </router-link>

       <router-link to="/wishlist">
        wishlist
      </router-link>

    </nav>

    <router-view />

  </div>

</template>