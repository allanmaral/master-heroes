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
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
    width: 100%;
    max-width: 600px;
    font-size: 20px;
    text-align: center;
  }
`;

export const LinkButton = styled(Link)`
  width: 200px;
  height: 60px;
  margin-top: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 0px 13px 0px rgba(224, 224, 224, 1);

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
