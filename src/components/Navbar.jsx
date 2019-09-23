import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  top: 0;
  position: fixed;
  background: black;
`;

const Content = styled.span`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 5%;
  z-index: 1;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
  height: 100%;
  li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    background: black;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 1s ease-out;
    clip-path: ${props =>
      props.open ? "circle(200% at 90% -10%)" : "circle(100px at 90% -10%)"};
    -webkit-clip-path: ${props =>
      props.open ? "circle(200% at 90% -10%)" : "circle(100px at 90% -10%)"};
    pointer-events: ${props => (props.open ? "all" : "none")};

    li {
      transition: all 0.25s ease-out;
      opacity: ${props => (props.open ? "1" : "0")};
      a {
        font-size: 25px;
      }
    }
  }
`;

const Hamburger = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 1;
  }
`;

const Line = styled.div`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 3px;
    margin: 5px;
    background: white;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  window.addEventListener("resize", () => {
    setOpen(false);
  });

  return (
    <>
      <Nav>
        <Hamburger onClick={() => handleClick()}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
        <Content>
          <Title>Burchill Development</Title>
          <Links open={open}>
            <li onClick={() => handleClick()}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => handleClick()}>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={() => handleClick()}>
              <a href="#projects">Projects</a>
            </li>
          </Links>
        </Content>
      </Nav>
    </>
  );
};

export default Navbar;