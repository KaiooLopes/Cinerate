import styled from "styled-components";

import { desktop, tablet } from "../../assets/mobileFirst";

export const Container = styled.nav`
  @media (min-width: ${tablet}px) {
    justify-content: space-around;
    flex-direction: row;
    height: 115px;
  }
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 0 15px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.optionE};
  a {
    width: 200px;
    font-size: 45px;
    margin-left: 20px;
    font-family: "metropolis";
    color: #f3e62d;
    transition: text-shadow 0.4s;
    letter-spacing: 4px;
    text-shadow: 0 0 10px #f0ec29, 0 0 20px #f0ec29, 0 0 40px #f0ec29;

    &:hover {
      text-shadow: 0 0 10px #f0ec29, 0 0 20px #f0ec29, 0 0 40px #f0ec29,
        0 0 60px #f0ec29;
    }
  }

  div {
    width: 200px;
  }

  form {
    display: flex;
    align-items: center;
    position: relative;
    width: 220px;

    input {
      width: 100%;
      padding: 7px 4px;
      font-size: 1.2em;
      border: none;
      border-radius: 10px;
      color: #363636;
      background-color: #f1f1f1;
      &:focus {
        outline: none;
      }
    }

    button {
      color: black;
      padding: 10px 14px;
      margin-left: 1em;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      background-color: #f0ec29;
      transition: background-color 0.4s;

      &:hover {
        background-color: #9b991c;
      }
    }
  }
`;
export const SwitchTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    cursor: pointer;
    height: 35px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.optionA};
    position: relative;
    svg {
      color: ${(props) => props.theme.body};
      margin: 0 10px;
      font-size: 15px;
      font-weight: bold;
    }

    span {
      position: absolute;
      transition: 0.4s;
      display: block;
      width: 30px;
      height: 30px;
      right: 2px;
      transform: ${(props) =>
        props.theme.darkMode ? "translateX(-46px)" : ""};
      background-color: ${(props) => props.theme.body};
      border-radius: 50%;
    }
  }
`;
