import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  h1 {
    color: ${({ theme }) => theme.colors.title};
    margin-top: 10rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.title};
    margin-top: 1rem;
    margin-bottom: 10rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #C9D1D9;
    background: #6E40C9;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;

    :hover {
      background: #5931A9;
    }
  }
`;