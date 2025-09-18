function ListGroup() {
  let towns = ["Nairobi", "York", "Paris", "London"];
  towns = [];

  return (
    <>
      <h1>List</h1>
     {/* {towns.length ===0 ? <p>No item found</p>:null} */}
      
        {towns.length === 0 && <p>No Item Found</p>}
      
      <ul className="list-group">
        {towns.map((town) => (
          <li key={town}>{town}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
