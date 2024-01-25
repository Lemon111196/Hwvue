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
        padding: 10px;
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
        margin-top: 20px;
        margin-right: 10px;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .edit{
        color: orange;
    }
    .delete{
        color:red;
    }
    .createTitle{
        display: flex;
        flex-direction: column;
    }
    .createNote span{
        margin-left: 20px;
        color: red;
    }
    .createContent{
        display: flex;
        flex-direction: column;
    }
`;