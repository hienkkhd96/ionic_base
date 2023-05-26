import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export const Menu1 = () => {
  return (
    <IonMenu menuId="first" contentId="outlet1">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Start Menu 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu1 Item</IonItem>
          <IonItem>Menu1 Item</IonItem>
          <IonItem>Menu1 Item</IonItem>
          <IonItem>Menu1 Item</IonItem>
          <IonItem>Menu1 Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export const Menu2 = () => {
  return (
    <IonMenu menuId="second" contentId="outlet1">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Start Menu 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
          <IonItem>Menu2 Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
