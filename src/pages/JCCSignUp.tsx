import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

import './JCCSignUp.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';

const JCCSignUp: React.FC = () => {

  const { loggedIn } = useAuth();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ loading: false, error: false});
  
  const handleRegister = async () => {
    try {
      setStatus({loading:true, error: false});
      const credential = await auth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      setStatus({loading: false,error: true});
      console.log('error:', error)
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <JCCLogoContainer/>
        </IonToolbar>
        <IonTitle>Sign Up</IonTitle>
      </IonHeader>

      <IonContent >
       <IonCard>
            <IonItem color="light">
                <IonLabel position="floating">Full Name:</IonLabel>
                <IonInput placeholder="Enter your first and last names"></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">E-mail:</IonLabel>
                <IonInput type='email' placeholder="Enter your contact email" value={email} onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Password:</IonLabel>
                <IonInput type="password" placeholder="Enter your password" value={password} onIonChange={(event) => setPassword(event.detail.value)}></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Re-Enter Password:</IonLabel>
                <IonInput type="password" placeholder="Please re-enter for to ensure security"></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Contact Phone Number:</IonLabel>
                <IonInput type="tel" placeholder="Enter your contact telephone number"></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Current Weight:</IonLabel>
                <IonInput type="number" placeholder="Enter your current weight in kilos"></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Goal Weight:</IonLabel>
                <IonInput type='number' placeholder="Enter the weight you would like to aim for"></IonInput>
            </IonItem>
       </IonCard>
       {status.error &&
        <IonText color="danger">Registration Failed</IonText>
        }     
       <IonButton expand="block" size="large" color="light" shape="round"onClick={handleRegister}>Sign Up</IonButton>
       <IonButton expand="block" size="large" color="dark" fill='clear' shape="round" routerLink='/login'>Already a member? Login Here</IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default JCCSignUp;