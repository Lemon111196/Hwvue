import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
   img{
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: -99999;
   }
`;