import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await API.get("/admin/dashboard");
    setStats(res.data);
  };

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Users: {stats.totalUsers}</div>
          <div className="bg-white p-4 shadow rounded">Stores: {stats.totalStores}</div>
          <div className="bg-white p-4 shadow rounded">Ratings: {stats.totalRatings}</div>
        </div>
      </div>
    </div>
  );
}