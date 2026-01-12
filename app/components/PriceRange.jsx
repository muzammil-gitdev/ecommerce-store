import { useState } from "react";

export default function PriceRangeSelector({
  minLimit = 0,
  maxLimit = 399999,
  onApply,
}) {
  const [min, setMin] = useState(minLimit);
  const [max, setMax] = useState(maxLimit);

  const minPercent = ((min - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((max - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Slider */}
      <div className="relative h-6 flex items-center">
        {/* Track */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-blue-200 rounded" />

        {/* Selected Range */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded "
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min Thumb */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-blue-500"
        />

        {/* Max Thumb */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-blue-500"
        />
      </div>

      {/* Inputs */}
      <div className="flex gap-4">
        <div className="flex flex-col w-1/2">
          <label className="text-sm">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="outline-none"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="text-sm">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="outline-none"
          />
        </div>
      </div>

      {/* Apply */}
      <button
        onClick={() => onApply?.({ min, max })}
        className="text-blue-600 font-medium"
      >
        Apply
      </button>
    </div>
  );
}
