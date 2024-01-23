import moment from "moment";
import { DashboardContainer } from "./style";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import takeanote from '../../assets/img/takeanote.png'
import check from '../../assets/img/check.png'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const gotoNote = () => {
    navigate('/noteapp')
  }
  const gotoLink = () => {
    navigate('/linkcard')
  }
  const getFormatDateTime = () =>
    moment(new Date()).format('llll');
  const [calendar, setCalendar] = useState(getFormatDateTime());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCalendar(getFormatDateTime());
    }, 1000);
    return () => clearInterval(intervalID);
  })
  return (
    <DashboardContainer>
      <div className="main">
        <h1>Welcome, { } what do you want to do today?</h1>
      </div>
      <p>{calendar}</p>
      <div className="link">
        <div className="createNote">
          <img src={takeanote} alt="pic" />
          <p>Create a note to manage your tasks better</p>
          <Button onClick={gotoNote} color="success" variant="contained">Take a note</Button>
        </div>
        <div className="createLinkcard">
          <img src={check} alt="pic" />
          <p>Create a linkcard to mark your favourite link</p>
          <Button onClick={gotoLink} color="success" variant="contained">Note a link</Button>
        </div>
      </div>
    </DashboardContainer>
  )
}
