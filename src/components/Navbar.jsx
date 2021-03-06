import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons"

//styled components use on any page
const Container = styled.div`
    height: 60 px;
    `;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;
//each section is one flex unit
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `
const Input = styled.input`
border:none;
`;

const Center = styled.div`
flex:1`;
const Right = styled.div`
flex:1`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
