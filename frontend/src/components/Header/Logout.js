import React from 'react';
import styled from 'styled-components';
import { background } from '../../stylesheet/vars';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import logoutImg from '../../assets/icons/Header/icon-logout.svg';

const Logout = () => {
  return (
    <>
      <ButtonLogout>
        Выйти
        <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
      </ButtonLogout>

      {/* <Mobile>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Mobile>

      <Tablet>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Tablet>

      <Desktop>
        <ButtonWrapper>
          <ButtonLogout>
            Выйти
            <LogoutImg src={logoutImg} alt={'Logout img'}></LogoutImg>
          </ButtonLogout>
        </ButtonWrapper>
      </Desktop> */}
    </>
  );
};

export default Logout;

// const ButtonWrapper = styled.div`
//   display: flex;
//   position: relative;
//   justify-content: flex-end;
//   margin: 0 auto;
//   padding-top: 16px;

//   @media ${device.tablet} {
//   }

//   @media ${device.desktop} {
//   }
// `;

const ButtonLogout = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 16px;
  background: ${background.logout};
  border: none;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const LogoutImg = styled.img`
  margin-left: 14px;
`;
