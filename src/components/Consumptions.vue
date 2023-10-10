<template>
  <div class="border rounded shadow-sm p-2 h-100">
    <div class="row g-2">
      <div class="col-12 h5 text-start">
        Consumptions
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <i class="bi bi-droplet-fill fs-2 me-2"></i>
          <div>
            <div class="text-center h3">504,75</div>
            <div>liters of water were consumed within the last <strong>{{ daysHavePassed }}</strong> days</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <i class="bi bi-droplet fs-2 me-2"></i>
          <div>
            <div class="text-center h3">185,75</div>
            <div>liters of milk were consumed within the last <strong>{{ daysHavePassed }}</strong> days</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <i class="bi bi-box2-heart-fill fs-2 me-2"></i>
          <div>
            <div class="text-center h3">1,78</div>
            <div>kg of powder were consumed within the last <strong>{{ daysHavePassed }}</strong> days</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <i class="bi bi-box2-heart-fill fs-2 me-2"></i>
          <div>
            <div class="text-center h3">48,69</div>
            <div>liters of beans were consumed within the last <strong>{{ daysHavePassed }}</strong> days</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <i class="bi bi-droplet-fill fs-2 me-2"></i>
          <div>
            <div class="text-center h3">00,00</div>
            <div>liters of syrup were consumed within the last <strong>{{ daysHavePassed }}</strong> days</div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="rounded shadow-sm p-2 h-100 d-flex align-items-start">
          <div class="ps-3">
            Please be awere that the quantities may differ from reality and that the numbers for today might not yet be completely available.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Consumptions',
  props: {
    daysHavePassed: {
      type: Number,
      default: 0
    }
  }
}
</script>
