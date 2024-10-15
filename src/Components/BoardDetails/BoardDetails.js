import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

import './BoardDetails.css';
import List from '../List/List';

const BoardDetails = (props) => {
  return (
    <>
        <div className="board-details-list">
          {
            {
              'status' : <>
                {
                  props.statusList.map((listItem) => {
                    return(<List
                      groupValue='status'
                      orderValue={props.orderValue}
                      listTitle={listItem}
                      statusList={props.statusList}
                      ticketDetails={props.ticketDetails}
                    />)
                  })
                }
              </>,
              'user' : <>
              {
                props.userList.map((listItem) => {
                  return(<List
                    groupValue='user'
                    orderValue={props.orderValue}
                    listTitle={listItem}
                    listIcon=''
                    userList={props.userList}
                    ticketDetails={props.ticketDetails}
                  />)
                })
              }
              </>,
              'priority' : <>
              {
                props.priorityList.map((listItem) => {
                  return(<List
                    groupValue='priority'
                    orderValue={props.orderValue}
                    listTitle={listItem.priority}
                    listIcon=''
                    priorityList={props.priorityList}
                    ticketDetails={props.ticketDetails}
                  />)
                })
              }
            </>
            }[props.groupValue]
          }
        </div>
    </>
  );
}

export default BoardDetails