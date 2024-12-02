const AddCar = () => {
    const handleAddCar = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const photo = form.photo.value

        const newCar = {name, price, brand, photo}
        console.log(newCar)

        fetch('http://localhost:5500/cars',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(newCar)
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data)
        })
    }

  return (
    <div className="bg-gray-200 mt-10 md:w-1/4 lg:w-2/4 mx-auto p-5">
      <h1 className="font-bold text-center text-2xl">ADD CAR</h1>
      <div>
        <form onSubmit={handleAddCar} className=" my-3">
          <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <label>Name</label>
            <br />
            <input
              className="border outline-none w-full p-2 mt-2"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div>
            <label>Price</label>
            <br />
            <input
              className="border outline-none w-full p-2 mt-2"
              type="text"
              name="price"
              placeholder="price"
            />
          </div>
          <div>
            <label>Brand</label>
            <br />
            <input
              className="border outline-none w-full p-2 mt-2"
              type="text"
              name="brand"
              placeholder="brand"
            />
          </div>
          <div>
            <label>Photo</label>
            <br />
            <input
              className="border outline-none w-full p-2 mt-2"
              type="text"
              name="photo"
              placeholder="photo"
            />
          </div>
          </div>
          <input className="w-full bg-black p-2 mt-5 text-white font-bold" type="submit" value="Add Car" />
        </form>
      </div>
    </div>
  );
};

export default AddCar;
