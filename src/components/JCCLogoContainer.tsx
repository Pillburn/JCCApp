import { IonCard, IonImg, IonLabel } from '@ionic/react';
import './JCCLogoContainer.css';
import jccLogo from '../../public/jccPnglogo.png'

const JCCLogoContainer: React.FC = () => {
    return (
        <IonCard>
            <img alt='JCC Logo' src={jccLogo}/>
        </IonCard>
    );
};

export default JCCLogoContainer;