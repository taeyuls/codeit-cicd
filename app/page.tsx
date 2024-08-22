"use client";

export default function Home() {
  return (
    <div>
      <div className="bg-gray-50">
        {/* 첫 번째 섹션 */}
        <section className="flex flex-col lg:flex-row items-start p-8 bg-white rounded-lg shadow-lg lg:space-x-8">
          {/* 왼쪽 컨텐츠 */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              Invest at the perfect time.
            </h1>
            <p className="text-lg mb-6">
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>

            {/* 버튼들 */}
            <div className="flex space-x-4 mb-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                App Store
              </button>
              <button className="flex items-center border border-gray-300 px-6 py-2 rounded-md hover:border-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
                  <path
                    d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                    fill="#A3A3A3"
                    stroke="#A3A3A3"
                  ></path>
                </svg>
                <span className="ml-2.5 text-gray-700">Watch the video</span>
              </button>
            </div>

            {/* 추가 설명 */}
            <p className="text-sm text-gray-600 mb-8">As featured in</p>

            {/* 로고들 */}
            <div className="grid grid-cols-3 gap-4">
              {/* 각 로고 SVG들 */}
              <svg
                width="82"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 로고 SVG 코드 */}
                <path
                  d="M49.928 11.88c-1.318 0-2.354.286-3.39.854L46.632 6 40.32 7.138v.57l.66.094c.846.19 1.13.664 1.317 1.803.19 2.277.094 14.42 0 16.412 1.696.38 3.485.665 5.276.665 4.993 0 8.008-3.132 8.008-8.064 0-3.89-2.45-6.736-5.653-6.736v-.001Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="181"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.825 12.77v11.34h-4.157V12.77H58.48V9.14h12.54v3.63h-4.195Zm13.89 6.85h-6.632a1.77 1.77 0 0 0 1.904 1.803 5.853 5.853 0 0 0 2.911-.793l1.507 2.506a8.69 8.69 0 0 1-4.528 1.293c-3.398 0-5.241-2.405-5.241-5.852 0-3.878 2.186-5.875 5.132-5.875 2.945 0 5.002 2.041 5.002 6.215-.044.272-.044.51-.056.704h.001Z"
                  fill="#737373"
                />
              </svg>
              {/* 다른 로고들도 동일하게 추가 */}
            </div>
          </div>

          {/* 오른쪽 핸드폰 이미지 */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
            <img
              src="/phone.svg"
              alt="Phone"
              className="w-3/4 lg:w-full object-cover"
            />
          </div>
        </section>

        {/* 나머지 섹션들 */}
        <section
          id="features"
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <h1 className="text-4xl font-bold">Features</h1>
          <p className="mt-4 text-lg">Our amazing features.</p>
        </section>
        <section
          id="pricing"
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <h1 className="text-4xl font-bold">Pricing</h1>
          <p className="mt-4 text-lg">Affordable plans for everyone.</p>
        </section>
        <section
          id="reviews"
          className="h-screen flex items-center justify-center bg-gray-300"
        >
          <h1 className="text-4xl font-bold">Reviews</h1>
          <p className="mt-4 text-lg">See what others are saying.</p>
        </section>
        <section
          id="faq"
          className="h-screen flex items-center justify-center bg-gray-400"
        >
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="mt-4 text-lg">Frequently asked questions.</p>
        </section>
      </div>
      <section
        id="features"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="mt-4 text-lg">Our amazing features.</p>
      </section>
      <section
        id="pricing"
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-4 text-lg">Affordable plans for everyone.</p>
      </section>
      <section
        id="reviews"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <h1 className="text-4xl font-bold">Reviews</h1>
        <p className="mt-4 text-lg">See what others are saying.</p>
      </section>
      <section
        id="faq"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="mt-4 text-lg">Frequently asked questions.</p>
      </section>
    </div>
  );
}
