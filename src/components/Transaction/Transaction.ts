
type transactionType = 'income' |'expense';

interface Transaction{
    m_id: number,
    m_title: string,
    m_type: transactionType,
    m_amount: number
}

export type {Transaction, transactionType}
