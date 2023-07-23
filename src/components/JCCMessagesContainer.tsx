import { IonCard, IonCardContent, IonTitle } from '@ionic/react';
import './JCCLogoContainer.css';
import jccLogo from '../../public/jccPnglogo.png'

const JCCMessagesContainer: React.FC = () => {
    return (
        <IonCard color="light">
            <IonTitle>You have a new message</IonTitle>
            <IonCardContent color="light"> JCC has sent feedback based on your most recent check-in</IonCardContent>
        </IonCard>
    );
};

export default JCCMessagesContainer;