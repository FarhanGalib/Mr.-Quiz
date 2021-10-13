import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
    setCategory,
    setDifficulty,
    setFinalResult,
    setSubmittedAnswers,
} from "../../store/actions";
import Options from "./Options";

const QuestionWrapper = styled.div`
    text-align: center;
    .question {
        font-size: 25px;
        font-weight: bold;
        background-color: #5ce4a0;
        padding: 10px 5px;
        margin-bottom: 30px;
        box-shadow: 13px 13px 26px #aaaaac, -13px -13px 26px #ffffff;
    }
    .next_btn {
        margin-top: 30px;
        padding: 10px 50px;
    }
`;
const QuestionNotReadyWrapper = styled.div`
    text-align: center;
    color: #295680;
    button {
        background-color: #113f69;
        margin-top: 50px;
    }
`;

export default function Question() {
    const questionList = useSelector((state) => state.questionReducer);
    const loader = useSelector((state) => state.LoaderReducer);
    const [questionResourceMaterial, setQuestionResourceMaterial] = useState();
    const [index, setIndex] = useState(-1);
    const [result, setResult] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        setQuestionResourceMaterial(questionList[0]);
    }, [questionList]);

    useEffect(() => {
        setIndex(index + 1);
    }, [questionResourceMaterial]);

    const handleNextQuestion = () => {
        if (index < questionList?.length) {
            setQuestionResourceMaterial(questionList[index]);
        }
    };
    const handleSubmitAnswer = (submittedAnswer) => {
        dispatch(setSubmittedAnswers(submittedAnswer));
        if (questionResourceMaterial?.correct_answer === submittedAnswer) {
            if (index === 10) {
                dispatch(setFinalResult(result + 1));
                history.push({ pathname: "/result", result });
            }
            setResult(result + 1);
        } else {
            if (index === 10) {
                dispatch(setFinalResult(result));
                history.push({ pathname: "/result", result });
            }
        }
    };
    const handleTryAgain = () => {
        dispatch(setCategory(""));
        dispatch(setDifficulty(""));
        history.push("/");
    };
    return (
        <>
            {questionResourceMaterial && (
                <QuestionWrapper>
                    <div
                        className="question"
                        dangerouslySetInnerHTML={{
                            __html: `${index}. ${questionResourceMaterial?.question}`,
                        }}
                    ></div>

                    <Options
                        handleNextQuestion={handleNextQuestion}
                        correctAnswer={questionResourceMaterial?.correct_answer}
                        incorrectAnswers={
                            questionResourceMaterial?.incorrect_answers
                        }
                        handleSubmitAnswer={handleSubmitAnswer}
                    />

                    {/* <br />
                    <br />
                    <Button
                        className="next_btn"
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                    >
                        Next
                    </Button> */}
                </QuestionWrapper>
            )}
            {!loader && questionList.length === 0 && (
                <QuestionNotReadyWrapper>
                    <h1>Question is not ready yet. </h1>
                    <h3>
                        Please try with another category or difficulty level.
                    </h3>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleTryAgain}
                    >
                        Try Again
                    </Button>
                </QuestionNotReadyWrapper>
            )}
        </>
    );
}
