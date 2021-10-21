import styled from "styled-components";

export const StyledToast = styled.div`
    position: fixed;
    top: 0;
    right: 50px;
    width: 270px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1000;
    background: #1e2031;
    animation: slidedown 0.2s ease-in forwards;
    padding: 5px;
    color: white;

    img {
        width: 50px;
        height: 100%;
    }
    div {
        padding: 10px;
    }

    @keyframes slidedown {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            transform: translateY(100px);
            opacity: 1.0;
        }
    }
`