import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #495057;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.h4`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 1rem;
`;
export const S = {
  Container,
  Message,
  Button,
  Title,
  Subtitle,
  Image,
};
