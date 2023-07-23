
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonRouterLink,IonTitle,IonToolbar } from '@ionic/react';

import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';


const AddEntry: React.FC = () => {
  console.log('[AddEntry] rendered')  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton/>
          </IonButtons>
          <JCCLogoContainer/>
        </IonToolbar>
      </IonHeader>
      <IonContent >
       <IonTitle>Add Entry</IonTitle>
       T0-D0
      </IonContent>
    </IonPage>
  );
};

export default AddEntry;