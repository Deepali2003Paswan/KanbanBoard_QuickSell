import React from "react";

import "./Card.css";
import ToDo from '../../Assets/Images/To-do.svg'
import Backlog from '../../Assets/Images/Backlog.svg'
import InProgress from '../../Assets/Images/in-progress.svg'
import Done from '../../Assets/Images/Done.svg'
import Cancelled from '../../Assets/Images/Cancelled.svg'
import NoPriority from '../../Assets/Images/No-priority.svg'
import LowPriority from '../../Assets/Images/Img - Low Priority.svg'
import MediumPriority from '../../Assets/Images/Img - Medium Priority.svg'
import HighPriority from '../../Assets/Images/Img - High Priority.svg'
import UrgentPriority from '../../Assets/Images/SVG - Urgent Priority colour.svg'


const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title-container">
        <div className="card-status-icon">
          {
            {
                'Backlog': <div className="list-icon">
                    <img src={Backlog} alt="icon" />
                </div>,
                'Todo': <div className="list-icon">
                    <img src={ToDo} alt="icon" />
                </div>,
                'In progress': <div className="list-icon">
                    <img src={InProgress} alt="icon" />
                </div>,
                'Done': <div className="list-icon">
                    <img src={Done} alt="icon" />
                </div>,
                'Cancelled': <div className="list-icon">
                    <img src={Cancelled} alt="icon" />
                </div>
            }[props.cardDetails.status]
          }
        </div>
        <div className="card-title">{props.cardDetails.title}</div>
        </div>
        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-icon">
                  <img src={NoPriority} alt="icon" />
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <img src={LowPriority} alt="icon" />
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <img src={MediumPriority} alt="icon" />
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <img src={HighPriority} alt="icon" />
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <img src={UrgentPriority} alt="icon" />
                </div>
              ),
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
