import styled from "styled-components";


export const Body = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  //background-color: #effaff;
  background: linear-gradient(to left, #c6f7ff, #fff2f2 50%, #ffe4e4 75%);
  color: black;
  height: 60px;
  line-height: 60px;
  font-weight: 600;
  text-align: left;
  padding-left: 1.5rem;
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Icon = styled.i`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Infogroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    font-weight: 500;
    margin-right: 10px;
  }

  .des {
    font-weight: 400 !important;
    font-size: 12px;
  }
`;

export const CardGroup = styled.div`
  margin-left: 10%;
  margin-top: 30px;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
`;

export const CardItem = styled.div`
  border: 1px solid lightgray;
  min-height: 200px;
  background: #f7f7f7;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 7px;

  &:hover {
    background: #effbff;
    box-shadow: 0px 0px 10px #b1ffff;
  }

  &.back {
    background: #f7f7f7;

    .weather-degree {
      flex: 0.4;
      border-right: 1px solid gray;

      img {
        padding: 0px 12px;
        width: 100%;
      }

      p {
        padding: 0 12px;
        margin: 0;
        font-size: 2.2rem;
        font-weight: 500;
        text-align: center;
      }

      span {
        font-size: 1rem;
        vertical-align: text-top;
        font-weight: 400;
        padding-top: 2px;
      }
    }

    .weather-info {
      flex: 0.6;
      font-size: 0.8rem;
      padding: 0 10px;

      p {
        margin: 2px 0;
        padding: 0;
      }

      .weather-state {
        font-size: 1.5rem;
        margin: 0 0 10px;
        font-weight: 500;
      }
    }
  }

`;

export const ShapeContainer = styled.div`
  .turn{
    width:100px;
    height: 100px;
    background: aqua;
    margin: 100px auto;
  }
  @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
`;

export const Shape = styled.div`
  position: absolute;
  animation: ${props => `turn ${props.sSpeed} cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`};
  left: ${props => props.sLeft};
  top: ${props => props.sTop}
`;