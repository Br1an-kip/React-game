function ListGroup() {
  const towns = ["Nairobi", "York", "Paris", "London"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {towns.map((town) => (
          <li key={town}>{town}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
