import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OptionsWrapper = styled.div`
    div {
        font-weight: bold;
        font-size: 20px;
        background-color: #4faadf;

        box-shadow: 13px 13px 26px #aaaaac, -13px -13px 26px #ffffff;

        padding: 10px 0;
        margin: 20px 0;
        &:hover {
            cursor: pointer;
            background-color: #c4d65b;
        }
    }
`;
export default function Options({
    correctAnswer,
    incorrectAnswers,
    handleNextQuestion,
    handleSubmitAnswer,
}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(
            [...incorrectAnswers, correctAnswer].sort(() =>
                Math.random() > 0.5 ? 1 : -1
            )
        );
    }, [incorrectAnswers, correctAnswer]);

    return (
        <OptionsWrapper>
            {options.length > 0 &&
                options.map((option, index) => (
                    <div
                        key={index}
                        onClick={(e) => {
                            handleNextQuestion();
                            handleSubmitAnswer(option);
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `${option}`,
                        }}
                        className="options"
                    ></div>
                ))}
        </OptionsWrapper>
    );
}
