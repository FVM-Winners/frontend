import React from 'react';
import {IonPage} from '@ionic/react';
import LeftPane from '../components/leftPane';
const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="leftPane">
        <LeftPane />
      </div>
      <div className="rightPane"> 
      </div>
    </IonPage>
  );
};

export default Home;
