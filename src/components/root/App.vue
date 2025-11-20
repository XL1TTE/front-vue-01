
<script setup lang="ts">

import {onMounted, ref, watch} from 'vue'
import type {Transaction, TransactionForm} from '../Transaction/Transaction'
import BudgetForm from '../BudgetForm/BudgetForm.vue'
import BudgetTable from '../BudgetTable/BudgetTable.vue'


const TRANSACTIONS_STORAGE_KEY = 'transactions-storage';
const transactionStorage = ref<Transaction[]>([])

  onMounted(() => {
    const json = localStorage.getItem(TRANSACTIONS_STORAGE_KEY);
    if(json !== null){
      try{
        transactionStorage.value = JSON.parse(json);
      } catch(e){
        console.error('Failed to parse saved transactions.')
      }
    }
  });
  
  watch(transactionStorage, (newT) => {
    localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(newT));
  }, {deep: 1})

  
  const onTransactionFormSubmited = (form: TransactionForm):void =>{
    const transaction: Transaction = {
      m_id: Date.now(),
      m_title: form.title,
      m_amount: form.amount,
      m_type: form.type
    };
    transactionStorage.value.push(transaction);
  }

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">{{$t('budget-calculator.title')}}</h1>

    <div class="max-w-3xl mx-auto space-y-8">
      <BudgetForm @submit="(form) => onTransactionFormSubmited(form)"/>
      <BudgetTable v-model:transitions="transactionStorage"/>
    </div>
  </div>
</template>
