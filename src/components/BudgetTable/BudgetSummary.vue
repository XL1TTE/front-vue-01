<script setup lang="ts">

import type { Summary } from './Summary';


interface $props{
  summary: Summary
}

const props = defineProps<$props>();

</script>

<template>
  <div class="bg-white shadow rounded-xl p-4 text-center">
    <h2 class="text-lg font-semibold mb-3">{{ $t('budget-calculator.budget-table.summary.title') }}</h2>

    <div class="grid grid-cols-3 gap-4">
      <div>
        <p class="text-gray-500">{{ $t('budget-calculator.budget-table.summary.columns.income') }}</p>
        <p class="text-green-600 text-xl font-semibold">{{ props.summary.m_totalIncomes }}</p>
      </div>
      <div>
        <p class="text-gray-500">{{ $t('budget-calculator.budget-table.summary.columns.expenses') }}</p>
        <p class="text-red-600 text-xl font-semibold"> {{ props.summary.m_totalExpenses }} </p>
      </div>
      <div>
        <p class="text-gray-500">{{ $t('budget-calculator.budget-table.summary.columns.balance') }}</p>
        <p class="text-gray-800 text-xl font-semibold">{{ props.summary.m_totalBalance }}</p>
      </div>
    </div>

    <p class="mt-4 text-red-500 font-medium">⚠️ {{ $t('budget-calculator.budget-table.summary.warning') }}</p>
  </div>
</template>
