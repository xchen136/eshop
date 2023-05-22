
import React from 'react'
import './Header.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function Header() {
  const navigate = useNavigate()
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate('/')}>
        <StorefrontIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search"> 
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__itemBasket" onClick={() => navigate('/checkout')}>
          <ShoppingBasketIcon/>
          <span className="nav__itemLineTw nav__basketCount">{ basket.length }</span>
        </div>
      </div>
    </div>
  )
}

export default Header