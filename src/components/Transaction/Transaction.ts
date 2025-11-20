
type transactionType = 'income' |'expense';

interface Transaction{
    m_id: number,
    m_title: string,
    m_type: transactionType,
    m_amount: number
}

interface TransactionForm{
    title: string,
    amount: number,
    type: transactionType,
}

export type {Transaction,TransactionForm, transactionType}
