import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(116.82deg, #FF71A2 0%, #FFC682 100%);

  @media screen and (max-width: 480px) {
    background: linear-gradient(116.82deg, #FF71A2 0%, #FFC682 100%), #FFFFFF;
  }
`;

export const LoginBackground = styled.form`
  position: absolute;
  width: 460px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 10px 10px 2px rgba(51, 51, 51, 0.1);
  border-radius: 10px;
  padding: 0 0 77px 0;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    position: fixed;
    width: 90%;
    height: auto;
    padding: 0;
    background: none;
    box-shadow: none;
  }
`;

export const LoginLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    position: absolute;
    bottom: 190px;
  }
`;

export const LoginHeader = styled.h2`
  width: 259px;
  height: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 15px;
  color: #000000;

  @media screen and (max-width: 480px) {
    width: 299px;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
  }

`;

export const ErrorList = styled.ul`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 15px;
  color: #000000;
  li{
    text-align: center;
  }
  li:first-child{
    font-weight: 500;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 480px) {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-top: 15px;

    li:first-child{
      font-weight: 500;
      margin-bottom: 7px;
    }
    
  }
`;

export const FormInput = styled.input`
  width: 300px;
  height: 50px;
  background: #F8F5F5;
  border-radius: 10px;
  border: none;
  margin-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.6);
  padding-left:25px;

  &:focus{
    outline: none;
  }

  &::placeholder{
    font-weight: normal;
  }

  @media screen and (max-width: 480px) {

    &:focus{
      box-shadow: 0px 4px 3px 0px rgb(51 51 51 / 40%);
      background: #FFFFFF;
    }
  }
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  background: #FF5B90;
  border: none;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  cursor: pointer;

  &:focus{
      outline: none;
  }
`;