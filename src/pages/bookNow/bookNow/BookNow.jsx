const BookNow = () => {
  return (
    <div className="p-5 min-h-screen mt-8">
      <div className="flex flex-row gap-5 ">
        <div className=" w-3/12">
          <div className="flex flex-col space-y-3 w-full border-2 border-[var(--main-color)] p-5 rounded bg-[var(--main-color)]">
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
          <div className="p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              magni quasi at, rem reiciendis aliquam, dolores ad laudantium
              optio expedita aliquid blanditiis, hic eius error quam! Sit
              pariatur eum, natus consequuntur in assumenda animi perferendis
              harum deserunt aperiam soluta iste officia, rem nostrum unde modi
              libero autem? Blanditiis fuga nesciunt facere quis repellat alias
              voluptates distinctio explicabo ducimus libero voluptatem
              recusandae ipsum pariatur, nostrum rerum doloribus, porro magni
              assumenda culpa odio enim sed excepturi ex dolorum. Veritatis,
              autem magni aliquam sapiente accusantium ab harum repellendus ipsa
              maiores, ullam eius molestiae quaerat distinctio exercitationem
              eveniet voluptatem perferendis. Natus repudiandae odio
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
