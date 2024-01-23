import styled from "styled-components";

export const NoteContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: whitesmoke;
    .createNote{
        border: 1px solid #778899;
        border-top: none;
        height: 100vh;
        margin-right: 30px;
    }
    .text{
        margin: 15px;
        width: 350px;
    }
    .createNote p{
        margin-left: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        margin-top: 20px;
    }
    .CreateBtn{
        margin-left: 15px;
        margin-top: 20px;
    }
    .select{
        margin-left: 15px;
        margin-top: 20px;
        width: 350px;
    }
    .card{
        width: 350px;
        padding: 5px;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
`;