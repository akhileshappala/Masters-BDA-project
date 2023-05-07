import './App.scss';
import Navbar from './components/Navbar';
import Precaustions from './components/Precausions';
import {retry} from './utils/commonFunctions';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import {lazy, Suspense} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';

const Home = lazy(() => retry(() => import('./components/Home')));

const Banner = lazy(() => retry(() => import('./components/Banner')));

const App = () => {
  const location = useLocation();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/precausions',
      view: Precaustions,
      displayName: "Do's and Dont's ",
      showInNavbar: true,
    },
  ];

  return (
    <div className="App">
      <Navbar {...{pages}} />

      <Banner />

      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
