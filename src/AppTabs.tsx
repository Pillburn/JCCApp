import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import Home from './pages/Home';
import { Redirect, Route } from 'react-router-dom';
import JCCWeeklyFitnessTracker from './pages/JCCWeeklyFitnessTracker';
import WorkoutsPage from './pages/WorkoutsPage';
import DietPage from './pages/DietPage';
import CheckInPage from './pages/CheckInPage';
import {barbellOutline as barIcon, restaurantOutline as dietIcon,shieldCheckmarkOutline as checkinIcon, cogOutline as cogIcon } from 'ionicons/icons'
import ArticlePage from './pages/ArticlePage';
import { useAuth } from './auth';
import SettingsPage from './pages/SettingsPage';
import AddEntry from './pages/AddEntry';


setupIonicReact();

const AppTabs: React.FC= () => {
  const { loggedIn } = useAuth();
  if(!loggedIn){
    return <Redirect to="/login" />
  }
  return(
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/my/article">
        <Home />
      </Route>
      <Route exact path="/my/article/view/:id">
        <ArticlePage />
      </Route>
      <Route exact path="/my/article/add">
        <AddEntry />
      </Route>
      <Route exact path="/my/home">
        <Home />
      </Route>
      <Route exact path="/my/weekly">
        <JCCWeeklyFitnessTracker />
      </Route>
      <Route exact path="/my/workouts">
        <WorkoutsPage />
      </Route>
      <Route exact path="/my/diet">
        <DietPage />
      </Route>
      <Route exact path="/my/checkin">
        <CheckInPage />
      </Route>
      <Route exact path="/my/settings">
        <SettingsPage />
      </Route>
      <Redirect exact path="/" to="/my/home" />
      
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="workouts" href="/my/workouts">
        <IonIcon icon={barIcon} />
        <IonLabel>Workout</IonLabel>
      </IonTabButton>
      <IonTabButton tab="diets" href="/my/diet">
        <IonIcon icon={dietIcon} />
        <IonLabel>Diet</IonLabel>
      </IonTabButton>
      <IonTabButton tab="checkins" href="/my/checkin">
      <IonIcon icon={checkinIcon} />
        <IonLabel>Check-In</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/my/settings">
        <IonIcon icon={cogIcon} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
     
  
  )
};

export default AppTabs;
