import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const NumberCounter = () => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerRef = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect(); 
        }
      });
    })
  );

  useEffect(() => {
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-secondary py-10 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-4 space-y-4 md:space-y-0 items-center justify-center">
        <div className="text-center" ref={countRef}>
          <p className="text-3xl font-semibold">
            {isVisible && (
              <CountUp start={0} end={872} duration={3} separator="," />
            )}
          </p>
          <p>Expert tutors</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-semibold">
            {isVisible && (
              <CountUp
                start={0}
                end={20000}
                duration={3}
                separator=","
                suffix="+"
              />
            )}
          </p>
          <p>Hours content</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-semibold">
            {isVisible && (
              <CountUp start={0} end={298} duration={3} separator="," />
            )}
          </p>
          <p>Subject and courses</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-semibold">
            {isVisible && (
              <CountUp
                start={0}
                end={72878}
                duration={3}
                separator=","
                suffix="+"
              />
            )}
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
