import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { auth } from '../firebase'
import './JCCLogin.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';


const JCCLogin: React.FC = () => {
  const { loggedIn } = useAuth();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ loading: false, error: false});
  
  const handleLogin = async () => {
    try {
      setStatus({loading:true, error: false});
      const credential = await auth.signInWithEmailAndPassword(email,password);
    } catch (error) {
      setStatus({loading: false,error: true});
      console.log('error:', error)
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/article" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <JCCLogoContainer/>
        </IonToolbar>
        <IonTitle>LOGIN</IonTitle>
      </IonHeader>
      <IonContent>
        <IonCard>
            <IonItem color="light">
                <IonLabel position="floating">E-mail:</IonLabel>
                <IonInput type='email' placeholder="Enter your contact email" value={email} onIonChange={(event) => setEmail(event.detail.value)}></IonInput>
            </IonItem>
            <IonItem color="light">
                <IonLabel position="floating">Password:</IonLabel>
                <IonInput type="password" placeholder="Enter your password" value={password} onIonChange={(event) => setPassword(event.detail.value)}></IonInput>
            </IonItem>
        </IonCard>
        {status.error &&
        <IonText color="danger">Invalid Credentials</IonText>
        }     
        <IonButton expand="block" size="large" color="light" shape="round"onClick={handleLogin}>Login</IonButton>
        <IonButton expand="block" size="large" color="dark" fill="clear" shape="round" routerLink='/signUp'>New Here? Sign Up now!!</IonButton>
        <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
    
  );
};

export default JCCLogin;