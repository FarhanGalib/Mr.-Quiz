import { Grid } from "@mui/material";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 500px;
    border: none;
    border-radius: 10px;
    box-shadow: 13px 13px 26px #aaaaac, -13px -13px 26px #ffffff;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;    
    }
    p{
        font-size: 20px;
        color: #295680;
        font-weight: bold;
        margin: 25px 0;
    }
    .select-option{
        width: 200px;
        margin: 10px 0;
        background-color: #EFF1FF;
    }

    .play-now-btn{
        margin: 15px 0;
        background-color: #295680;

    }
`;
