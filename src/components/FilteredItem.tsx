import { StyledFilteredItem } from './styles/FilteredItem.styled';
import { AppliedFilterItem, removeFilter } from '../reducers/filter/filterSlice';
import { FilterType } from './FilterSection';
import { useAppDispatch } from '../store/hooks';

interface FilteredItemProps {
    item: AppliedFilterItem
}

function FilteredItem(props: FilteredItemProps) {
    const { item } = props;
    const dispatch = useAppDispatch();

    const removeFilteredItem = (id: number, type: FilterType) => {
        dispatch(removeFilter({ id, type }))
    }
    return (
        <StyledFilteredItem>
            {item.name}
            <span onClick={() => removeFilteredItem(item.id, item.type)}>
                X
            </span>
        </StyledFilteredItem>
    )
}

export default FilteredItem
