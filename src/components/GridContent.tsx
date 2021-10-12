import GridItem from './GridItem';
import { listItems } from '../datasource/ListItem';
import { StyledGridContent } from './styles/GridContent.styled';
import { ListItem } from '../datasource/interfaces/ListItem';

function GridContent() {
    return (
        <StyledGridContent>
            {
                listItems.map((item: ListItem) => {
                    return <GridItem key={item.id} item={item}/>
                })
            }
        </StyledGridContent>
    )
}

export default GridContent
