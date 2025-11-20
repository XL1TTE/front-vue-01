<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {computed } from 'vue'
import type {Transaction} from '../../Transaction/Transaction'

interface $props{
    transaction: Transaction
}

const {transaction} = defineProps<$props>();

const {t} = useI18n();

const emit = defineEmits({
    onRemove: (id:number) => true
})

const typeLocalized = computed<string>(() => {
    switch(transaction.m_type){
        case 'income':
            return t('common.income-word')
        case 'expense':
            return t('common.expense-word')
    }
});
    
const amountEvaluated = computed<number>(() => {
    return transaction.m_type == 'income' 
        ? +transaction.m_amount : -transaction.m_amount;
});

const onRemove = (itemId:number) =>{
    emit('onRemove', itemId);
}

</script>

<template>
    <tr class="border-b">
        <td class="p-2">{{transaction.m_title}}</td>
        <td class="p-2 text-green-600 font-medium">{{typeLocalized}}</td>
        <td class="p-2">{{amountEvaluated}}</td>
        <td @click="onRemove(transaction.m_id)" class="p-2 text-sm text-red-500 cursor-pointer">{{ $t('common.delete-word') }}</td>
    </tr>
</template>
