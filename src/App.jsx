import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import RecentSearches from './components/RecentSearches'


const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';


export default function App() {
const [city, setCity] = useState('');
const [weather, setWeather] = useState(null);
const [recent, setRecent] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


useEffect(() => {
fetchRecent();
}, []);


async function fetchRecent() {
try {
const r = await axios.get(`${API_BASE}/api/recent`);
setRecent(r.data);
} catch (err) {
console.warn('Cannot fetch recent', err);
}
}


async function doSearch(q) {
setError(null);
setLoading(true);
try {
const resp = await axios.get(`${API_BASE}/api/weather`, { params: { city: q } });
setWeather(resp.data);
setCity('');
await fetchRecent();
} catch (err) {
console.error(err);
setError(err.response?.data?.error || 'Failed to fetch');
} finally {
setLoading(false);
}
}


return (
<div style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'system-ui, Arial' }}>
<h1>Weather Lookup Dashboard</h1>
<SearchBar onSearch={doSearch} value={city} onChange={setCity} loading={loading} />
{error && <div style={{ color: 'crimson' }}>{error}</div>}
<WeatherCard data={weather} />
<RecentSearches items={recent} onClick={doSearch} />
</div>
)
}