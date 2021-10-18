import { selectWishlistItems } from '../../reducers/wishlistSlice';
import { useAppSelector } from '../../store/hooks';
import { StyledWishlistHeader } from '../styles/wishlist/WishlistHeader.styled';

function WishlistHeader() {
    const selectWishlist = useAppSelector(selectWishlistItems);

    return (
        <StyledWishlistHeader>
            <span>My Wishlist</span>
            <span>{selectWishlist.length} items</span>
        </StyledWishlistHeader>
    );
}

export default WishlistHeader
