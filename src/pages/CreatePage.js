import { useState } from "react";
import { AppProvider } from "../context/AppContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Create = () => {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newCategory, setNewCategory] = useState("");
  const [newPayment, setNewPayment] = useState("");
  const subsCollectionRef = collection(db, "subs");


  const createSub = async () => {
    await addDoc(subsCollectionRef, {
      name: newName,
      price: newPrice,
      category: newCategory,
      payment: newPayment,
    });
  };

  return (
    <AppProvider>
      <form className="form-section">
        <h3 className="text-center mt-3">Tilføj abonnement</h3>
        <input
          className="inputfield"
          placeholder="Navn.."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          required
        ></input>
        <input
          className="inputfield"
          type="number"
          placeholder="Pris.."
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
          required
        ></input>
        <input
          className="inputfield"
          placeholder="Kategori.."
          onChange={(event) => {
            setNewCategory(event.target.value);
          }}
          required
        ></input>
        <input
          className="inputfield"
          type="date"
          placeholder="Første betaling.."
          onChange={(event) => {
            setNewPayment(event.target.value);
          }}
          required
        ></input>
        
        <Link to="/">
        <Button onClick={createSub} required className="AddSubscriptonButton"  value="Refresh Page">Tilføj abonnement</Button>
        </Link>
      </form>
    </AppProvider>
  );
};


//  <select name="freetrial" required>
//       <option value="" disabled selected hidden>Prøveperiode</option>
//       <option value="true">Ja</option>
//       <option value="false">Nej</option>
//     </select>
//     <input type="text" placeholder="MM/DD/YYYY"
//       onfocus="(this.type='date')"></input>