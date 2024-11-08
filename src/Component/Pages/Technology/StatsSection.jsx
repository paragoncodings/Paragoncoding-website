import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="bg-dark border-green border-b-4 border-t-4 text- pb-10 p-8" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
        <div className="text-center">
          <CountUp
            key={inView ? 'workingFrom' : 'reset'}
            start={0}
            end={100}
            duration={3}
            delay={0}
            useEasing={true}
            redraw={true}
          />
          <p className="text-lg md:text-xl mt-2 font-semibold text-green">Working From</p>
        </div>
        <div className="text-center">
          <CountUp
            key={inView ? 'projectsCompleted' : 'reset'}
            start={0}
            end={50}
            duration={3}
            delay={0}
            useEasing={true}
            redraw={true}
          />
          <p className="text-lg md:text-xl mt-2 font-semibold text-green">Projects Completed</p>
        </div>
        <div className="text-center">
          <CountUp
            key={inView ? 'workingHours' : 'reset'}
            start={0}
            end={40}
            duration={3}
            delay={0}
            useEasing={true}
            redraw={true}
          />
          <p className="text-lg md:text-xl mt-2 font-semibold text-green">Weekly Working Hours</p>
        </div>
        <div className="text-center">
          <CountUp
            key={inView ? 'happyClients' : 'reset'}
            start={0}
            end={210}
            duration={3}
            delay={0}
            useEasing={true}
            redraw={true}
          />
          <p className="text-lg md:text-xl mt-2 font-semibold text-green">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
