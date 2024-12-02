import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CarCard from "./CarCard";

const Home = () => {
  const loadedCars = useLoaderData();
  const [cars, setCars] = useState(loadedCars);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} cars={cars} setCars={setCars} />
        ))}
      </div>
    </div>
  );
};

export default Home;
