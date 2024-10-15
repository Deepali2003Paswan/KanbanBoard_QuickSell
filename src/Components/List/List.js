import React from 'react'

import './List.css'
import Card from '../Card/Card'
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
import Add from '../../Assets/Images/add.svg'
import Dot from '../../Assets/Images/3 dot menu.svg'

let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
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
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={NoPriority} alt="icon" /></div>,
                                    1: <div className="card-tag-icon"><img src={LowPriority} alt="icon" /></div>,
                                    2: <div className="card-tag-icon"><img src={MediumPriority} alt="icon" /></div>,
                                    3: <div className="card-tag-icon"><img src={HighPriority} alt="icon" /></div>,
                                    4: <div className="card-tag-icon"><img src={UrgentPriority} alt="icon" /></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                        <img src={Add} alt="icon" />
                    </div>
                    <div className="list-option-item">
                        <img src={Dot} alt="icon" />
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
