import FilteredItem from './FilteredItem';
import SortDropdown from './SortDropdown';
import { selectAppliedFilters, AppliedFilterItem } from '../reducers/filter/filterSlice';
import { useSelector } from 'react-redux';

import {
    StyledFilterPanel,
    FilteredItemSection }
from './styles/FilterPanel.styled';

function FilterPanel() {
    const appliedFilters = useSelector(selectAppliedFilters);
    return (
        <StyledFilterPanel>
            <SortDropdown/>
            {
                appliedFilters.length !== 0 &&
                <FilteredItemSection>
                {
                    appliedFilters.map((filter: AppliedFilterItem) => {
                        return <FilteredItem key={`${filter.id}-${filter.type}`} item={filter} />
                    })
                }
                </FilteredItemSection>
            }
        </StyledFilterPanel>
    )
}

export default FilterPanel
