import React from "react";
import { useSelector } from "react-redux";
import styled from "./Loader.module.css";

export default function Loader() {
    const loader = useSelector((state) => state.LoaderReducer);
    console.log(loader);
    return (
        <>
            {loader &&
                <div>
                    <h1>Loading...</h1>
                </div>
            }
        </>
    );
}
