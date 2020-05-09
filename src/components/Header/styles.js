import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { Link } from 'react-router-dom';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.header`
  background-color: ${COLORS.black};
  height: 70px;
  box-shadow: 0px 4px 10px ${COLORS.greyDarkAlpha};
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const User = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${COLORS.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Staatliches', cursive;
  color: ${COLORS.black};
  font-size: ${pxToRem(24)};
  text-decoration: none;

`;

export const Title = styled.h1`
  font-size: 0;
  position: absolute;
  left: -999pc;
  top: -999pc;
`;
