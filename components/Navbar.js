const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-4xl text-red-600">Netflix</h1>
        <div>
          <button className="p-3">Sign In</button>
          <button className="bg-red-600 text-white p-3">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
