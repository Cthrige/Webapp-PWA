import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";

export default function Crud() {
  const [subs, setSubs] = useState([]);
  const subsCollectionRef = collection(db, "subs");

  const deleteSubs = async (id) => {
    const subsDoc = doc(db, "subs", id);
    await deleteDoc(subsDoc);
  };

  useEffect(() => {
    const getSubs = async () => {
      const data = await getDocs(subsCollectionRef);
      setSubs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSubs();
  }, []);

  
  return (
    <div className="App">
      {subs.map((subs) => {
        return (
          <div className="subField">
            <h1>
              <Button
                sx={{ fontSize: 25 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.888)",
                  border: "none",
                }}
                onClick={() => {
                  deleteSubs(subs.id);
                }}
              >
                <MoreVertIcon style={{ color: "black" }}></MoreVertIcon>
              </Button>{" "}
              &ensp;{subs.name}
            </h1>
            <h1>
              <div className="SubscriptionDetails">
                <div className="første">Beatles d. {subs.payment}</div>
                <div className="anden">{subs.price} DKK</div>
              </div>
            </h1>
          </div>
        );
      })}
    </div>
  );
}