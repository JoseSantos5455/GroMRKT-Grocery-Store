import React, { useState } from 'react'
import styled from 'styled-components'
import { BoldFont, ExtraBoldFont, RegularFont } from './UiComponents'
import girl from '../images/girl-ills.svg'
import './SideNav.css'

const Nav = styled.div`
    height:100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:24px;
    background:#fff;
    box-shadow: 5px 0px 24px rgba(0,0,0,0.03);
`

const AddTab = styled.div`
    background:linear-gradient(45deg,#FF4581,#FF4D63);
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding:18px;
    color:#fff;
    border-radius:4px;
    box-shadow: 5px 0px 24px rgba(0,0,0,0.03);
`;

const Button = styled.button`
    box-sizing:border-box;
    padding:10px;
    background:#fff;
    border-radius:2px;
    border:none;
    outline:none;
    margin:15px 0;
    transition:transform 80ms ease-in;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform:scale(0.9);
    }
`;
const Logo = styled.div`
    font-family:'GilroyLight';
    font-size:20px;
    display:flex;
    flex-direction:row;
`;
const NavItem = styled.button`
    box-sizing:border-box;
    padding:10px;
    border:none;
    outline:none;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    width:inherit;
    background:none;
    &:hover{
        cursor: pointer;
    }
`;

function SideNav() {
    const [state, setstate] = useState({ dash: true, trans: false, stats: false })
    return (
        <Nav>
            <Logo>EXPEN$E<ExtraBoldFont size="20px"> MANAGER</ExtraBoldFont></Logo>

            <div className="nav-container">
                <NavItem
                    onClick={() => setstate({ dash: true, trans: false, stats: false })}
                    className={state.dash ? "active" : "in-active"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <BoldFont size="18px" color={state.dash ? "#000" : "#e0e0e0"}>Dashboard</BoldFont>
                </NavItem>
                <NavItem
                    onClick={() => setstate({ dash: false, trans: true, stats: false })}
                    className={state.trans ? "active" : "in-active"}>
                    <svg viewBox="0 0 22 22">
                        <g id="maximize-2" transform="translate(-0.55 -0.55)">
                            <path id="Path_1" data-name="Path 1" d="M0,0H6V6" transform="translate(16.308 3.257) rotate(45)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path id="Path_2" data-name="Path 2" d="M6,6H0V0" transform="translate(6.793 11.358) rotate(45)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <line id="Line_1" data-name="Line 1" x1="7" y2="7" transform="translate(15.601 2.55) rotate(45)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <line id="Line_2" data-name="Line 2" y1="7" x2="7" transform="translate(7.5 10.651) rotate(45)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                    </svg>
                    <BoldFont size="18px" color={state.trans ? "#000" : "#e0e0e0"}>Tranasctions</BoldFont>
                </NavItem>
                <NavItem
                    onClick={() => setstate({ dash: false, trans: false, stats: true })}
                    className={state.stats ? "active" : "in-active"}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                    <BoldFont size="18px" color={state.stats ? "#000" : "#e0e0e0"}>Statistics</BoldFont>
                </NavItem>

            </div>

            <AddTab>
                <ExtraBoldFont color="#fff" size="18px">Add tranasctions</ExtraBoldFont>
                <RegularFont size="14px" color="#fff">Have a new tranasction ?</RegularFont>
                <RegularFont size="14px" color="#fff">Add Here</RegularFont>
                <Button><BoldFont color="#121212" size="14px">Add here</BoldFont></Button>
                <img src={girl} alt="girl" width={"160px"} />
            </AddTab>
        </Nav>
    )
}

export { SideNav, AddTab }
