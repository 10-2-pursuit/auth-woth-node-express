import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  height:100vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SideRail = styled.div`
  width: 30px;
  height: 100%;
  background: #FF5B90;

  @media screen and (max-width: 480px) {
    height: 20px;
    width: 100%;
  }
`;

export const ProfileMain = styled.div`
  width: 100%;
  height:100%;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const WelcomeUser = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 2vh;
  }
`;

export const Logout = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const ProfileNav = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 54px 60px 54px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 4.6vh 0px 6.5vh 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoWrapper = styled.div`
    position:absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-width: 555px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  box-sizing:border-box;

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    transform: none;
    padding: 50px 50px 0 50px ;
    min-width: 0px;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    padding:0;
  }
`;

export const ContactWrapper = styled.div`

  width: 646px;
  height: 97px;
  background: rgba(190, 190, 192, 0.1);
  border-radius: 10px;
  padding: 27px 37px;
  display: flex;
  justify-content: space-between;
  box-sizing:border-box;
  margin-bottom: 8vh;

  @media screen and (max-width: 768px) {
    width:100%;
    height: auto;
    background: none;
    flex-direction: column;
    padding: 0;
    margin:0;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing:border-box;
`;

export const ContactItem = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;

  @media screen and (max-width: 768px) {
    margin-bottom: 3vh;
    text-align:left;
   }
  
`;

export const ContactDescription = styled.span`
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display:table;
    margin-bottom: 1vh;
  }
`;

export const Divider = styled.div`
  @media screen and (max-width: 768px) {
    height:0px;
    border: 1px solid #E5E5E5;
    margin: 0 6vw;
    width: 100%;
  }
`;

export const AboutWrapper = styled.div`
  min-width: 90%;
  @media screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`;

export const AboutHeader = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin-bottom: 10px;
  text-align:left;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 3vh;
  }
`;

export const AboutContent = styled.p`
  max-width: 737px;
  height: 133px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align:left;


`;