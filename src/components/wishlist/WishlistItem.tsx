import { listItems } from "../../datasource/ListItem"
import { ListItem } from "../../datasource/interfaces/ListItem";

import { CloseButton, MoveToBag, StyledWishlistItem } from '../styles/wishlist/WishlistItem.styled';
import { PriceSection } from "./../styles/GridItem.styled";
import { useAppDispatch } from "../../store/hooks";
import { removeWishlistItem } from "../../reducers/wishlistSlice";

interface WishlistItemProps {
    id: string
}

function WishlistItem(props: WishlistItemProps) {
    const dispatch = useAppDispatch();

    const handleRemoveItem = () => {
        dispatch(removeWishlistItem(props.id))
    }

    const currentItem: ListItem = listItems.filter(item => item.id === props.id)[0];
    return (
        <StyledWishlistItem>
            <img src={`./shopping-item/item${props.id}.png`} alt="" />
            <CloseButton onClick={handleRemoveItem}>X</CloseButton>
            <div></div>
            <div>{currentItem.title}</div>
            <PriceSection>
                <span>{currentItem.price}</span>
                <span>{currentItem.originalPrice}</span>
                <span>({currentItem.offer})</span>
            </PriceSection>
            <MoveToBag>
                <span>MOVE TO BAG</span>
            </MoveToBag>
        </StyledWishlistItem>
    )
}

export default WishlistItem
