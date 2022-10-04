import styled from "styled-components";
export default function Footer() {
  return (
    <>
      <ContainerFooter>Footer</ContainerFooter>
    </>
  );
}

const ContainerFooter = styled.p`
  position: absolut !important;
  text-align: center;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 0em !important;
  margin-block-end: 0.67em;
  background: yellow;
  border-bottom: 1px solid black;
`;
