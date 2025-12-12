import React from 'react';

export default function WeatherCard({ data }) {
  if (!data) return null;

  // Fix icon for WeatherAPI (they return //cdn..., so we add https:)
  const iconUrl = data.icon ? `https:${data.icon}` : null;

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8, marginBottom: 12 }}>
      <h2>{data.city}{data.country ? `, ${data.country}` : ''}</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {iconUrl && <img src={iconUrl} alt="icon" />}

        <div>
          <div style={{ fontSize: 24 }}>{data.temp} °C</div>
          <div>{data.condition}</div>
          <div>Humidity: {data.humidity}%</div>
          <div>Wind: {data.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
