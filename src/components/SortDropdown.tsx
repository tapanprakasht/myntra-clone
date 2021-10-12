import { useState } from 'react';
import {
    StyledSortDropdown,
    DropdownIcon,
    SortExtendedList,
    ListItem }
from './styles/SortDropdown.styled';

interface SortValue {
    id: number;
    value: string;
}

const sortValues: SortValue[] = [
    {
        id: 1,
        value: 'Recommended'
    },
    {
        id: 2,
        value: 'What\'s New'
    },
    {
        id: 3,
        value: 'Popularity'
    },
    {
        id: 4,
        value: 'Better Discount'
    },
    {
        id: 5,
        value: 'Price: Low to High'
    },
    {
        id: 6,
        value: 'Price: High to Low'
    },
    {
        id: 7,
        value: 'Customer rating'
    },
]

function SortDropdown() {
    const [showExtendedList, setShowExtendedList] = useState<boolean>(false);
    const [selectSortValue, setSelectedSortValue] = useState<SortValue>(sortValues[0]);
    const handleOnClick = (selectedSortValue: SortValue) => {
        setSelectedSortValue(selectedSortValue);
    }

    const onHover = () => {
        setShowExtendedList(true);
    }

    const onMouseOut = () => {
        setShowExtendedList(false);
    }

    return (
        <StyledSortDropdown onMouseOver={onHover} onMouseOut={onMouseOut}>
            <span>Sort by : </span>
            <span>{selectSortValue.value}</span>
            <DropdownIcon src='./assets/down_arrow.png' alt=''/>
            <SortExtendedList show={showExtendedList}>
                {
                    sortValues.map((sortValue, index) => {
                        if(index === 0) return '';
                        return <ListItem isSelected={sortValue.id === selectSortValue.id}
                                         key={sortValue.id}
                                         onClick={() => handleOnClick(sortValue)}>
                                    {sortValue.value}
                                </ListItem>
                    })
                }
            </SortExtendedList>
        </StyledSortDropdown>
    )
}

export default SortDropdown
