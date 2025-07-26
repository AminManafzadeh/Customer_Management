import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={handleChange}
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        value={form.email}
        onChange={handleChange}
      />
      <FormInput
        name="phone"
        label="Phone Name"
        type="tel"
        value={form.phone}
        onChange={handleChange}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        onChange={handleChange}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        type="text"
        value={form.postalCode}
        onChange={handleChange}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
