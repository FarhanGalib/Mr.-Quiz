import { Button, Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { Page404Wrapper } from "./styled";

export default function Page404() {
    const history = useHistory();

    return (
        <Page404Wrapper
            container
            justifyContent="center"
            alignItems={"flex-start"}
        >
            <Grid item sm={10} xs={11}>
                <div className="page-content">
                    <p>Ops!! Looks like you are lost</p>
                    <Button
                        variant="contained"
                        className="home-btn"
                        onClick={() => history.push("/")}
                    >
                        Go home
                    </Button>
                </div>
            </Grid>
        </Page404Wrapper>
    );
}
