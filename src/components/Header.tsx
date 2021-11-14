import {
  StyledHeader,
  Logo,
  HeaderMainContent,
  HeaderNav,
  Search,
  HeaderOptions,
} from "./styles/Header.styled";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <StyledHeader>
      <Link to='/'><Logo src="./assets/logo.png" alt="" /></Link>
      <HeaderMainContent>
        <HeaderNav>
          <div>MEN</div>
          <div>WOMEN</div>
          <div>KIDS</div>
          <div>HOME &amp; LIVING</div>
          <div>BEAUTY</div>
        </HeaderNav>
        <Search>
          <img src="./assets/search.png" alt="" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </Search>
      </HeaderMainContent>
      <HeaderOptions>
        <div>
          <Link to='/'>
            <img src="./assets/profile.png" alt="" />
            <div>Profile</div>
          </Link>
        </div>
        <div>
          <Link to='/wishlist'>
            <img src="./assets/wishlist.png" alt="" />
            <div>Wishlist</div>
          </Link>
        </div>
        <div>
          <Link to='/'>
            <img src="./assets/bag.png" alt="" />
            <div>Bag</div>
          </Link>
        </div>
      </HeaderOptions>
    </StyledHeader>
  );
}

export default Header;
