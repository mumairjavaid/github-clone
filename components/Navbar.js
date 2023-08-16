const Navbar = () => {
  return (
    <>
      <div className="flex justify-between w-full z-[100] absolute p-4">
        <h1 className="text-4xl font-bold uppercase text-red-600">Netflix</h1>
        <div>
          <button className="p-3">Sign In</button>
          <button className="bg-red-600 rounded text-white p-2">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
