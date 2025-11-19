
<script lang="ts">
import {useI18n} from 'vue-i18n'
import { defineComponent, computed, PropType } from 'vue'
import {Transaction, transactionType} from '../Transaction/Transaction'

export default defineComponent({
    props: {
        transaction:{
            required: true,
            type: Object as PropType<Transaction>            
        }
    },
    setup(props){

        const {t} = useI18n();

        const typeLocalized = computed<string>(() => {
            switch(props.transaction.m_type){
                case 'income':
                    return t('common.income-word')
                case 'expense':
                    return t('common.expense-word')
            }
        });
            
        const amountEvaluated = computed<number>(() => {
            return props.transaction.m_type == 'income' 
                ? +props.transaction.m_amount : -props.transaction.m_amount;
        });
            
        return{
            typeLocalized,
            amountEvaluated
        }
    }
})


</script>

<template>
    <tr class="border-b">
        <td class="p-2">{{transaction.m_title}}</td>
        <td class="p-2 text-green-600 font-medium">{{typeLocalized}}</td>
        <td class="p-2">{{amountEvaluated}}</td>
        <td class="p-2 text-sm text-red-500 cursor-pointer">{{ $t('common.delete-word') }}</td>
    </tr>
</template>
