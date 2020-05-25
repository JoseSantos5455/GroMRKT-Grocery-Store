import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    background:linear-gradient(to top right,#fecb02,#fcc101);
    padding:18px 32px;
    margin:0;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const InnerContainer = styled.div`
    width:75%;
    height:85%;
    background:#F0F4F7;
    padding:64px;
    display:grid;
    box-sizing:border-box;
    grid-template-columns:repeat(3,1fr);
    box-shadow: 2px 2px 20px rgba(111, 107, 107, 0.25);

`;

export const BoldFont = styled.div`
    font-family:'GoogleSansBold';
    color:${props => props.color ? props.color : "#000"};
`;

export const CardDetials = styled.div`
    background:linear-gradient(to bottom right,#3b3c43,#333339);
    box-shadow: 2px 2px 20px rgba(111, 107, 107, 0.25);
    padding:24px;
    border-radius:8px;
`;

export const ItemDetails = styled.div`
    padding:24px;
`;

export const CloseButton = styled.div`
    background:none;
    outline:none;
    border:none;
    &:hover{
        cursor: pointer;
        background:#fff;
    }
`;

export const CartItems = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #8d8f97;
    padding:10px 20px;
`;

export const ItemList = styled.div`
    padding: 32px 0;
    margin: 32px 0;
    height: 450px;
    overflow-y:scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #5B6064;
        border: 4px solid transparent;
        background-clip: content-box; 
    }
    ::-webkit-scrollbar-thumb {
        background: #6B7278;
        border: 1px solid #6B7278;
        border-radius:5px;
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Input = styled.input`
    border:none;
    background:none;
    width:100%;
    padding:12px;
    box-sizing:border-box;
    border-bottom: 1px solid #ddd;
    font-family:'GoogleSansBold';
    color:#fff;

`;