import React from 'react';
import {IonPage} from '@ionic/react';
import LeftPane from '../components/leftPane';
import Dashboard from '../components/dashboard';
import Borrow from '../components/Borrow';
const borrow: React.FC = () => {
  return (
  <IonPage>
    <div className='structure'>
      <div className="leftPane">
        <LeftPane />
      </div>
      <div className="centerPane">
        <Borrow/>
      </div>
      <div className="nonindexrightPane">
        <Dashboard Desposited='$40' Balance='$20' Borrowed='$40'/> 
      </div>
    </div>
    </IonPage>
  );
};

export default borrow;
