import "./index.scss";
import * as ROUTES from "../app/common/routes";
import {Route, Router, Switch} from "react-router-dom";
import AuthRoute from "./router/AuthRoute";
import {CookiesProvider} from "react-cookie";
import LocaleProviderContainer from "./component/widget/localeProvider/LocaleProviderContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Provider} from "react-redux";
import React from "react";
import {addLocaleData} from "react-intl";
import customHistory from "./common/history";
import de from "react-intl/locale-data/de";
import domready from "domready";
import en from "react-intl/locale-data/en";
import injectTapEventPlugin from "react-tap-event-plugin";
import {render} from "react-dom";
import store from "./common/store";

addLocaleData([...de, ...en]);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainApplication = () => {
    return (
        <LocaleProviderContainer store={store}>
            <Provider store={store}>
                <Router history={customHistory}>
                    <div>
                        <Switch>
                            <AuthRoute
                                exact
                                path={ROUTES.TEMPLATES}
                                component={}
                            />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        </LocaleProviderContainer>
    );
};

domready(() => {
    render(
        <MuiThemeProvider>
            <CookiesProvider>>
                <MainApplication/>
            </CookiesProvider>
        </MuiThemeProvider>, document.getElementById("app"));
});
