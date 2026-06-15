import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        404
      </p>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-family-display)' }}
      >
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <button onClick={() => setLocation('/')} className="btn-editorial">
        Go Home
      </button>
    </div>
  );
}
