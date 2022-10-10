import {useState} from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter( (item) => {
    return Object.keys(item).some( (key) => {
       return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase());
    }); // Object.keys => obje keylerini veren method / some => herhangi biri sarta uyuyorsa
  });

  console.log("filtered",filtered)

  return (
    <div>

      <input 
      placeholder='Filter Contact' 
      value = {filterText} 
      onChange = {(e) => setFilterText(e.target.value)}
      />


      <ul className='list'>
        {filtered.map( (contacts, i) => (
          <li key = {i} > 
          {/* span => div yerine inline (satir ici) ogelere css kodu yazmak icin kullanilir  */}
          <span>{contacts.fullname}</span> 
          <span>{contacts.phone_number}</span>
          </li>
        ))}
      </ul>

      <p> Total Contacts: {filtered.length}</p>
    </div>
  );
}

export default List;
