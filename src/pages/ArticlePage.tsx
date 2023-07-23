import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonPage, IonRouterLink,IonTitle,IonToolbar } from '@ionic/react';

import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { Entry, toEntry } from '../model';
import { firestore } from '../firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '../auth';

interface RouteParams {
    id:string;
}

const ArticlePage: React.FC = () => {
    const { userId } = useAuth();
    const match = useRouteMatch<RouteParams>();
    const { id } = match.params;
    const [entry, setEntry] = useState<Entry>();
    useEffect(() => {
      const entryRef = firestore.collection('users').doc(userId)
      .collection('entries').doc(id);
      entryRef.get().then((doc) => setEntry(toEntry(doc)));
    }, [userId, id]);
    console.log(entry.title,entry.description);
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
      <IonContent>
       <IonTitle> { entry?.title } </IonTitle>
        <IonCard>{ entry?.description }</IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ArticlePage;