import FilteredItem from './FilteredItem';
import SortDropdown from './SortDropdown';
import { selectAppliedFilters } from '../reducers/filter/filterSlice';
import { useSelector } from 'react-redux';
import { AppliedFilterItem } from '../reducers/filter/filterSlice';

import {
    StyledFilterPanel,
    FirstSection,
    SeccondSection }
from './styles/FilterPanel.styled';

function FilterPanel() {
    const appliedFilters = useSelector(selectAppliedFilters);
    return (
        <StyledFilterPanel>
            <FirstSection>FILTERS</FirstSection>
            <SeccondSection>
                {
                    appliedFilters.map((filter: AppliedFilterItem) => {
                        return <FilteredItem key={`${filter.id}-${filter.type}`} item={filter} />
                    })
                }
            </SeccondSection>
            <SortDropdown/>
        </StyledFilterPanel>
    )
}

export default FilterPanel
