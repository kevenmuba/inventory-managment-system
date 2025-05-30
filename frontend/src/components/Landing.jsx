import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Landing() {
  const bgImage =
    "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600";

  // const { userInfo } = useSelector((state) => state.auth);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/dashboard");
  //   }
  // }, [userInfo]);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Inventory Management System
          </h1>

          <Link to="/login">
            <button className="px-5 p-2 bg-orange-300 text-slate-700 hover:bg-orange-600 hover:text-slate-200 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </header>

      <main
        className="flex-grow"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <h2 className="text-2xl font-semibold text-gray-200">
                Inventory Warehouse
              </h2>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            &copy; 2024 Inventory Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
