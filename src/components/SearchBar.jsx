import React from 'react'


export default function SearchBar({ onSearch, value, onChange, loading }) {
function submit(e) {
e.preventDefault();
if (!value) return;
onSearch(value);
}


return (
<form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
<input
value={value}
onChange={e => onChange(e.target.value)}
placeholder="Enter city name (e.g. London)"
style={{ flex: 1, padding: '8px 10px' }}
/>
<button type="submit" disabled={loading} style={{ padding: '8px 12px' }}>
{loading ? 'Searching...' : 'Search'}
</button>
</form>
)
}