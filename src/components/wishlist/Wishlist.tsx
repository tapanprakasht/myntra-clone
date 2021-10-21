import WishlistEmpty from "./WishlistEmpty"
import WishlistHeader from "./WishlistHeader"
import { StyledWishlist } from '../styles/wishlist/Wishlist.styled';
import WishlistContent from "./WishlistContent";
import { useAppSelector } from "../../store/hooks";
import { selectWishlistItems } from "../../reducers/wishlistSlice";

function Wishlist() {
    const wishlistItems = useAppSelector(selectWishlistItems);
    return (
        wishlistItems.length === 0 ? <WishlistEmpty/> :
            <StyledWishlist>
                <WishlistHeader/>
                <WishlistContent/>
            </StyledWishlist>
    )
}

export default Wishlist
