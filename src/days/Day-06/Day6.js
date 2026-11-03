
import React, { useEffect, useState } from "react";

function Day6() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search input state
  const [search, setSearch] = useState("");

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Call API when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Search and filter users
  const filteredUsers = users.filter((user) => {
    const searchValue = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.username.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.address.city.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="min-h-screen bg-[#080B12] text-white px-4 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
            User Dashboard
          </h1>

          <p className="text-gray-400">
            React Fetch API + useEffect + Search + Loading States
          </p>

        </div>

        {/* Search Input */}
        <div className="max-w-xl mx-auto mb-8">

          <input
            type="text"
            placeholder="Search by name, username, email or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#151B2B] border border-gray-600 rounded-xl px-5 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
          />

        </div>

        {/* User Count */}
        {!loading && !error && (
          <div className="text-center mb-8">
            <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full">
              Users Found: {filteredUsers.length} / {users.length}
            </span>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">

            <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-5"></div>

            <p className="text-blue-400 text-lg font-semibold">
              Loading users...
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Please wait while we fetch the data.
            </p>

          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto bg-rose-500/10 border border-rose-500 rounded-xl p-6 text-center">

            <div className="text-4xl mb-3">⚠️</div>

            <h2 className="text-xl font-bold text-rose-400 mb-2">
              Something went wrong!
            </h2>

            <p className="text-gray-300 mb-5">
              {error}
            </p>

            <button
              onClick={fetchUsers}
              className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Try Again
            </button>

          </div>
        )}

        {/* Success State - Display Users */}
        {!loading && !error && (

          <>

            {filteredUsers.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredUsers.map((user) => (

                  <div
                    key={user.id}
                    className="bg-[#151B2B] border border-blue-500/20 hover:border-blue-400 p-6 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1"
                  >

                    {/* User Avatar */}
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold mb-4">
                      {user.name.charAt(0)}
                    </div>

                    {/* User Details */}
                    <h2 className="text-xl font-bold mb-2">
                      {user.name}
                    </h2>

                    <p className="text-blue-400 text-sm mb-4">
                      @{user.username}
                    </p>

                    <div className="space-y-3 text-gray-300 text-sm">

                      <p className="break-all">
                        <span className="mr-2">📧</span>
                        {user.email}
                      </p>

                      <p>
                        <span className="mr-2">📞</span>
                        {user.phone}
                      </p>

                      <p>
                        <span className="mr-2">🌐</span>
                        {user.website}
                      </p>

                      <p>
                        <span className="mr-2">🏢</span>
                        {user.company.name}
                      </p>

                    </div>

                    {/* Address */}
                    <div className="border-t border-gray-700 mt-5 pt-4">

                      <p className="text-gray-400 text-xs mb-1">
                        ADDRESS
                      </p>

                      <p className="text-sm text-gray-300">
                        {user.address.city}, {user.address.street}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="text-center py-16 bg-[#151B2B] rounded-2xl border border-gray-700">

                <div className="text-5xl mb-4">🔍</div>

                <h2 className="text-xl font-bold text-rose-400 mb-2">
                  No Users Found!
                </h2>

                <p className="text-gray-400">
                  Try searching with another name, email or city.
                </p>

              </div>

            )}

          </>

        )}

        {/* Footer */}
        <p className="text-center text-gray-500 mt-12 text-sm">
          Built with React and Tailwind CSS
        </p>

      </div>

    </div>
  );
}

export default Day6;
