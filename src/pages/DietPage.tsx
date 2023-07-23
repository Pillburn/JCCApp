import { IonContent, IonHeader, IonPage, IonRouterLink, IonToolbar } from '@ionic/react';
import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';

const DietPage: React.FC = () => {
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

       DIET PAGE
      </IonContent>
    </IonPage>
  );
};

export default DietPage;
