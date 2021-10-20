import {store} from './redux/store/configureStore';
import {Provider} from 'react-redux';
import {PageLogin} from './components/page/Page-login';
import {PageCard} from './components/page/Page-card';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <PageLogin/>
                    </Route>
                    <Route path='/user'>
                        <PageCard/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
};
