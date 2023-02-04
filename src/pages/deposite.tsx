import React from 'react';
import {IonPage} from '@ionic/react';
import LeftPane from '../components/leftPane';
import Dashboard from '../components/dashboard';
import Mint from '../components/deposite';
const Deposite: React.FC = () => {
  return (
    <IonPage>
    <div className='structure'>
      <div className="leftPane">
        <LeftPane />
      </div>
      <div className="centerPane">
        <Mint/>
      </div>
      <div className="nonindexrightPane">
        <Dashboard Desposited='$40' Balance='$20' Borrowed='$40'/> 
      </div>
    </div>
    </IonPage>
  );
};

export default Deposite;
