import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
});

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)}  isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}