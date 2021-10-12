import Filter from './Filter';
import { brandList } from '../datasource/Filters';
import { priceList } from '../datasource/Filters';
import { colorList } from '../datasource/Filters';

import { StyledFilterSection, FilterSeperator } from './styles/FilterSection.styled';

export enum FilterType {
    BRAND,
    PRICE,
    COLOR
}


function FilterSection() {
    return (
        <StyledFilterSection>
            <Filter title='BRAND' type={FilterType.BRAND} filterItems={brandList} searchPlaceHolder='Search for Brand'/>
            <FilterSeperator/>
            <Filter title='PRICE' type={FilterType.PRICE} filterItems={priceList} searchPlaceHolder='Search for Price'/>
            <FilterSeperator/>
            <Filter title='COLOR' type={FilterType.COLOR} filterItems={colorList} searchPlaceHolder='Search for Color'/>
        </StyledFilterSection>
    )
}

export default FilterSection
