import {useState} from 'react'


const initialFormValues = {fullname : "", phone_number: ""}; //kayit sonrasi input temizlemek icin fonks

function Form( {addContacts, contacts}) {

  //const [form, setForm] = useState({ fullname: "", phone_number: ""});
  
  const [form, setForm] = useState(initialFormValues); //kayit sonrasi input temizlemek icin 

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value} );
  }

  const onSubmit = (e) => {
    e.preventDefault(); //Sayfa yenilenme islemini durdurmak icin method
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    } //Gecersiz validasyonda islemi durdurmak icin

    addContacts([...contacts,form]);

   // setForm({ fullname : "", phone_number: ""}); //kayit sonrasi input temizlemek icin

   setForm(initialFormValues); //kayit sonrasi input temizlemek icin 

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
      <input 
        name = "fullname" 
        placeholder='Full Name'
        value = {form.fullname}
        onChange={onChangeInput}
        />
      </div>

      <div>
      <input 
       name = "phone_number"
       placeholder='Phone Number'
       value = {form.phone_number}
       onChange={onChangeInput}
       />
      </div>

      <div className='btn'>
      <button>Add</button>
      </div>

    </form>
  )
}

export default Form;
