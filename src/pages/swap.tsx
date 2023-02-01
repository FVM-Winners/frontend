import React from 'react';
import { IonLabel, IonContent, IonPage, IonInput, IonItem, IonButton} from '@ionic/react';
import './Dashboard.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonItem>
    <IonLabel>Select Token to swap</IonLabel>
    <IonInput placeholder="0"></IonInput>
  </IonItem>
  <IonItem>
    <IonLabel >Select Token to swap</IonLabel>
    <IonInput placeholder="0"></IonInput>
  </IonItem>
  <IonButton className="ion-margin-top" type="submit" expand="block">
    Login
  </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
