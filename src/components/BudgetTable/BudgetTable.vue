
<script lang="ts">
import { defineComponent, PropType} from 'vue'

import BudgetSummary from '../BudgetSummary.vue'
import TableItem from './BudgetTableItem.vue'

import {Transaction} from '../Transaction/Transaction'

export default defineComponent({
  name: "BudgetTable",
  components: {BudgetSummary, TableItem},
  
  props: {
    transactions:{
      required: false,
      type: Array as PropType<Transaction[]>
    }
  }
})
</script>


<template>
  <div class="bg-white shadow rounded-xl p-4">
    <h2 class="text-lg font-semibold mb-3">{{ $t('budget-calculator.budget-table.title') }}</h2>

    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b">
          <th class="p-2">{{$t('budget-calculator.budget-table.columns.title')}}</th>
          <th class="p-2">{{ $t('budget-calculator.budget-table.columns.type') }}</th>
          <th class="p-2">{{ $t('budget-calculator.budget-table.columns.amount') }}</th>
          <th class="p-2">{{ $t('budget-calculator.budget-table.columns.actions') }}</th>
        </tr>
      </thead>
      <tbody >
        <TableItem :key="item.m_id" v-for="item in transactions" :transaction="item"/>
      </tbody>
    </table>
  </div>

  <BudgetSummary />
</template>



