import {AppBar, Toolbar, styled} from '@mui/material';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
    align-items: flex-end;
`;
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
    align-items: flex-end;

`;



const NavBar = () => {
    return (
        
       <Header position='static'>
        <Toolbar>
            <Tabs to='/'>Welcome</Tabs>
            <Tabs to='/home'>Home</Tabs>
            <Tabs to='/login'>Login</Tabs>
            <Tabs to='add'>Add/Register User</Tabs>
        </Toolbar>
       </Header>
    )
}

export default NavBar;