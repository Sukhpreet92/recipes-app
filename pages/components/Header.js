import styled from "styled-components";
export default function Header() {
  return (
    <>
      <ContainerHeader>header</ContainerHeader>
    </>
  );
}

const ContainerHeader = styled.h1`
  position: sticky !important;
  text-align: center;
  z-index: 20;
  top: ;
  left: 0;
  width: 100%;
  margin-top: 0em !important;
  margin-block-end: 0.67em;
  background: yellow;
  border-top: 1px solid black;
`;
