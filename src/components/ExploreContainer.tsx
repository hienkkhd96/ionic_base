import { useSelector, useDispatch } from "react-redux";
import "./ExploreContainer.css";
import { IonButton, IonMenuToggle, IonText } from "@ionic/react";
import {
  decrement,
  increment,
  setValue,
} from "../features/counter/counterSlice";
import {
  BiometricAuth,
  BiometryType,
} from "@aparajita/capacitor-biometric-auth";
import { error } from "console";
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { counter, user } = useSelector((state): any => state);
  const dispatch = useDispatch();
  console.log();

  const openId = async () => {
    const res = await BiometricAuth.checkBiometry();
    if (res.isAvailable) {
      const res = BiometricAuth.authenticate()
        .then(() => {
          alert(123);
          return;
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <div className="mx-auto container">
      <strong>{name}</strong>
      <div className="flex justify-center items-center flex-col">
        <IonText color="primary">
          <h1>{counter.value}</h1>
        </IonText>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
        <IonButton onClick={() => dispatch(increment())}>Increment</IonButton>
        <IonButton onClick={() => dispatch(decrement())}>Decrement</IonButton>
        <IonButton onClick={() => dispatch(setValue(0))}>Set to 0</IonButton>
        <IonButton onClick={() => openId()}>openID</IonButton>
      </div>
    </div>
  );
};

export default ExploreContainer;
