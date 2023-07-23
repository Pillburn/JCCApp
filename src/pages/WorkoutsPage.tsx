import { IonContent, IonHeader, IonPage, IonRouterLink, IonToolbar } from '@ionic/react';
import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';

const WorkoutsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <JCCLogoContainer/>
        </IonToolbar>
      </IonHeader>
      <IonContent >
       <JCCMessagesContainer/>
       Go to <IonRouterLink routerLink="/weekly">Weekly</IonRouterLink> 

       workouts
      </IonContent>
    </IonPage>
  );
};

export default WorkoutsPage;
