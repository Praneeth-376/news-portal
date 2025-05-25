export default function MainLayout({ children }) {
  return (
    <div>
      <header style={{ background: '#ccc', padding: '1rem' }}>
        <h2>Main Layout Header</h2>
      </header>
      <main>{children}</main>
      <footer style={{ background: '#ccc', padding: '1rem', marginTop: '2rem' }}>
        <p>Footer content here.</p>
      </footer>
    </div>
  );
}
