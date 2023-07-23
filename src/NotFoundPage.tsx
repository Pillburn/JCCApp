import { IonContent, IonHeader, IonPage, IonRouterLink,IonToolbar } from '@ionic/react';
import JCCLogoContainer from './components/JCCLogoContainer';
import JCCMessagesContainer from './components/JCCMessagesContainer';


const NotFoundPage: React.FC = () => {
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

       THIS PAGE DOESNT EXIST!
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;