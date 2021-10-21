import { ListItem } from '../../datasource/interfaces/ListItem';
import { StyledModal,ModalContainer, Header, Content, TextSection, SizeSection, SizeItem, SizeContainer, DoneButton } from './Modal.styled';

interface ModalProps {
    data: ListItem;
    closeModal: () => void;
}

function Modal(props: ModalProps) {
    const { data } = props;
    return (
        <StyledModal onClick={props.closeModal}>
            <ModalContainer>
                <Header><span>X</span></Header>
                <Content>
                    <img src={`./shopping-item/item${data.id}.png`} alt="" />
                    <TextSection>
                        <div>{data.title}</div>
                        <div>
                            <span>{data.price}</span>
                            <span>{data.originalPrice}</span>
                            <span>{data.offer}</span>
                        </div>
                    </TextSection>
                </Content>
                <SizeContainer>
                    <div>Select Size</div>
                    <SizeSection>
                        <SizeItem>S</SizeItem>
                        <SizeItem>M</SizeItem>
                        <SizeItem>L</SizeItem>
                        <SizeItem>XL</SizeItem>
                        <SizeItem>XXL</SizeItem>
                    </SizeSection>
                </SizeContainer>
                <DoneButton>Done</DoneButton>
            </ModalContainer>
        </StyledModal>)
}

export default Modal;
