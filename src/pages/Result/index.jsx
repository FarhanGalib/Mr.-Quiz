import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import {
    resetSubmittedAnswers,
    setCategory,
    setDifficulty,
    setFinalResult,
    setQuestionList,
} from "../../store/actions";
import Answers from "./Answers";

const ResultWrapper = styled.div`
    /* text-align: center; */

    h1 {
        color: #3c5792;
        text-align: center;
    }
    .btn-grp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .btn {
        margin: 8px 0;
        width: 250px;
    }
`;

export default function Result() {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [showAnswers, setShowAnswers] = useState(false);
    const result = useSelector((state) => state.ResultReducer);
    useEffect(() => {
        dispatch(setCategory(""));
        dispatch(setDifficulty(""));
    }, []);

    const handlePalyAgain = () => {
        dispatch(setQuestionList([]));
        dispatch(setFinalResult(null));
        dispatch(resetSubmittedAnswers());

        history.push("/");
    };
    return (
        <ResultWrapper>
            <h1>Result: {result} out of 10</h1>

            <div className="btn-grp">
                <Button
                    className="btn"
                    variant="contained"
                    color="primary"
                    onClick={handlePalyAgain}
                >
                    Play Again
                </Button>
                <Button
                    className="btn"
                    variant="contained"
                    color="secondary"
                    onClick={() => setShowAnswers(!showAnswers)}
                >
                    {showAnswers ? "Hide Answers" : "Show Your Answers"}
                </Button>
            </div>

            {showAnswers && <Answers />}
        </ResultWrapper>
    );
}
