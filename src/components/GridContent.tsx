import GridItem from './GridItem';
import { listItems } from '../datasource/ListItem';
import { StyledGridContent } from './styles/GridContent.styled';
import { ListItem } from '../datasource/interfaces/ListItem';
import { useAppSelector } from '../store/hooks';
import { selectAppliedFilters } from '../reducers/filter/filterSlice';
import { FilterType } from './FilterSection';

function GridContent() {
    const appliedFilters = useAppSelector(selectAppliedFilters);
    return (
        <StyledGridContent>
            {
                listItems.map((item: ListItem) => {
                    if (appliedFilters.length !== 0) {
                        const filterdItem =  appliedFilters.map((filter) => {
                            if (filter.type === FilterType.BRAND && filter.name === item.brand) {
                                return <GridItem key={item.id} item={item}/>
                            } return null;
                        });
                        if(filterdItem.length !== 0) {
                            return filterdItem;
                        } else {
                            return null;
                        }
                    } else {
                        return <GridItem key={item.id} item={item}/>
                    }
                })
            }
        </StyledGridContent>
    )
}

export default GridContent
