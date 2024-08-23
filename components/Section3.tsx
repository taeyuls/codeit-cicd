import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function Section3() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

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
          <p className="text-lg my-0 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            rhoncus quam.
          </p>
          <p className="text-lg my-0 mb-7">
            Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
            imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
            Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
            blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
            ipsum tellus, eu tincidunt neque tincidunt a.
          </p>
          <h2 className="text-2xl font-normal my-12">Sub-header</h2>
          <p className="text-lg my-0 mb-7">
            In eget sodales arcu, consectetur efficitur metus. Duis efficitur
            tincidunt odio, sit amet laoreet massa fringilla eu.
          </p>
          <p className="text-lg my-0 mb-7">
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
            Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
            Proin sit amet lacus mollis, semper massa ut, rutrum mi.
          </p>
          <p className="text-lg my-0 mb-7">
            Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
          </p>
          <p className="text-lg my-0 mb-7">
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
            leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
          </p>
          <h2 className="text-2xl font-normal my-12">Sub-header</h2>
          <p className="text-lg my-0 mb-7">
            Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
            aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
            sem, sit amet tempor nulla. Quisque fermentum felis faucibus,
            vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula.
            Integer ac enim vel felis pharetra laoreet. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac
            augue quis pretium.
          </p>
          <p className="text-lg my-0 mb-7">
            Morbi ut scelerisque nibh. Integer auctor, massa non dictum
            tristique, elit metus efficitur elit, ac pretium sapien nisl nec
            ante. In et ex ultricies, mollis mi in, euismod dolor.
          </p>
          <p className="text-lg my-0 mb-7">
            Quisque convallis ligula non magna efficitur tincidunt.
          </p>
          <p className="text-lg my-0 mb-7">
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
            Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
            Proin sit amet lacus mollis, semper massa ut, rutrum mi.
          </p>
          <p className="text-lg my-0 mb-7">
            Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
          </p>
          <p className="text-lg my-0 mb-7">
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
            leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
          </p>
          <h2 className="text-2xl font-normal my-12">Sub-header</h2>
          <p className="text-lg my-0 mb-7">
            Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
            aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
            sem, sit amet tempor nulla. Quisque fermentum felis faucibus,
            vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula.
            Integer ac enim vel felis pharetra laoreet. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac
            augue quis pretium.
          </p>
          <p className="text-lg my-0 mb-7">
            Morbi ut scelerisque nibh. Integer auctor, massa non dictum
            tristique, elit metus efficitur elit, ac pretium sapien nisl nec
            ante. In et ex ultricies, mollis mi in, euismod dolor.
          </p>
          <p className="text-lg my-0 mb-7">
            Quisque convallis ligula non magna efficitur tincidunt.
          </p>
        </article>
      </div>
    </div>
  );
}
