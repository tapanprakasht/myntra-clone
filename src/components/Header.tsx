import {
  StyledHeader,
  Logo,
  HeaderMainContent,
  HeaderNav,
  Search,
  HeaderOptions,
} from "./styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Logo src="./assets/logo.png" alt="" />
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
          <img src="./assets/profile.png" alt="" />
          <div>Profile</div>
        </div>
        <div>
          <img src="./assets/wishlist.png" alt="" />
          <div>Wishlist</div>
        </div>
        <div>
          <img src="./assets/bag.png" alt="" />
          <div>Bag</div>
        </div>
      </HeaderOptions>
    </StyledHeader>
  );
}

export default Header;
