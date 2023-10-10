<template>
  <footer class="fixed-bottom bg-body-tertiary">
    <div class="container">
      <ul class="nav nav-underline">
        <li class="nav-item">
          <router-link
            :to="{ name: 'overview' }"
            class="nav-link"
            active-class="active"
          >
            Overview
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'export' }"
            class="nav-link"
            active-class="active"
          >
            Export
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
