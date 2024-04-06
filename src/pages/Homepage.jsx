import { Container } from "@mui/material";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import { columns, getAccounts, rowData } from "../services/api";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [getAcc, setGetAcc] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAccounts();
      console.log("RES: ", response);
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card title={"Total Accounts"} text={"20"} />
        <Card title={"Total EA's"} text={"20"} />
        <Card
          title={"Highest Profit"}
          text={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              $200{" "}
              {/* <TrendingDownIcon style={{ color: "red", fontSize: "30px" }} /> */}
              <TrendingUpIcon style={{ color: "green", fontSize: "30px" }} />
            </div>
          }
        />
      </div>
      <Table rowData={rowData} columns={columns} />
    </Container>
  );
};

export default Homepage;
