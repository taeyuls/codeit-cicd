import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function Section3() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // useRef에 HTMLDivElement 타입을 명시적으로 지정합니다.
  const sectionRef = useRef<HTMLDivElement>(null);

  const props = useSpring({
    width: isActive ? `${scrollProgress}%` : "0%",
    config: { duration: 20, easing: (num) => num },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollTop = window.pageYOffset;

        if (
          scrollTop >= sectionTop &&
          scrollTop <= sectionTop + sectionHeight
        ) {
          const scrollPercentage =
            ((scrollTop - sectionTop) / sectionHeight) * 100;
          setScrollProgress(scrollPercentage);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200">
        <animated.div className="h-full bg-red-500" style={props} />
      </div>
      <div className="h-screen bg-white">
        <article className="max-w-lg p-5 mx-auto">
          <h1 className="text-4xl font-bold leading-tight text-center my-20 mx-0 tracking-tight">
            <code>useScroll</code> demo
          </h1>
          {/* 컨텐츠 생략 */}
        </article>
      </div>
    </div>
  );
}
