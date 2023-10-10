<template>
  <div
    v-if="isShow"
    class="d-flex justify-content-center align-items-center fixed-top h-100 bg-dark"
    style="--bs-bg-opacity: .5;"
  >
    <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiSpinner',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
