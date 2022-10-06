import { Navbar } from 'components';
import { Player } from 'features/player';
import { ContainerStyled } from './MainLayout.styled';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ContainerStyled>
        {children}
      </ContainerStyled>
      <Player />
    </>
  );
};