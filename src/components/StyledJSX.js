import React from 'react'
import { ExtraBoldFont, RegularFont, Cards, Label } from './UiComponents'
import { AddTab } from './SideNav'
import styled from 'styled-components'

const Row = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
`;
function CardContainer({ icon, title, value }) {
    return (
        <Cards>
            <div style={{ marginRight: '18px' }}>
                <RegularFont size="16px" color="#d0d0d0">{title}</RegularFont>
                <ExtraBoldFont size="26px">$ {value}</ExtraBoldFont>
            </div>
            <AddTab>
                {icon}
            </AddTab>
        </Cards>
    )
}

function CardsRow() {
    return (
        <div className="label1">
            <Label>Quick Statistics</Label>
            <Row>
                <CardContainer
                    icon={<svg viewBox="0 0 64 64" height="24" width="24" aria-labelledby="title">
                        <path data-name="layer1"
                            d="M28.8 19.5a21.1 21.1 0 0 0-7.1 2.2c-7.9 4.2-9.2 11-9.2 16.3s2.3 13.1 10.8 20h7.3v-4l8.9.5a20.1 20.1 0 0 0 2.3 3.5h6.7v-6a47.9 47.9 0 0 0 6-5c2.9.3 5.9-2 7-8.7 0-1-.5-1.3-1-1.3a6.8 6.8 0 0 1-3-1c-.4-.5-1.6-4.7-3.8-8a11.7 11.7 0 0 1 4.1-5.2c-2.8-1.4-5.7-2.4-11.4-1.8-1.5-.3-4-.9-6.4-1.3"
                            fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                            strokeLinecap="round"></path>
                        <circle data-name="layer2" cx="34.5" cy="14" r="8" fill="none"
                            stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                            strokeLinecap="round"></circle>
                        <path data-name="layer1" d="M12.5 38c-2.9-.3-10-1.4-10 2s1.9 3.4 3.8 2.6 4.3-5.5-3.8-8.6m25.7-8.9a20.1 20.1 0 0 1 12.7-.1"
                            fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                            strokeLinecap="round"></path>
                        <circle data-name="layer1" cx="48.5" cy="34" r="1" fill="none"
                            stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                            strokeLinecap="round"></circle>
                    </svg>}
                    title="Total amount Income"
                    value="2000"
                />
                <CardContainer
                    icon={
                        <svg viewBox="0 0 64 64" height="24" width="24" aria-labelledby="title">
                            <path data-name="layer2"
                                d="M58 43a3.9 3.9 0 0 1-4 3H25a3 3 0 0 1-3-3l4-22a3.9 3.9 0 0 1 4-3h29a3 3 0 0 1 3 3z"
                                fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                                strokeLinecap="round"></path>
                            <path data-name="layer1" fill="none" stroke="#fff" strokeMiterlimit="10"
                                strokeWidth="4" d="M2 22h16M6 30h10m-6 8h4" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    }
                    title="Total amount Expense"
                    value="1500"
                />
                <CardContainer
                    icon={
                        <svg viewBox="0 0 64 64" height="24" width="24" aria-labelledby="title">
                            <path data-name="layer1"
                                fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" d="M51.7 15L48 5 20.5 15"
                                strokeLinejoin="round" strokeLinecap="round"></path>
                            <path data-name="layer2" d="M58 43v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h50a3 3 0 0 1 3 3v13"
                                fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round"
                                strokeLinecap="round"></path>
                            <rect data-name="layer1" x="42" y="31" width="20" height="12" rx="2"
                                ry="2" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4"
                                strokeLinejoin="round" strokeLinecap="round"></rect>
                            <path data-name="layer2" fill="none" stroke="#fff" strokeMiterlimit="10"
                                strokeWidth="4" d="M12 21h2m8 0h2m8 0h2m8 0h2M16 53h2m8 0h2m8 0h2m8 0h2"
                                strokeLinejoin="round" strokeLinecap="round"></path>
                            <circle data-name="layer1" cx="49" cy="37" r="1" fill="none" stroke="#fff"
                                strokeMiterlimit="10" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"></circle>
                        </svg>
                    }
                    title="Total Balance"
                    value="500"
                />
            </Row>
        </div>
    )
}
export { CardsRow }
