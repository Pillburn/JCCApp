import { IonApp,IonLoading,IonRouterOutlet, IonTabButton, setupIonicReact } from '@ionic/react';
import JCCLogin from './pages/JCCLogin';
import JCCLoginSignUpDecider from './pages/JCCLoginSignUpDeciderContainer';
import JCCLoginSignUpDeciderContainer from './pages/JCCLoginSignUpDeciderContainer';
import JCCSignUp from './pages/JCCSignUp';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppTabs from './AppTabs';
import { AuthContext, useAuthInit} from './auth';
import NotFoundPage from './NotFoundPage';
import { IonReactRouter } from '@ionic/react-router';

setupIonicReact();

const App: React.FC = () => {
  const {loading, auth} = useAuthInit();
  
  if (loading){
    return <IonLoading isOpen/>
  }
  console.log(`rendering app with auth:`, auth);
  return(
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Switch>
                <Route exact path="/login">
                  <JCCLogin  />
                </Route>
                <Route exact path="/signUp">
                  <JCCSignUp />
                </Route>
                <Route path="/my">
                  <AppTabs/>
                </Route>
                <Redirect exact path="/" to="/my/home" />
                <Route>
                  <NotFoundPage />
                </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  )
};

export default App;
