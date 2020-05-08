import React from 'react'
import styled from 'styled-components'
import { BoldFont, RegularFont } from './UiComponents';

const TransactionDiv = styled.div`
    border-radius:8px;
    border:1px dashed #d0d0d0; 
    padding:8px;
    box-sizing:border-box;
    display:grid;
    grid-template-columns:1fr 4fr 1fr;
    gap:10px;
`;
const TransactionArea = styled.div`
    display:grid;
    gap:10px;
    box-sizing:border-box;
    width:inherit;
    height:inherit;
`;
const Category = styled.div`
    padding:10px 16px;
    background:#757575;
    border-radius:4px;
`;
function RowTr() {
    return (
        <TransactionDiv>
            <Category>#</Category>
            <div>
                <RegularFont size="16px">Transaction Title</RegularFont>
                <RegularFont size="12px">07 May 2020</RegularFont>
            </div>
            <BoldFont size="18px">$200+</BoldFont>
        </TransactionDiv>
    )
}

function RecentTransactions() {
    return (
        <TransactionArea>
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
            <RowTr />
        </TransactionArea>
    )
}

export default RecentTransactions
