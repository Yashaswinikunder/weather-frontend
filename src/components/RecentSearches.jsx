import React from 'react'


export default function RecentSearches({ items = [], onClick }) {
if (!items.length) return null;
return (
<div style={{ marginTop: 12 }}>
<h3>Recent Searches</h3>
<ul>
{items.map((it, idx) => (
<li key={idx} style={{ cursor: 'pointer' }} onClick={() => onClick(it.city)}>
<strong>{it.city}</strong> — <small>{new Date(it.timestamp).toLocaleString()}</small>
</li>
))}
</ul>
</div>
)
}