export default function Contact() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          placeholder="Message"
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-foreground text-background px-6 py-2 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Send
        </button>
      </form>
    </div>
  );
}