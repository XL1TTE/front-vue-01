
<script lang="ts">

import {useI18n} from 'vue-i18n'
import { defineComponent, ref} from 'vue'
import {Transaction} from '../Transaction/Transaction'
import BudgetForm from '../BudgetForm/BudgetForm.vue'
import BudgetTable from '../BudgetTable/BudgetTable.vue'



export default defineComponent({
  name: 'App',
  components: {BudgetForm, BudgetTable},
  setup() {
    

    const t = useI18n();
    const transactionStorage = ref<Transaction[]>([
      {m_id: 0, m_title: "Зарплата", m_amount: 50000, m_type:'income'},
      {m_id: 1, m_title: "Еда", m_amount: 800, m_type:'expense'},
    ])
    
    return {transactionStorage}
  },
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">{{$t('budget-calculator.title')}}</h1>

    <div class="max-w-3xl mx-auto space-y-8">
      <BudgetForm />
      <BudgetTable :transactions="transactionStorage"/>
    </div>
  </div>
</template>
