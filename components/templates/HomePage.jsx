import Card from "../modules/Card";

function HomePage({ data }) {
  console.log(data);
  return (
    <div>
      {data?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export default HomePage;
