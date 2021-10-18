import { useState } from 'react';
import { ListItem } from '../datasource/interfaces/ListItem';
import { addWishlistItem, selectWishlistItems } from '../reducers/wishlistSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
    StyledGridItem,
    GridItemFront,
    PriceSection,
    GridItemBack,
    WishList
} from './styles/GridItem.styled';

interface GridItemProps {
    item: ListItem;
}


function GridItem(props: GridItemProps) {
    const dispatch = useAppDispatch();
    const wishlistedItems = useAppSelector(selectWishlistItems);

    const [showBack, setShowBack] = useState<boolean>(false);
    const onHover = () => {
        setShowBack(true);
    }

    const onMouseOut = () => {
        setShowBack(false);
    }

    const handleClickWishlist = (id: string) => {
        if(!wishlistedItems.includes(id)) {
            dispatch(addWishlistItem(id))
        }
    }

    const getWishlistListedComponent = (currentID: string) => {
        if (wishlistedItems.includes(currentID)) {
            return (
                <WishList onClick={() => handleClickWishlist(item.id)} selected={true}>
                    <img src='./assets/wishlisted.png' alt="" />
                    <span>WISHLISTED</span>
                </WishList>
            )
        } else {
            return (
                <WishList onClick={() => handleClickWishlist(item.id)} selected={false}>
                    <img src='./assets/wishlist.png' alt="" />
                    <span>WISHLIST</span>
                </WishList>
            )
        }
    }

    const { item } = props;

    return (
        <StyledGridItem onMouseOver={onHover} onMouseOut={onMouseOut}>
            <img src={`./shopping-item/item${item.id}.png`} alt="" />
            <GridItemFront>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
                <PriceSection>
                    <span>{item.price}</span>
                    <span>{item.originalPrice}</span>
                    <span>({item.offer})</span>
                </PriceSection>
            </GridItemFront>
            <GridItemBack show={showBack}>
                { getWishlistListedComponent(item.id) }
                <div>Sizes: X, M, S, XL</div>
            </GridItemBack>
        </StyledGridItem>
    )
}

export default GridItem
