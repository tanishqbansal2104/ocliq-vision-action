const FloatingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large wireframe sphere - top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 opacity-20 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(221, 83%, 53%)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(262, 83%, 58%)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Sphere wireframe */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="url(#grad1)" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="url(#grad1)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Medium wireframe cube - left side */}
      <div className="absolute top-1/4 -left-24 w-64 h-64 opacity-15 animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(262, 83%, 58%)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(221, 83%, 53%)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* 3D Cube wireframe */}
          <path d="M 60 80 L 140 80 L 140 160 L 60 160 Z" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <path d="M 80 60 L 160 60 L 160 140 L 80 140 Z" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <line x1="60" y1="80" x2="80" y2="60" stroke="url(#grad2)" strokeWidth="0.5" />
          <line x1="140" y1="80" x2="160" y2="60" stroke="url(#grad2)" strokeWidth="0.5" />
          <line x1="140" y1="160" x2="160" y2="140" stroke="url(#grad2)" strokeWidth="0.5" />
          <line x1="60" y1="160" x2="80" y2="140" stroke="url(#grad2)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Small wireframe sphere - bottom right */}
      <div className="absolute bottom-20 right-32 w-48 h-48 opacity-20 animate-float" style={{ animationDelay: '2s', animationDuration: '7s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="70" ry="35" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="35" ry="70" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          {/* Grid lines */}
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="30"
              x2="100"
              y2="170"
              stroke="url(#grad1)"
              strokeWidth="0.3"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Wireframe torus - center left */}
      <div className="absolute top-1/2 left-20 w-56 h-56 opacity-10 animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="60" ry="80" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="40" ry="60" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="40" ry="15" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Small pyramid - top left */}
      <div className="absolute top-40 left-1/4 w-40 h-40 opacity-15 animate-float" style={{ animationDelay: '1.5s', animationDuration: '6s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 100 40 L 40 160 L 160 160 Z" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          <line x1="100" y1="40" x2="100" y2="120" stroke="url(#grad1)" strokeWidth="0.5" />
          <line x1="40" y1="160" x2="160" y2="160" stroke="url(#grad1)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Geometric pattern - bottom left */}
      <div className="absolute bottom-40 left-1/3 w-32 h-32 opacity-10 animate-float" style={{ animationDelay: '2.5s', animationDuration: '10s' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon points="100,40 160,100 100,160 40,100" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad2)" strokeWidth="0.5" />
          <line x1="100" y1="60" x2="100" y2="140" stroke="url(#grad2)" strokeWidth="0.3" />
          <line x1="60" y1="100" x2="140" y2="100" stroke="url(#grad2)" strokeWidth="0.3" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingObjects;
