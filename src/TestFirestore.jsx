// es. src/TestFirestore.jsx
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export function TestFirestore() {
  const handleClick = async () => {
    await addDoc(collection(db, "test"), {
      createdAt: new Date(),
      message: "Ciao Rally del Garda"
    });
    alert("Documento scritto!");
  };

  return <button onClick={handleClick}>Test Firestore</button>;
}
