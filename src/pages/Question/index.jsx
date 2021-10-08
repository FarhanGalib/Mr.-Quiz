import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Options from "./Options";
import styled from "styled-components";

const QuestionWrapper = styled.div`
    text-align: center;
    .question{
        font-size: 25px;
        font-weight: bold;
        background-color: #5ce4a0;
        padding: 10px 5px;
        margin-bottom: 30px;
        box-shadow: 13px 13px 26px #aaaaac, -13px -13px 26px #ffffff;
    }
`; 


export default function Question() {
    const questionList = useSelector((state) => state.questionReducer);
    const [questionResourceMaterial, setQuestionResourceMaterial] = useState();
    const [index, setIndex] = useState(-1);
    const [options, setOptions] = useState([]);
    const [result, setResult] = useState(0);

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
        if(questionResourceMaterial?.correct_answer===submittedAnswer  ){
            if(index<11)
            setResult(result+1);
        }
    };

    return (
        <>
            {questionResourceMaterial && (
                <QuestionWrapper>
                    <div className="question"
                        dangerouslySetInnerHTML={{
                            __html: `${questionResourceMaterial?.question}`,
                        }}
                    ></div>
                    {console.log(index)}
                    <Options
                        handleNextQuestion={handleNextQuestion}
                        correctAnswer={questionResourceMaterial?.correct_answer}
                        incorrectAnswers={ questionResourceMaterial?.incorrect_answers}
                        handleSubmitAnswer={handleSubmitAnswer}
                    />
                    <h1>{result}</h1>
                </QuestionWrapper>
            )}
        </>
    );
}
