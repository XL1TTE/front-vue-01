
<script setup lang="ts">
import type {Transaction} from '../Transaction/Transaction'
import type {Summary} from './Summary'

import BudgetSummary from './BudgetSummary.vue'
import TableItem from './Items/Item.vue'
import { computed } from 'vue'

interface $props{
  transactions: Transaction[]
}

const {transactions} = defineProps<$props>();

const summary = computed<Summary>(() => {
  
  const incomes = transactions.filter((t) => t.m_type == 'income').reduce((sum, x) => sum + x.m_amount, 0);
  const expenses = transactions.filter((t) => t.m_type == 'expense').reduce((sum, x) => sum + x.m_amount, 0);
  const balance = incomes - expenses;
  
  return {
    m_totalIncomes: incomes,
    m_totalExpenses: expenses,
    m_totalBalance: balance 
  }
})

const onItemRemoveHandler = (itemId: number) => {
  const itemIndex = transactions.findIndex((e) => e.m_id == itemId);
  if(itemIndex == -1){return;}
  
  transactions.splice(itemIndex, 1);
}


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
        <TableItem @on-remove="onItemRemoveHandler" :key="item.m_id" v-for="item in transactions" :transaction="item"/>
      </tbody>
    </table>
  </div>

  <BudgetSummary :summary="summary"/>
</template>



