import React from 'react';
import { IonContent, IonItem, IonPage, IonButton } from '@ionic/react';
import './Dashboard.css';

const Borrow: React.FC = () => {
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

export default Borrow;
