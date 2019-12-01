import styled from 'styled-components';

export const Container = styled.nav`
  height: 59px;
  width: 100%;
  background: #000;
  color: #fff;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      width: 33%;
      display: flex;
      justify-content: center;
      margin: 0 20px;
    }
  }
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 75px;
  padding: 10px;
  background: hsla(0, 0%, 100%, 0.15);

  span {
    margin-left: 10px;
  }
`;

export const CurrentCard = styled(Score)`
  border-radius: 8px;
`;

export const LeftScore = styled(Score)`
  border-radius: 8px 0 0 8px;
  margin-right: 1px;
`;
export const RightScore = styled(Score)`
  border-radius: 0 8px 8px 0;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

export default {};
