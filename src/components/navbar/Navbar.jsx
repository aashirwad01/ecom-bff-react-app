import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { LinkTextNav } from '../linkTextNav';
import { Menu } from './Menu';




// import Button from '../../common/components/button/Button';
// import { Menu } from './menuWrapper';

// import { useMediaQuery } from '../../common/hooks/useMediaQuery';
// import { NavMenuMobile } from './navMenuMobile';


const NavLayout = styled.div((props) => ({
  display: 'flex',
  width: '100%',
  height: '15vh',
  justifyContent: 'center',
  alignItems: 'center',
  background:`url(${props.background})`,
  backgroundColor: props.backgroundColor?props.backgroundColor:'' ,
}));

const NavWrapper = styled.div((props) => ({
  display: 'flex',
  padding: '0',
  width: '95%',
  height: '100%',
  justifyContent:  'flex-start',
  gap:'40px'
}));

const LogoWrapper = styled.div((props) => ({
  display: 'flex',
  flexBasis:'10%',
  height: '100%',
  alignItems: 'center',
 

  [`@media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px)`]:
    {
      flexBasis: '65%',
    },
}));

//     xs:0,
//     sm:600,
//     md:900,
//     lg:1200,
//     xl:1536

const Navbar = ({ background, backgroundColor ,handleCoursesScrollClick,color,setProducts }) => {
//   const isMobile = useMediaQuery(breakpoints.xs, breakpoints.sm);
//   const isLaptop = useMediaQuery(breakpoints.lg);

  return (
    <NavLayout background={background} backgroundColor={backgroundColor}>
      <NavWrapper>
      
        <LogoWrapper>
        <a href='/' >
          <img style={{  cursor:'pointer',}} src='/icecreamlogo.png' width='260px' height='52px' />
          </a>
        </LogoWrapper>
       <Menu   setProducts={setProducts} color={color}/>
       
      </NavWrapper>
    </NavLayout>
  );
};

export default Navbar;
