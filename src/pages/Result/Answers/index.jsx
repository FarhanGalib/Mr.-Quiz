import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const QuestionWrapper = styled.div`
    margin-top: 100px;
    h2 {
        margin-top: 20px;
    }
    .correct_answer {
        background-color: #a1eca1;
    }
    .wrong_answer {
        background-color: #f5a4a4;
    }
    .options {
        padding: 10px 25px;
    }
`;

export default function Answers() {
    const questionList = useSelector((state) => state.questionReducer);
    const submittedAnswers = useSelector(
        (state) => state.SubmittedAnswersReducer
    );
    const [options, setOptions] = useState([]);

    return (
        <QuestionWrapper>
            {questionList.map((questionResourceMaterial, index) => (
                <div key={index}>
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: `${index + 1}. ${
                                questionResourceMaterial?.question
                            }`,
                        }}
                    ></h2>
                    {[
                        ...questionResourceMaterial.incorrect_answers,
                        questionResourceMaterial.correct_answer,
                    ]
                        .sort(() => (Math.random() > 0.5 ? 1 : -1))
                        .map((option) => (
                            <p
                                key={option}
                                dangerouslySetInnerHTML={{
                                    __html: `${option} ${
                                        submittedAnswers[index] === option
                                            ? "(Your Answer)"
                                            : ""
                                    }
                                        ${
                                            submittedAnswers[index] !==
                                                questionResourceMaterial.correct_answer &&
                                            option ===
                                                questionResourceMaterial.correct_answer
                                                ? "(Correct Answer)"
                                                : ""
                                        }`,
                                }}
                                className={`${"options"} ${
                                    submittedAnswers[index] ===
                                        questionResourceMaterial.correct_answer &&
                                    option ===
                                        questionResourceMaterial.correct_answer
                                        ? "correct_answer"
                                        : null
                                } ${
                                    submittedAnswers[index] !==
                                        questionResourceMaterial.correct_answer &&
                                    option === submittedAnswers[index]
                                        ? "wrong_answer"
                                        : null
                                }
                                    ${
                                        option ===
                                        questionResourceMaterial.correct_answer
                                            ? "correct_answer"
                                            : null
                                    }`}
                            ></p>
                        ))}
                    <hr />
                </div>
            ))}
        </QuestionWrapper>
    );
}
