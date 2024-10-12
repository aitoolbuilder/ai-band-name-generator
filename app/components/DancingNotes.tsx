import React from 'react';

const DancingNotes: React.FC = () => {
  const notes = ['♩', '♪', '♫', '♬', '𝄞'];
  const totalDuration = 2; // 总动画时间，与 pulse 动画保持一致

  return (
    <span className="inline-flex items-baseline ml-2">
      {notes.map((note, index) => {
        const delay = (index / notes.length) * totalDuration;
        return (
          <span
            key={index}
            className={`text-blue-500 mx-1 animate-bounce`}
            style={{
              fontSize: `${18 + index * 1.5}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${totalDuration}s`,
            }}
          >
            {note}
          </span>
        );
      })}
    </span>
  );
};

export default DancingNotes;