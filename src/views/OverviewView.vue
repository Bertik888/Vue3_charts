<template>
  <div class="row g-3">
    <div class="col-12 col-md-6">
      <dispensings-by-date :items="apiData"/>
    </div>
    <div class="col-12 col-md-6">
      <consumptions
        :days-have-passed="daysHavePassed"
      />
    </div>
    <div class="col-12 col-md-6">
      <cleanings/>
    </div>
    <div class="col-12 col-md-6">
      <average-per-machine
        :value="averagePerMachine"
        :days-have-passed="daysHavePassed"
      />
    </div>
  </div>
</template>

<script>
import DispensingsByDate from '@/components/DispensingsByDate.vue'
import Consumptions from '@/components/Consumptions.vue'
import Cleanings from '@/components/Cleanings.vue'
import AveragePerMachine from '@/components/AveragePerMachine.vue'

export default {
  name: 'OverviewView',
  components: {
    DispensingsByDate,
    Consumptions,
    AveragePerMachine,
    Cleanings
  },
  props: {
    apiData: {
      type: Array,
      default: () => ([])
    },
    averagePerMachine: {
      type: Number,
      default: 0
    },
    daysHavePassed: {
      type: Number,
      default: 0
    }
  }
}
</script>
