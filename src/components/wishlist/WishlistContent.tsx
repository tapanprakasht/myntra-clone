import { selectWishlistItems } from '../../reducers/wishlistSlice';
import { useAppSelector } from '../../store/hooks';
import { StyledWishlistContent } from '../styles/wishlist/WishlistContent.styled';
import WishlistItem from './WishlistItem';

function WishlistContent() {
    const selectWishlsitItems = useAppSelector(selectWishlistItems);

    return (
        <StyledWishlistContent>
            {selectWishlsitItems.map(id => {
                return <WishlistItem key={id} id={id}/>
            })}
        </StyledWishlistContent>
    )
}

export default WishlistContent
