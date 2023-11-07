

const MyBitsCard = ({ data }) => {
  console.log(data);
  const rowData =data;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
         
            <tr>
              <th>job title</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>User Email</th>
              <th>Bayer Email</th>

            </tr>
          </thead>
          <tbody>


            {

              rowData?.map((row, index) => (<tr  key={index}>
                <td>{row.jobTitle}</td>
                <td>{row.price}</td>
                <td>{row.deadline}</td>
                <td>{row.email}</td>
                <td>{row.email2}</td>
                <td> <button className="btn btn-secondary mx-auto">Complete Button</button></td>

              </tr>))
            }
            {/* row 1 */}
            <tr>
            
            <td></td>
            <td></td>
            <td></td>
           </tr>
            </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default MyBitsCard;