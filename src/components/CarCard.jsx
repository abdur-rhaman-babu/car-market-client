import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CarCard = ({ car, cars, setCars }) => {
  const { name, price, brand, photo, _id } = car;

  const handleDeleteCar = (id) =>{
        console.log(id)

        fetch(`http://localhost:5500/cars/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted cars successfully')
                const remaining = cars.filter(car=> car._id !== id)
                setCars(remaining)
            }
        })
  }

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
          <button onClick={()=>handleDeleteCar(_id)} className="text-red-600">
            <MdDelete size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
