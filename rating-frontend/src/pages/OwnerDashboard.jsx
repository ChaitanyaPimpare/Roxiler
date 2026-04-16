import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function OwnerDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/owner/dashboard");
    setData(res.data);
  };

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Store Ratings</h2>

        {data.map(user => (
          <div key={user.id} className="bg-white p-3 mb-2 shadow rounded">
            {user.name} - Rating: {user.rating}
          </div>
        ))}
      </div>
    </div>
  );
}