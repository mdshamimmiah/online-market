import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

const RequestTable = ({ index }) => {
  const { _id, price, deadline, email, email2, jobTitle, status } = index;
  const [currentStatus, setCurrentStatus] = useState(status);
  const [showButtons, setShowButtons] = useState(true);

  const handleAccept = (id) => {
    const status = { status: "progress" };
    axios
      .patch(`https://online-market-server.vercel.app/bit/${id}`, status)
      .then((response) => {
        console.log(response);
        setCurrentStatus("progress");
        setShowButtons(false);
      })
      .catch((error) => console.log(error));
  };

  const handleReject = (id) => {
    const status = { status: "Reject" };
    axios
      .patch(`https://online-market-server.vercel.app/bit/${id}`, status)
      .then((response) => {
        console.log(response);
        setCurrentStatus("Reject");
        setShowButtons(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>job title</th>
                <th>User Email</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{jobTitle}</td>
                <td>{email}</td>
                <td>{deadline}</td>
                <td>{price}</td>
                <td>{currentStatus}</td>
                {showButtons && (
                  <td>
                    <button onClick={() => handleAccept(_id)} className="btn btn-accent mx-auto">
                      Accept
                    </button>
                  </td>
                )}
                {showButtons && (
                  <td>
                    <button onClick={() => handleReject(_id)} className="btn btn-primary mx-auto">
                      Reject
                    </button>
                  </td>
                )}
                {!showButtons && (
                  <td colSpan="2">
                    {/* Display progress bar or status */}
                    {currentStatus === "progress" && <div>Progress Bar</div>}
                    {currentStatus === "Reject" && <div>Rejected</div>}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
   
    </div>
    
  );
};

export default RequestTable;