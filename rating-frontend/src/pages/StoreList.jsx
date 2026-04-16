import { useEffect, useState } from "react";
import API from "../services/api";

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const res = await API.get("/stores");
    setStores(res.data);
  };

  const rateStore = async (storeId, rating) => {
    await API.post("/ratings", { storeId, rating });
    fetchStores();
  };

  return (
    <div>
      <h2>Stores</h2>

      {stores.map(store => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>⭐ Avg: {store.avgRating}</p>
          <p>Your Rating: {store.userRating || "Not rated"}</p>

          {[1,2,3,4,5].map(r => (
            <button key={r} onClick={() => rateStore(store.id, r)}>
              {r}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}