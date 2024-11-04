import { Droplet } from 'lucide-react';

const WaterGlassChart = ({ consumed, total }) => {
  const consumedML = consumed * 250;
  const fillPercentage = Math.min(Math.round((consumedML / total) * 100), 100);
  const actualPercentage = Math.round((consumedML / total) * 100);
  const glassesConsumed = consumed;
  const glassesTotal = Math.ceil(total / 250);
  const isOverAchieved = consumedML > total;
  const MAX_VISIBLE_DROPLETS = 8;
  
  return (
    <div className="relative h-[180px] flex items-center justify-center -mt-4">
      <div className="absolute inset-0 flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <clipPath id="circleClip">
                <circle cx="50" cy="50" r="45" />
              </clipPath>
            </defs>

            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />

            <g clipPath="url(#circleClip)">
              <rect
                x="0"
                y={100 - fillPercentage}
                width="100"
                height="100"
                fill={isOverAchieved ? "#22c55e" : "#3b82f6"}
                fillOpacity="0.35"
              />
            </g>

            <foreignObject x="0" y="0" width="100" height="100">
              <div className="h-full flex flex-col items-center justify-center">
                <span className={`text-2xl font-bold ${isOverAchieved ? "text-green-600" : "text-blue-600"}`}>
                  {actualPercentage}%
                </span>
                <span className="text-sm text-gray-500">
                  {(consumedML / 1000).toFixed(1)}L
                </span>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-2 w-full px-4">
        <div className="flex justify-center items-center gap-2">
          {glassesConsumed > MAX_VISIBLE_DROPLETS ? (
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <Droplet 
                    className={`w-5 h-5 ${isOverAchieved ? 'text-green-500 fill-green-100' : 'text-blue-500 fill-blue-100'}`}
                  />
                </div>
              ))}
              <span className={`text-sm font-medium ${isOverAchieved ? 'text-green-600' : 'text-blue-600'}`}>
                +{glassesConsumed - 4}
              </span>
            </>
          ) : (
            Array.from({ length: Math.max(glassesTotal, glassesConsumed) }).map((_, index) => (
              <div key={index}>
                <Droplet 
                  className={`w-5 h-5 ${
                    index < glassesConsumed
                      ? index >= glassesTotal 
                        ? 'text-green-500 fill-green-100'
                        : 'text-blue-500 fill-blue-100'
                      : 'text-gray-200'
                  }`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterGlassChart;