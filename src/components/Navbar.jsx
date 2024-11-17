import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const Nav = styled.nav`
        .navbar-list{
            display: flex;
            gap: 4.9rem;

            li{
                list-style: none;
                
                .navbar-link{
                    color: #fff;
                    &:link,
                    &visited {
                        display: inline-block;
                        text-decoration: none;
                        font-size: 1.6rem;
                        font-weight: 550;
                        text-transform: uppercase;
                        color: ${({theme}) => theme.colors.black};
                        transition: color 0.3s linear;
                    }
                    &:hover,
                    &:active {
                        color: ${({theme}) => theme.colors.helper};
                    }
                }
            }

        }
    `;

  return (
    <Nav>
        <div className='menuIcon'>
            <ul className='navbar-list'>
                <li>
                    <NavLink to="/" className="navbar-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/monuments" className="navbar-link">Monuments</NavLink>
                </li>
                <li>
                    <NavLink to="/things" className="navbar-link">Things to do</NavLink>
                </li>
                <li>
                    <NavLink to="/hotel" className="navbar-link">HOTELS</NavLink>
                </li>

            </ul>
        </div>
      
    </Nav>
  );
};

export default Navbar;