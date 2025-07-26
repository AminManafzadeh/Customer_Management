import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const handleAdd = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });

    console.log(products);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const handleDelete = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="border-2 border-blackk p-[10px] my-[50px] rounded-[10px]">
      <p className="text-white text-xl">Purchased Products</p>

      {products?.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          handleChange={(e) => handleChange(e, index)}
          handleDelete={() => handleDelete(index)}
        />
      ))}

      <button
        className="border border-greenn text-greenn bg-black rounded-[5px] w-full mt-[50px] p-4 cursor-pointer text-lg"
        onClick={handleAdd}
      >
        Add Item
      </button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, handleChange, handleDelete }) {
  return (
    <div className="border-2 border-blackk p-[10px] mt-[50px] rounded-[10px]">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={handleChange}
        />

        <FormInput
          name="qty"
          label="Qty"
          type="number"
          value={product.qty}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleDelete}
        className="mt-5 p-[5px] border border-redd text-redd w-full rounded-sm"
      >
        Remove
      </button>
    </div>
  );
}
