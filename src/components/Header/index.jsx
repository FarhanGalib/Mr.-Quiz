import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { HeaderWrapper } from "./styled";
import { categoryList } from "../../pages/Home/categoryList";

export default function Header() {
    const location = useLocation();
    const loader = useSelector((state) => state.LoaderReducer);
    const { category, difficulty } = useSelector(
        (state) => state.formValueReducer
    );
    return (
        <>
            {!loader ? (
                location.pathname === "/quiz" &&
                category !== "" &&
                difficulty !== "" ? (
                    <HeaderWrapper>
                        <div>Category: {categoryList.find(cat=>cat.codeNumber==category).name}</div>
                        <div className="copyright">
                            Difficulty Level: {difficulty}
                        </div>
                    </HeaderWrapper>
                ) : (
                    <HeaderWrapper>
                        <div>Mr. Quiz</div>
                        <div className="copyright">&copy; Farhan Galib</div>
                    </HeaderWrapper>
                )
            ) : null}
        </>
    );
}
