<template>
  <div class="container">
    <header-block
      :days-have-passed="daysHavePassed"
      :machine-count="machineCount"
      :summed-dispensings="summedDispensings"
      :refresh-time="refreshTime.toFormat('dd.MM.yyyy HH:mm:ss')"
      class="mt-3"
      @refresh="getData"
    />
    <router-view
      :api-data="apiData"
      :days-have-passed="daysHavePassed"
      :average-per-machine="averagePerMachine"
    />
  </div>
  <footer-block/>
  <ui-spinner :is-show="isStart"/>
</template>

<script>
import { DateTime, Interval } from 'luxon'
import { getDataFromApi } from '@/api/api'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import UiSpinner from '@/components/UiSpinner.vue'

export default {
 name: 'App',
 components: {
   HeaderBlock,
   FooterBlock,
   UiSpinner
 },
 data() {
   return {
     apiData: [],
     refreshTime: DateTime.now(),
     isStart: false
   }
 },
 computed: {
   uniqMachineDispensings() {
     const machine = {}
     this.apiData.forEach((item) => {
       machine[item.machine_number] = machine[item.machine_number] ? machine[item.machine_number] + item.summed_dispensings : item.summed_dispensings
     })
     //
     return machine
   },
   machineCount() {
     return Object.keys(this.uniqMachineDispensings).length
   },
   summedDispensings() {
     return Object.values(this.uniqMachineDispensings).reduce((partialSum, a) => partialSum + a, 0)
   },
   averagePerMachine() {
     return (this.summedDispensings / this.machineCount  || 0).toFixed(2)
   },
   daysHavePassed() {
     let first = DateTime.now()
     this.apiData.forEach((item) => {
       if (first > DateTime.fromISO(item.date)) {
         first = DateTime.fromISO(item.date)
       }
     })
     const diff = Interval.fromDateTimes(first, DateTime.now())
     return Math.floor(diff.length('days'))
   }
 },
 mounted() {
   this.getData()
 },
 methods: {
   async getData() {
     this.isStart = true
     getDataFromApi()
       .then((response) => {
         this.apiData = response
         this.refreshTime = DateTime.now()
       })
       .finally(() => {
         this.isStart = false
       })
   }
 }
}
</script>

<style lang="scss">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}

.cursor-pointer {
 cursor: pointer;
}
</style>
