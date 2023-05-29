import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import { useEffect } from "react";

import { log } from "console";
const Tab2: React.FC = () => {
  const hideTabBar = (): void => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar !== null) {
      tabBar.style.display = "none";
    }
  };
  const showTabBar = (): void => {
    const tabBar = document.querySelector("ion-tab-bar");
    if (tabBar !== null) {
      tabBar.style.display = "flex";
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="second"></IonMenuButton>
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
