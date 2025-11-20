<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {computed } from 'vue'
import type {Transaction} from '../../Transaction/Transaction'


const model_transaction = defineModel<Transaction>('transaction', {required: true})

const {t} = useI18n();

const emit = defineEmits<{
    onRemove: [id: number],
}>()

const typeLocalized = computed<string>(() => {
    switch(model_transaction.value.m_type){
        case 'income':
            return t('common.income-word')
        case 'expense':
            return t('common.expense-word')
    }
});
    
const amountEvaluated = computed<number>(() => {
    return model_transaction.value.m_type == 'income' 
        ? +model_transaction.value.m_amount : -model_transaction.value.m_amount;
});

const onRemove = (itemId:number) =>{
    emit('onRemove', itemId);
}

</script>

<template>
    <tr class="border-b">
        <td class="p-2">{{model_transaction.m_title}}</td>
        <td class="p-2 text-green-600 font-medium">{{typeLocalized}}</td>
        <td class="p-2">{{amountEvaluated}}</td>
        <td @click="onRemove(model_transaction.m_id)" class="p-2 text-sm text-red-500 cursor-pointer">{{ $t('common.delete-word') }}</td>
    </tr>
</template>
