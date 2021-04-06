import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const MyList = ({ passwords }) => {
   return (
      <div className="container mt-5">
         <div className="row">
            <div className="offset-3 col-4">
               <ListGroup className="text-center">
                  {passwords.map((password) => {
                     return <ListGroupItem key={password}>{password}</ListGroupItem>;
                  })}
               </ListGroup>
            </div>
         </div>
      </div>
   );
};

export default MyList;
