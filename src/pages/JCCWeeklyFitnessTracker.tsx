import { IonContent, IonHeader, IonPage, IonRouterLink,IonToolbar } from '@ionic/react';

import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';


const JCCWeeklyFitnessTracker: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <JCCLogoContainer/>
        </IonToolbar>
      </IonHeader>
      <IonContent >
       <JCCMessagesContainer/>
       Go to <IonRouterLink routerLink="/home">home</IonRouterLink> 

       THIS IS THE WEEKLY PAGE
      </IonContent>
    </IonPage>
  );
};

export default JCCWeeklyFitnessTracker;