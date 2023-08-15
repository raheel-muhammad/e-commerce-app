import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { mobile } from '../pages/Responsive'
const Container = styled.div`
height:60px;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
flex: 1;
display:flex;
align-items:center;
`
const Centre = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
display:flex;
justify-content:flex-end;
align-items:center;
${mobile({ flex: 2, justifyContent: "center" })}
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border:  0.5px solid lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
text-align:center;
${mobile({ fontSize: "24px" })}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "12px" })}
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Centre>
                    <Logo>MOON.</Logo>
                </Centre>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar