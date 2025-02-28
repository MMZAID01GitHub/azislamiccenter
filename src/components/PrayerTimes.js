import { useState, useEffect } from 'react';

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);

  // Function to fetch prayer times from Aladhan API
  async function fetchPrayerTimes() {
    const city = "Louisville";
    const country = "USA";
    const method = 0; // Ja'fari (Shia Ithna Ashari)
    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data && data.data) {
        setPrayerTimes(data.data.timings);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  return (
    <div id="prayertimes" className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Prayer Timetable</h1>
          <p className="mt-2 text-sm text-gray-700">
            Daily prayer times for Louisville, KY (Ja'fari Method)
          </p>
        </div>
      </div>

      {loading ? (
        <p className="mt-4 text-center text-gray-600">Loading prayer times...</p>
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Prayer</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {Object.entries(prayerTimes).map(([prayer, time]) => (
                      <tr key={prayer} className="border-t border-gray-200">
                        <td className="px-3 py-4 text-sm font-medium text-gray-900">{prayer}</td>
                        <td className="px-3 py-4 text-sm text-gray-500">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}