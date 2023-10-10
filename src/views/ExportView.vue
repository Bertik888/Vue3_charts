<template>
  <div class="border rounded shadow-sm p-2 pt-0 overflow-auto my-card">
    <table class="table table-striped table-hover">
      <thead class="my-thead">
        <tr>
          <th
            v-for="item in thead"
            :key="item.key"
            scope="col"
            class="cursor-pointer"
            @click="setSorted(item.key)"
          >
            {{ item.name }}
            <i
              v-if="sorted === item.key"
              :class="[ reverseSorted ? 'bi-caret-up-fill' : 'bi-caret-down-fill', 'bi ms-1']"
            ></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in sortedData"
          :key="item.id"
        >
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.path }}</td>
          <td>{{ item.group }}</td>
          <td>{{ item.machine_number }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.sku }}</td>
          <td>{{ item.recipe }}</td>
          <td>{{ item.cup_size }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.summed_dispensings }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExportView',
  props: {
    apiData: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      thead: [
        {
          key: 'name',
          name: 'CustomMachineName'
        },
        {
          key: 'path',
          name: 'Path'
        },
        {
          key: 'group',
          name: 'ProductGroup'
        },
        {
          key: 'machine_number',
          name: 'MachineNumber'
        },
        {
          key: 'date',
          name: 'LocalDate'
        },
        {
          key: 'sku',
          name: 'SKU'
        },
        {
          key: 'recipe',
          name: 'Recipe'
        },
        {
          key: 'cup_size',
          name: 'CupSize'
        },
        {
          key: 'status',
          name: 'Status'
        },
        {
          key: 'summed_dispensings',
          name: 'SummedDispensings'
        },
      ],
      sorted: '',
      reverseSorted: false
    }
  },
  computed: {
    sortedData() {
      const result = [...this.apiData]
      result.sort((x, y) => {
        if (x[this.sorted] < y[this.sorted]) {
          return -1
        }
        if (x[this.sorted] > y[this.sorted]) {
          return 1
        }
        return 0
      })
      return this.reverseSorted ? result.reverse() : result
    }
  },
  methods: {
    setSorted(key) {
      if (key === this.sorted) {
        this.reverseSorted = !this.reverseSorted
      } else {
        this.reverseSorted = false
        this.sorted = key
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-thead{
  position: sticky;
  top: 0;
  background: white;
}

.my-card {
  max-height: calc(100vh - 216px);
}
</style>
