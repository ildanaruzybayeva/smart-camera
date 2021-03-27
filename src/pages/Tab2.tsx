import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';
import { WebCam } from '../components/WebCam.js';
import './Tab2.css';
import React from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <WebCam />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
