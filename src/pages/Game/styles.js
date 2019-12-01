import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  margin: 10px;
  border-radius: 10px;
  background: rgba(9, 12, 47, 1);
  background: linear-gradient(
    135deg,
    rgba(9, 12, 47, 1) 0%,
    rgba(3, 54, 54, 1) 100%
  );
`;

export const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default {};
