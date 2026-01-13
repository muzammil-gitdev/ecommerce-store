import { useState, useRef, useEffect, useCallback } from "react";

export default function PriceRangeSelector({
  minLimit = 0,
  maxLimit = 10000,
  onApply,
}) {
  const [min, setMin] = useState(minLimit);
  const [max, setMax] = useState(maxLimit);

  // Convert values to percentages for slider positioning
  const getPercent = useCallback(
    (value) => Math.round(((value - minLimit) / (maxLimit - minLimit)) * 100),
    [minLimit, maxLimit]
  );

  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Synchronize the highlighted range width/position
  useEffect(() => {
    const minPercent = getPercent(min);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(max);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [max, getPercent]);

  return (
    <div className="w-full max-w-[300px] flex flex-col gap-4 mx-auto ">
      {/* Slider Container */}
      <div className="relative w-full h-5 mt-2 flex items-center">
        {/* Background Track */}
        <div className="absolute w-full h-1.5 bg-blue-100 rounded-full top-1.8 z-0"></div>

        {/* Selected Range Track */}
        <div
          ref={range}
          className="absolute h-1.5 bg-blue-600 rounded-full top-1.8 z-10"
        ></div>

        {/* Min Thumb Input */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={min}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), max - 1);
            setMin(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left pointer-events-none absolute h-0 w-full outline-none z-[20]"
          style={{ zIndex: min > max - 100 && "50" }}
        />

        {/* Max Thumb Input */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={max}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), min + 1);
            setMax(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right pointer-events-none absolute h-0 w-full outline-none z-[20]"
        />

        {/* Custom CSS for Thumbs to match the design (White circle with border) */}
        <style jsx>{`
          /* Webkit/Blink */
          .thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: auto;
            position: relative;
            z-index: 50;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: white; /* White fill */
            border: 1px solid #cbd5e1; /* Light gray border */
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
            cursor: pointer;
            margin-top: 2px; /* Center alignment adjustment */
          }

          /* Firefox */
          .thumb::-moz-range-thumb {
            -webkit-appearance: none;
            pointer-events: auto;
            border: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: white;
            border: 1px solid #cbd5e1;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            cursor: pointer;
          }
        `}</style>
      </div>

      {/* Input Fields */}
      <div className="flex gap-3 mt-2">
        <div className="flex flex-col w-1/2 gap-1">
          <label className="text-sm font-medium text-neutral-800">Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => {
              let val = Number(e.target.value);
              if (val > max) val = max - 1;
              setMin(val);
            }}
            placeholder="0"
            className="w-full border border-stone-200 rounded-md px-3 py-2 text-stone-600 outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex flex-col w-1/2 gap-1">
          <label className="text-sm font-medium text-neutral-800">Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => {
              let val = Number(e.target.value);
              if (val < min) val = min + 1;
              setMax(val);
            }}
            placeholder="999999"
            className="w-full border border-stone-200 rounded-md px-3 py-2 text-stone-600 outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => onApply?.({ min, max })}
        className="w-full py-2 bg-white border border-stone-200 rounded-md font-semibold text-blue-600 shadow-sm hover:bg-stone-50 hover:shadow-md transition-all active:scale-[0.98]"
      >
        Apply
      </button>
    </div>
  );
}
