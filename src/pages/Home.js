import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "../context/AppContext";
import Budget from "../components/Budget";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import RemainingBudget from "../components/Remaining";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Crud from "../components/Crud";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    navigate.push(`/search?name=${search}`);
    setSearch("");
  };

  const handleChange = () => {};

  return (
    <>
      <AppProvider>
        <br></br>
        <div className="container">
          <h1 className="text-center mt-3">Dine abonnementer</h1>
        </div>
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            className="inputField"
            placeholder="Søg efter abonnement..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          ></input>

          <select className="dropdown" name="colValue" onChange={handleChange}>
            <option>Filter</option>
            <option value="insurance">Forsikring</option>
            <option value="food">Mad</option>
            <option value="sport">Sport</option>
            <option value="streaming">Streaming</option>
            <option value="entertainment">Underholdning</option>
          </select>
        </form>

        <Crud></Crud>

        <div className="row">
          <a href="/Create" class="fixed-btn">
            <Button className="AddButton">
              <AddBoxIcon
              sx={{ fontSize: 75 }}
              style={{ color: '#12664F' }}
              ></AddBoxIcon>
            </Button>
          </a>
        </div>
      </AppProvider>
    </>
  );
};
