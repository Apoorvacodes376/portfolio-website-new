'use client';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
        style={{
          animation: 'blob 7s infinite',
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
        style={{
          animation: 'blob 7s infinite 2s',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
        style={{
          animation: 'blob 7s infinite 4s',
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30"
          style={{
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-20"
          style={{
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-25"
          style={{
            animation: 'float 7s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent)',
        }}
      />
    </div>
  );
}
