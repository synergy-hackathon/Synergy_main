import React from "react";
import Router from "./Router";

import {RouterProvider} from "react-router-dom";
import {Container} from "react-bootstrap";
import AppNavigation from "./Components/AppNavigation";

function App() {
    return <>
        <React.Suspense>
            <AppNavigation />
            <br/><br/>
            <Container>
                <RouterProvider router={Router} />
            </Container>
        </React.Suspense>
    </>;
}

export default App;
