import {
  StyledNavigation,
  NavigationLinks,
  SelectedNavigation,
} from "./styles/Navigation.styled";

function Navigation() {
  return (
    <StyledNavigation>
      <NavigationLinks>
        <a href="/">Home</a>
        <span>/</span>
        <a href="/">Clothing</a>
        <span>/</span>
        <a href="/">Men T-Shirts</a>
      </NavigationLinks>
      <SelectedNavigation>
        <span>Men T-Shirts</span>
        <span>&nbsp;- 57648 items</span>
      </SelectedNavigation>
    </StyledNavigation>
  );
}

export default Navigation;
