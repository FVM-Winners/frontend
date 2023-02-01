import React from 'react';
import { IonButton, IonContent, IonPage, IonItem} from '@ionic/react';
import './Dashboard.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonItem routerLink="/dashboard">
              <IonButton>DashBoard</IonButton>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
