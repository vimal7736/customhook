import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ThemedComponent() {
  const [value, setValue] = useLocalStorage('my-key', '2345678');
  const [toggle, setToggle] = useLocalStorage('state', true);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
const newToggleState = !toggle
  const handleSubmit = () => {
    setToggle(newToggleState);
    setTheme(newToggleState? 'dark' : 'light');
  };

  const lightTheme = {
    backgroundColor: '#f0f4f8',
    color: '#333',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const darkTheme = {
    backgroundColor: '#2e3b4e',
    color: '#e0e0e0',
    border: '1px solid #444',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div>
        <h1>useLocalStorage</h1>
    <div
      style={{
        ...themeStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        borderRadius: '8px',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      <p>Check Local storage </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          marginBottom: '20px',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <div>
        Value: {value}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#007bff',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Toggle Theme and State
      </button>
    </div>

    </div>
  );
}
