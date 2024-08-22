export default function Footer() {
  return (
    <footer className="flex justify-between">
      <p className="bg-white text-gray-400 p-4 text-center">
        © Copyright 2024. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Email address"
          className="h-11 w-56 rounded-xl px-4 py-2 placeholder-gray-300 text-gray-900 bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        ></input>
        <button className="h-11 w-40 rounded-xl bg-sky-500 text-white hover:bg-sky-400">
          Join our newsletter
        </button>
      </div>
    </footer>
  );
}
