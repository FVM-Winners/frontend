import React from 'react';
import { IonContent, IonItem, IonPage, IonButton } from '@ionic/react';
import './Dashboard.css';

const Lend: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonItem routerLink="/swap">
              <IonButton>Swap</IonButton>
          </IonItem>
          <IonItem routerLink="/">
              <IonButton>Borrow</IonButton>
          </IonItem>
          <IonItem routerLink="/">
              <IonButton>Lend</IonButton>
          </IonItem>
          
      </IonContent>
    </IonPage>
  );
};

export default Lend;
