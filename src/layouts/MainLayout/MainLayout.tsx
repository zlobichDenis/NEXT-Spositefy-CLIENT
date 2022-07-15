import { Navbar } from "components";
import { Player } from "features/Player";
import { ContainerStyled } from "./MainLayout.styled";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        {children}
      </ContainerStyled>
      <Player active={true}/>
    </>
  )
};