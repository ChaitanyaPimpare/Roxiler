export default function StoreCard({ store, onRate }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold">{store.name}</h2>
      <p className="text-gray-500">{store.address}</p>

      <p className="mt-2">⭐ Avg: {store.avgRating.toFixed(1)}</p>
      <p>Your Rating: {store.userRating || "Not rated"}</p>

      <div className="flex gap-2 mt-3">
        {[1,2,3,4,5].map(r => (
          <button
            key={r}
            onClick={() => onRate(store.id, r)}
            className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
          >
            {r}
          </button>
        ))}
      </div>

    </div>
  );
}