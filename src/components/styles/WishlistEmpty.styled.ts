import styled from "styled-components";

export const StyledWishlistEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > div:first-child {
        font-size: 20px;
        padding-bottom: 30px;
        color: ${({ theme  }) => theme.colors.primary_text_color };
    }
    & > div:nth-child(2) {
        font-size: 17px;
        padding-bottom: 30px;
        color: ${({ theme  }) => theme.colors.third_text_color };
    }

    img {
        height: 150px;
        padding-bottom: 30px;
    }
`

export const Button = styled.div`
    border-radius: 3px;
    border: 1px solid ${({ theme  }) => theme.colors.blue_text_color };;

    a, a:hover, a:focus, a:active {
        display: inline-block;
        padding: 15px 50px;
        text-decoration: none;
        color: ${({ theme  }) => theme.colors.blue_text_color };
    }
`