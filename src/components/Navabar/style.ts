import styled from "styled-components";

export const NavbarContainer = styled.div`
position: relative;
h2{
    color: grey;
}
.nav{
    display: flex;
    justify-content: space-between;
    /* margin: 10px; */
    padding: 10px;
    background-color: #B5DDD1;
}
.headNav{
    display: flex;
}
.navList{
    list-style: none;
    display: flex;
    padding: 8px;
    margin-left: 30px;
}
.navItem{
    margin-right: 30px;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
}
.avatar{
    cursor: pointer;
}
.list{
    list-style: none;
    background-color: #D7E7A9;
    color: grey;
    width: 10%;
    padding: 10px;
    text-align: center;
    position: absolute;
    top: 55px;
    right: 20px;
}
.profile{
    cursor: pointer;
}
.profile:hover{
    background-color:#B5DDD1;
}
`;