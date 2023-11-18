import { useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsdata = useLoaderData();
  console.log(detailsdata);
  return (
    <div>
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam natus
        ducimus in assumenda consequuntur voluptatum iure cum nesciunt optio et!
      </h2>
    </div>
  );
};

export default Details;
