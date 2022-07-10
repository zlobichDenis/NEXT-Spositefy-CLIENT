import { Navbar } from "components";
import { ContainerStyled } from "./MainLayout.styled";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        {children}
      </ContainerStyled>
    </>
  )
};