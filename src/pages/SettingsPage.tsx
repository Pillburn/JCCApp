import { IonButton, IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';
import { auth } from '../firebase';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <JCCLogoContainer/>
          <IonTitle >Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
       <JCCMessagesContainer/>
       <IonButton expand='block' onClick={() => auth.signOut()}
       >Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
