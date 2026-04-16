export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-blue-600">
        Store Rating App
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}