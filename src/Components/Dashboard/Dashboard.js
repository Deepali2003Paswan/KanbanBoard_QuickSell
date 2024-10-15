import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import BoardDetails from "../BoardDetails/BoardDetails";
import './Dashboard.css'

const Dashboard = () => {
  const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const userList = [
    "Anoop sharma",
    "Yogesh",
    "Shankar Kumar",
    "Ramesh",
    "Suresh",
  ];
  const priorityList = [
    { name: "No priority", priority: 0 },
    { name: "Low", priority: 1 },
    { name: "Medium", priority: 2 },
    { name: "High", priority: 3 },
    { name: "Urgent", priority: 4 },
  ];

  const [groupValue, setgroupValue] = useState(
    getStateFromLocalStorage() || "status"
  );
  const [orderValue, setorderValue] = useState("title");
  const [ticketDetails, setticketDetails] = useState([]);

  const orderDataByValue = useCallback(
    async (cardsArry) => {
      if (orderValue === "priority") {
        cardsArry.sort((a, b) => b.priority - a.priority);
      } else if (orderValue === "title") {
        cardsArry.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          } else if (titleA > titleB) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      await setticketDetails(cardsArry);
    },
    [orderValue, setticketDetails]
  );

  function saveStateToLocalStorage(state) {
    localStorage.setItem("groupValue", JSON.stringify(state));
  }

  function getStateFromLocalStorage() {
    const storedState = localStorage.getItem("groupValue");
    if (storedState) {
      return JSON.parse(storedState);
    }
    return null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);
    async function fetchData() {
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      await refactorData(response);
    }
    fetchData();
    async function refactorData(response) {
      let ticketArray = [];
      if (response.status === 200) {
        for (let i = 0; i < response.data.tickets.length; i++) {
          for (let j = 0; j < response.data.users.length; j++) {
            if (response.data.tickets[i].userId === response.data.users[j].id) {
              let ticketJson = {
                ...response.data.tickets[i],
                userObj: response.data.users[j],
              };
              ticketArray.push(ticketJson);
            }
          }
        }
      }
      await setticketDetails(ticketArray);
      orderDataByValue(ticketArray);
    }
  }, [orderDataByValue, groupValue]);

  function handleGroupValue(value) {
    setgroupValue(value);
  }

  function handleOrderValue(value) {
    setorderValue(value);
  }
  return (
    <div className="dashboard">
      <Navbar handleOrderValue = {handleOrderValue} handleGroupValue = {handleGroupValue} />
      <BoardDetails statusList = {statusList} userList = {userList} orderValue = {orderValue} priorityList = {priorityList} ticketDetails = {ticketDetails} groupValue = {groupValue}/>
    </div>
  );
};

export default Dashboard;
