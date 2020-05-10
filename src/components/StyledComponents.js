import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns:repeat(7,1fr);
    grid-template-rows:repeat(15,auto);
`;

const LeftDiv = styled.div`
    background:#F0F4F7;
    padding:20px 40px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly; 
`;
const LeftBottomDiv = styled.div`
    background:#F0F4F7;
    padding:20px 40px;
`;

const TopRightDiv = styled.div`
    background:#FFF;
    padding:20px 30px;
`;
const BottomRightDiv = styled.div`
    background:#FFF;
    grid-column:3/6;
    grid-row:5/16;
`;
const BoldFont = styled.div`
    font-family:'GoogleSansBold';
    color:${props => props.color ? props.color : "#000"};
`;
const RegularFont = styled.div`
    font-family:'GoogleSansReg';
    color:${props => props.color ? props.color : "#000"};
`;
const ExtraBoldFont = styled.div`
    font-family:'GilroyExtraBold';
    color:${props => props.color ? props.color : "#000"};
`;
const Logo = styled.div`
    font-family:'GilroyLight';
    font-size:${props => props.size ? props.size : "24px"};
    color:${props => props.color ? props.color : "#000"};
    display:flex;
    flex-direction:row;
`;

const InputDiv = styled.div`
    padding:10px;
    display:flex;
    flex-direction:row;
    background:#fff;
    border-radius:50px;
    box-shadow: 2px 2px 10px rgba(111, 107, 107, 0.25);
    margin:36px 0;
`;

const Input = styled.input`
    background:none;
    border:none;
    outline:none;
    padding:18px;
    font-family:'GoogleSansBold';
    font-size:16px;
    width:100%;
`;

const Search = styled.button`
    border:none;
    outline:none;
    font-family:'GoogleSansBold';
    background:#5B6064;
    padding:18px 32px;
    border-radius:50px;
    color:#fff;
    &:hover{
        cursor: pointer;
    }
`;

const CategoryDiv = styled.div`
    background:transparent;
    display:flex;
    justify-content:space-around;
    align-items:center;
    
    grid-column: 1/5;
    grid-row: 4/5;
`;
const Cover = styled.div`
    background:#F0F4F7;
    z-index:-1;
`;


export { Container, LeftDiv, LeftBottomDiv, TopRightDiv, Cover, BottomRightDiv, BoldFont, RegularFont, ExtraBoldFont, Logo, InputDiv, Input, Search, CategoryDiv }