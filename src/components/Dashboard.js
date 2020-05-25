import styled from 'styled-components'
import React from 'react'
import Header from './Header';
import { CardsRow } from './StyledJSX';
import { Label, Box } from './UiComponents';
import Graph from './Graph';
import RecentTransactions from './RecentTransactions';

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(6,1fr);
    grid-template-rows:repeat(10,1fr);
    gap:10px;
    height:100%;
    width:100%;
`;

const GraphContainer = styled.div`
    background:#fff;
    border-radius:8px;
    height:97%;
    padding:18px;
    box-sizing:border-box;
`;

function DashboardContainer() {
    return (
        <Container>
            <Header />
            <CardsRow />
            <div className="graph">
                <Label >Overview</Label>
                <GraphContainer>
                    <Graph />
                </GraphContainer>
            </div>
            <div className="transaction">
                <Label >Recent Transactions</Label>
                <Box>
                    <RecentTransactions />
                </Box>
            </div>
        </Container>
    )
}

export { DashboardContainer }