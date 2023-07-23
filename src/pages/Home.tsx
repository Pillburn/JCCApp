import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import JCCLogoContainer from '../components/JCCLogoContainer';
import JCCMessagesContainer from '../components/JCCMessagesContainer';
import { firestore } from '../firebase';
import { useEffect, useState } from 'react';
import { Entry, toEntry } from '../model';
import { useAuth } from '../auth';


const Home: React.FC = () => {
  const { userId } = useAuth();
  const [entries,setEntries] = useState<Entry[]>([]); //useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId)
    .collection('entries');
    entriesRef.get().then(({ docs }) =>  setEntries(docs.map(toEntry)));
    }, [userId]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <JCCLogoContainer/>
        </IonToolbar>
      </IonHeader>
      <IonContent >
       <IonList>
          {entries.map((entry) => 
            <IonItem button key={entry.id}
            routerLink={`/my/article/${entry.id}`}>
              {entry.title}
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
