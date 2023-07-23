import { IonBackButton, IonButton, IonCard, IonContent, IonGrid, IonHeader, IonInput, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import JCCLogoContainer from '../components/JCCLogoContainer'
import './JCCLogin.css';

const JCCLoginSignUpDeciderContainer: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
        <IonContent class='ion-padding'>
          <JCCLogoContainer/>
          <IonCard className="container" color={"primary"}>
            <IonButton expand="full" size="large" color="medium" shape="round">Login</IonButton>
            <IonButton expand="block" size="large" color="light" shape="round" >SignUp</IonButton>
          </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default JCCLoginSignUpDeciderContainer;