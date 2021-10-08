import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    FormControl,

    InputLabel,
    MenuItem,
    Select,
  
    Button,
} from "@mui/material";
import { HomePageWrapper } from "./styled";
import { categoryList } from "./categoryList";
import {
    fetchQuestions,
    setCategory,
    setDifficulty,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { category, difficulty } = useSelector(
        (state) => state.formValueReducer
    );
    useEffect(() => {}, []);

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
    };
    const handleDifficultyChange = (e) => {
        dispatch(setDifficulty(e.target.value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchQuestions());
        history.push("/quiz");
    };
    return (
        <HomePageWrapper>
            <form onSubmit={handleSubmit}>
                <p>Select Category and Difficulty Level</p>

                <FormControl
                    className="select-option"
                    fullWidth
                    required
                    size="small"
                >
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        value={category}
                        label="category"
                        onChange={handleCategoryChange}
                    >
                        {categoryList.map(({ name, codeNumber }) => (
                            <MenuItem key={codeNumber} value={codeNumber}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl
                    className="select-option"
                    fullWidth
                    required
                    size="small"
                >
                    <InputLabel id="Difficulty Level">
                        Difficulty Level
                    </InputLabel>
                    <Select
                        labelId="Difficulty Level"
                        id="Difficulty Level"
                        value={difficulty}
                        label="Difficulty Level"
                        onChange={handleDifficultyChange}
                    >
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    className="play-now-btn"
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Play Now
                </Button>
            </form>
        </HomePageWrapper>
    );
}
