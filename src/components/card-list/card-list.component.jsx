import styled from "styled-components";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
`;

const CardContainer = styled.div`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;

const CardList = () => {
  return <>Card List</>;
};

export default CardList;
