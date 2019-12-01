import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 50%;

  img {
    border-radius: 8px;
    height: 75%;
  }
`;

export const ButtonBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  padding: 0 30px;
`;

export const Button = styled.button`
  flex: 1;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  height: 100px;
  background: #2f6dae;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 30, 1);

  &:hover {
    background: #2c9ca6;
  }
`;

export default {};
