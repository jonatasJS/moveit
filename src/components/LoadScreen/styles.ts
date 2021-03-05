import styled from 'styled-components';

export const Container = styled.div`

  .loading {
    display: flex;
    position: absolute;
    width: 64px;
    height: 64px;

    div {
      position: absolute;
      background: ${({ theme }) => theme.colors.purple};
      opacity: 1;
      border-radius: 50%;
      animation: loading 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
      animation-delay: -.7s;
    }

    @keyframes loading {
      0% {
        top: 28px;
        left: 28px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: -1px;
        left: -1px;
        width: 58px;
        height: 58px;
        opacity: 0;
      }
    }
  }

`;
