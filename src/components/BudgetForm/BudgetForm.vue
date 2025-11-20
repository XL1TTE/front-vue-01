
<script setup lang="ts">

import { computed, reactive, watchEffect } from "vue";
import type {TransactionForm} from '../Transaction/Transaction'

const emit = defineEmits({
  submit : (payload: TransactionForm) => true,
})

const form = reactive<TransactionForm>({
  title:'',
  amount:0,
  type: 'income' 
});

const form_errors = reactive({
  title_errors: '',
  amount_errors: '',  
})

const isTitleWithErrors = computed(() => Boolean(form_errors.title_errors));
const isAmountWithErrors = computed(() => Boolean(form_errors.amount_errors));


const submitForm = (event:Event):void => {
  if(isFormValid(form)){
    emit('submit', form);
    clearForm();
  }
}

const isFormValid = (form: TransactionForm): boolean => {
  return !isTitleWithErrors.value && !isAmountWithErrors.value; 
}

const validateForm = (form: TransactionForm): boolean =>{
  form_errors.title_errors = '';
  form_errors.amount_errors = '';
  
  let isValid = true;
  
  if (!form.title.trim()) {
    form_errors.title_errors += 'Название обязательно. \n';
    isValid = false;
  } else if (form.title.trim().length < 3) {
    form_errors.title_errors += 'Название должно быть не менее 3 символов. \n';
    isValid = false;
  }
  if (form.amount <= 0) {
    form_errors.amount_errors += 'Сумма должна быть больше 0. \n';
    isValid = false;
  }
  return isValid;
}

const clearForm = () => {
  form.title = '',
  form.amount = 0
}

watchEffect(() => {validateForm(form)})

</script>

<template>
  <div class="bg-white shadow rounded-xl p-4 flex flex-row gap-4">
    <input type="text" v-model="form.title" :placeholder="$t('budget-calculator.transaction-form.title-input.placeholder')" 
    :class="['border p-2 flex-1', isTitleWithErrors ? 'border-red-500': '']" />

    <input type="number" v-model="form.amount" :placeholder="$t('budget-calculator.budget-table.columns.amount')" 
    :class="['border p-2 w-32', isAmountWithErrors ? 'border-red-500': '']" />

    <select v-model="form.type" class="border p-2 w-32">
      <option value="income">{{$t('budget-calculator.transaction-form.type-input.income')}}</option>
      <option value="expense">{{ $t('budget-calculator.transaction-form.type-input.expense') }}</option>
    </select>

    <button @click="submitForm($event)" type="button" class="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
      {{ $t('budget-calculator.transaction-form.submit-button.label') }}
    </button>
  </div>
</template>


