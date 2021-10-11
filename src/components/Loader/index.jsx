import React from "react";
import { useSelector } from "react-redux";
import styles from "./Loader.module.css";

export default function Loader() {
    const loader = useSelector((state) => state.LoaderReducer);

    return (
        <>
            {loader && (
                <div>
                    <h1 className={styles.loader}>
                        <span>L</span>
                        <span>O</span>
                        <span>A</span>
                        <span>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </h1>
                </div>
            )}
        </>
    );
}
