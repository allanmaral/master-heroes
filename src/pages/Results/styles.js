import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 70px;
  margin: 10px;
  padding: 10px;
  background: #223;
  border-radius: 8px;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 30, 1);

  img,
  svg {
    margin: 0 5px;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    span {
      text-align: center;
    }

    strong {
      text-align: center;
    }
  }
`;

export const LinkButton = styled(Link)`
  width: 200px;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 0px 13px 0px rgba(224, 224, 224, 1);
  margin-top: 30px;

  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  img,
  svg {
    margin-right: 10px;
  }
`;

export default {};
