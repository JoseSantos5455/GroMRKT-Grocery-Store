import React from 'react'
import { Container, LeftDiv, LeftBottomDiv, TopRightDiv, Logo, ExtraBoldFont, InputDiv, Input, Search, Cover } from './StyledComponents'
import Grid from './Grid'
import CategoryBar from './CategoryBar'
import SelectedItem from './SelectedItem'
import { Header, LandingArea } from './Header'

function MarketHome() {
    return (
        <Container>
            <LeftDiv>
                <Logo size="36px" color="#5B6064">
                    GRO
                    <ExtraBoldFont size="36px" color="#5B6064">MRKT</ExtraBoldFont>
                </Logo>
                <InputDiv>
                    <Input placeholder="Search" /><Search>Search</Search>
                </InputDiv>
                <ExtraBoldFont size="46px" color="#5B6064">Categories</ExtraBoldFont>
            </LeftDiv>
            <Cover />
            <LeftBottomDiv>
                <SelectedItem />
            </LeftBottomDiv>
            <CategoryBar />
            <TopRightDiv>
                <Header />
                <LandingArea>
                    <ExtraBoldFont size="40px" className="landing-area-text">
                        Discover amazing fresh supplies and bring the store to your door.
                    </ExtraBoldFont>
                    <img src={require('../images/landing.svg')} alt="landing" className="landing-area-image" />
                </LandingArea>
            </TopRightDiv>

            <Grid />

        </Container>
    )
}

export default MarketHome
