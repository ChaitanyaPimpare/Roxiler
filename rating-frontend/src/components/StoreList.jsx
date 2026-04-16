import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import StoreCard from "../components/StoreCard";

export default function StoreList() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await API.get("/stores");
    setStores(res.data);
  };

  const searchStores = async () => {
    const res = await API.get(`/stores/search?q=${search}`);
    setStores(res.data);
  };

  const rateStore = async (storeId, rating) => {
    await API.post("/ratings", { storeId, rating });
    fetchStores();
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-4">Stores</h1>

        <div className="flex gap-2 mb-6">
          <input
            className="p-2 border rounded"
            placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={searchStores} className="bg-blue-600 text-white px-4 rounded">
            Search
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {stores.map(store => (
            <StoreCard key={store.id} store={store} onRate={rateStore} />
          ))}
        </div>

      </div>
    </div>
  );
}