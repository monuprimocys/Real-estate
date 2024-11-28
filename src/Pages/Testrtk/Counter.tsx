import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../Slices/counter/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Increment
          </button>
          <span className="text-2xl font-semibold text-gray-800">{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
