<template>
  <header class="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom border-top border-2 border-black">
    <h1 class="text-capitalize m-0">{{ $route.name }}</h1>

    <div class="d-flex">
      <div class="border-start p-2 d-flex align-items-center">
        <i class="bi-backpack-fill fs-2"></i>
        <span class="px-3 fw-bold">{{ machineCount }}</span>
      </div>
      <div class="border-start p-2 d-flex align-items-center">
        <i class="bi bi-cup-hot-fill fs-2"></i>
        <div class="px-2">
          <div class="fw-bold mt-2">{{ summedDispensings }}</div>
          <small>within the last <strong>{{ daysHavePassed }}</strong> days</small>
        </div>
      </div>
      <div class="border-start p-2 d-flex align-items-center">
        <i
          class="bi bi-arrow-clockwise fs-2 cursor-pointer"
          @click="$emit('refresh')"
        ></i>
        <span class="px-3 fw-bold">{{ refreshTime }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBlock',
  props: {
    daysHavePassed: {
      type: Number,
      default: 0
    },
    machineCount: {
      type: Number,
      default: 0
    },
    summedDispensings: {
      type: Number,
      default: 0
    },
    refreshTime: {
      type: String,
      default: ''
    }
  }
}
</script>
