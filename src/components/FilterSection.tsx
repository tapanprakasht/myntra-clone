import Filter from './Filter';
import { brandList } from '../datasource/Filters';
import { priceList } from '../datasource/Filters';
import { colorList } from '../datasource/Filters';

import { StyledFilterSection, StyledFilterSeperator, FilterHeader } from './styles/FilterSection.styled';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearAllFilter, selectAppliedFilters } from '../reducers/filter/filterSlice';

export enum FilterType {
    BRAND,
    PRICE,
    COLOR
}

const FilterSeperator = () => {
    return(
        <StyledFilterSeperator><div></div>
        </StyledFilterSeperator>
    )
}

function FilterSection() {
    const dispatch = useAppDispatch();
    const appliedFilters = useAppSelector(selectAppliedFilters);

    const handleClearAll = () => {
        dispatch(clearAllFilter());
    }

    return (
        <StyledFilterSection>
            <FilterHeader>
                <div>FILTERS</div>
                {appliedFilters.length !== 0 && <span onClick={handleClearAll}>CLEAR ALL</span> }
            </FilterHeader>
            <Filter title='BRAND' type={FilterType.BRAND} filterItems={brandList} searchPlaceHolder='Search for Brand'/>
            <FilterSeperator/>
            <Filter title='PRICE' type={FilterType.PRICE} filterItems={priceList} searchPlaceHolder='Search for Price'/>
            <FilterSeperator/>
            <Filter title='COLOR' type={FilterType.COLOR} filterItems={colorList} searchPlaceHolder='Search for Color'/>
        </StyledFilterSection>
    )
}

export default FilterSection
