import { useState } from 'react';
import { ListItem } from '../datasource/interfaces/ListItem';
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
    const [showBack, setShowBack] = useState<boolean>(false);
    const onHover = () => {
        setShowBack(true);
    }

    const onMouseOut = () => {
        setShowBack(false);
    }

    return (
        <StyledGridItem onMouseOver={onHover} onMouseOut={onMouseOut}>
            <img src={`./shopping-item/item${props.item.id}.png`} alt="" />
            <GridItemFront>
                <div>{props.item.title}</div>
                <div>{props.item.subtitle}</div>
                <PriceSection>
                    <span>{props.item.price}</span>
                    <span>{props.item.originalPrice}</span>
                    <span>({props.item.offer})</span>
                </PriceSection>
            </GridItemFront>
            <GridItemBack show={showBack}>
                <WishList>
                    <img src='./assets/wishlist.png' alt="" />
                    <span>WISHLIST</span>
                </WishList>
                <div>Sizes: X, M, S, XL</div>
            </GridItemBack>
        </StyledGridItem>
    )
}

export default GridItem
