import { useEffect, useState } from "react";

const BookNow = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("hoteles.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  console.log(rooms);

  return (
    <div className="p-5 min-h-screen pt-8 bg-slate-100">
      <div className="flex flex-row gap-5 ">
        <div className=" w-3/12">
          <div className="flex flex-col space-y-3 w-full border-2 border-[var(--main-color)] p-5 rounded bg-[var(--main-color)] sticky top-5">
            <h2 className="text-3xl font-bold text-center mb-3">Search</h2>
            <input
              type="text"
              name="email"
              placeholder="Hotel Name"
              className="px-2 py-1 rounded w-full bg-white border-0"
            />
            <input
              type="text"
              name="password"
              placeholder="Location"
              className="px-2 py-1 rounded bg-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Price Range"
              className="px-2 py-1 rounded w-full bg-white border-0"
            />
            <input
              type="text"
              name="password"
              placeholder="Seats"
              className="px-2 py-1 rounded bg-white"
            />
            <input type="submit" name="" id="" value="Search" className="" />
          </div>
        </div>
        <div className="w-9/12 border-2 border-[var(--main-color)] rounded">
          <h3 className="text-3xl text-center font-bold bg-[var(--main-color)] text-white py-2">
            Available Rooms
          </h3>
          <div className="p-3 bg-white">
            <div className="grid grid-cols-3 gap-5">
              {rooms.map((room) => (
                <div key={room.id} className="custom-card">
                  <figure>
                    <img
                      src={room?.imgs[0]}
                      alt=""
                      className="rounded-t h-48 w-full"
                    />
                  </figure>
                  <div className="p-2 mt-auto">
                    <h3 className="text-xl">{room.name}</h3>
                    <h4 className="font-semibold">Amenities</h4>
                    <ul>
                      {room?.amenities.map((amenitie, i) => (
                        <li key={i}>{amenitie}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between border-t py-2 mt-auto">
                    <p className="text-3xl">${room.price}</p>
                    <button className="custom-btn-outline">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
