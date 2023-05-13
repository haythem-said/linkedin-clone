import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button> start a post </button>
        </div>

        <div>
          <button>
            <img src="/images/photo-icon.svg" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/photo-icon.svg" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/photo-icon.svg" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/photo-icon.svg" />
            <span>Share</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};
const Container = styled.div`
  grid-area: mainSide;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
  div {
    button {
      align-items: center;
      outline: none;
      font-size: 16px;
      line-height: 0.9;
      color: rgba(0, 0, 0, 0.6);
      min-height: 48px;
      border: none;
      display: flex;
      background: transparent;
      font-weight: 600;
    }
    :first-child {
      display: flex;
      align-items: center;
      margin: 8px 16px 8px 8px;
      img {
        width: 48px;
        border-radius: 30px;
        margin-right: 8px;
      }
      button {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        width: 100%;
        margin-left: 6px;
      }
    }
    :nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 8px;
      button {
        img {
          margin: 0 4px 0 -20px;
        }
        span {
            color:#78b5f9   
        }
      }
    }
  }
`;

export default Main;
