import styled from 'styled-components'

const BoldFont = styled.div`
    font-family:'GoogleSansBold';
    font-size:${props => props.size ? props.size : "24px"};
    color:${props => props.color ? props.color : "#000"};
`;
const RegularFont = styled.div`
    font-family:'GoogleSansReg';
    font-size:${props => props.size ? props.size : "24px"};
    color:${props => props.color ? props.color : "#000"};
`;
const ExtraBoldFont = styled.div`
    font-family:'GilroyExtraBold';
    font-size:${props => props.size ? props.size : "24px"};
    color:${props => props.color ? props.color : "#000"};
`;
const Dashboard = styled.div`
    width:80%;
    height:90%;
    background:#F8F9FF;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.03);
`;
const RightDiv = styled.div`
    width:100%;
    height:100%;
    padding:10px;
    box-sizing:border-box;
`;
const Cards = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:24px;
    border-radius:8px;
    background:#fff;
    box-shadow: 5px 0px 24px rgba(0,0,0,0.03);
`;

const Box = styled.div`
    background:#fff;
    border-radius:8px;
    height:97%;
    padding:18px;
    box-sizing:border-box;
    display:grid;
`;

const Label = styled.div`
    box-sizing:border-box;
    font-family:${props => props.fontFamily ? props.fontFamily : "GoogleSansBold"};
    font-size:${props => props.size ? props.size : "16px"};
    color:${props => props.color ? props.color : "#000"};
`;
export { BoldFont, RegularFont, ExtraBoldFont, Dashboard, RightDiv, Cards, Box, Label }