import { IonContent, IonHeader, IonPage, IonRouterLink, IonToolbar } from '@ionic/react';
import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';

const CheckInPage: React.FC = () => {
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

       CHECK - IN
      </IonContent>
    </IonPage>
  );
};

export default CheckInPage;
