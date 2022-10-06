import { Navbar } from 'components';
import { Player } from 'features/player';
import { ContainerStyled } from './MainLayout.styled';
import Image from "next/image";

import image from "../../images/20220918003718_1.jpg";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
        <Image src={image} alt=' ' width={100} height={100} />
      <ContainerStyled>
        {children}
      </ContainerStyled>
      <Player />
    </>
  );
};