import { useEffect, useRef, useState } from "react";

import "./Stats.css";

const Stats = ({ number, text, duration }) => {

  const [contador, setContador] = useState(0)
  const ref = useRef()
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  useEffect(() => {
    if (!visivel) return

    let start = 0;
    const passo = number / (duration / 16)
    const interval = setInterval(() => {
      start += passo
      if (start >= number) {
        setContador(number)
        clearInterval(interval)

      }else {
        setContador(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [visivel, number, duration])

  return (
    <div className="Stats" ref={ref}>
      <span>{contador}+</span>
      <p>{text}</p>
    </div>
  );
};

export default Stats;
