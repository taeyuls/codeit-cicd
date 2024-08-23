export default function Reviews() {
  const reviews = [
    {
      titles: "완전 추천",
      content:
        "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!",
      author: "시원",
    },
    {
      titles: "완전 추천",
      content:
        "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.",
      author: "병헌",
    },
    {
      titles: "완전 추천",
      content:
        "I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!",
      author: "희선",
    },
    {
      titles: "완전 추천",
      content:
        "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
      author: "원빈",
    },
    {
      titles: "완전 추천",
      content:
        "Yeah, you read that right. Want your own island too? Get Pocket.",
      author: "태율",
    },
    {
      titles: "완전 추천",
      content:
        "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
      author: "료니",
    },
    {
      titles: "완전 추천",
      content:
        "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
      author: "우성",
    },
    {
      titles: "완전 추천",
      content:
        "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
      author: "진구",
    },
    {
      titles: "완전 추천",
      content:
        "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
      author: "승원",
    },
    {
      titles: "완전 추천",
      content:
        "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
      author: "아이유",
    },
    {
      titles: "완전 추천",
      content:
        "I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.",
      author: "환희",
    },
    {
      titles: "완전 추천",
      content:
        "Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.",
      author: "효신",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-gray-100 py-12 overflow-hidden backdrop-blur-lg"
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        Everyone is changing their life with Pocket.
      </h2>
      <p className="text-center text-xl font-sans mb-8">
        Thousands of people have doubled their net-worth in the last 30 days.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-16 pb-16 ">
        <div className="slow">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard
              key={index}
              titles={review.titles}
              content={review.content}
              author={review.author}
            />
          ))}
        </div>
        <div className="medium">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard
              key={index}
              titles={review.titles}
              content={review.content}
              author={review.author}
            />
          ))}
        </div>
        <div className="fast">
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard
              key={index}
              titles={review.titles}
              content={review.content}
              author={review.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  titles,
  content,
  author,
}: {
  titles: string;
  content: string;
  author: string;
}) {
  return (
    <figure className="animate-fade-in rounded-3xl bg-white p-6 shadow-md shadow-gray-900/5 my-6">
      <blockquote className="text-gray-900">
        <div className="flex">
          {/* 별 아이콘 */}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-5 w-5 fill-cyan-500"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <h1 className="mt-4 text-lg font-semibold leading-6">"{titles}"</h1>
        <p className="mt-4 text-lg font-semibold leading-6">{content}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-400">- {author}</figcaption>
    </figure>
  );
}
