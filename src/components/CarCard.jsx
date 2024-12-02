import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CarCard = ({ car, cars, setCars }) => {
  const { name, price, brand, photo } = car;
  return (
    <div className="p-5 rounded-lg shadow-lg border">
      <img className="w-full h-[230px]" src={photo} alt="picture" />
      <div className="flex justify-between items-center">
        <div className="mt-5">
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-xl font-semibold">
            <span>Price: </span>${price}
          </p>
          <p className="text-xl font-semibold">{brand}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button>
            <FaEdit size={35} />
          </button>
          <button className="text-red-600">
            <MdDelete size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
