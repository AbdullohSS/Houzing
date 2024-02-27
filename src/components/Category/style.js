import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1440px;
  padding: 96px 130px;
  position: relative;
`;

const Content = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  row-gap: 8px;
`;

export { Container, Content };
