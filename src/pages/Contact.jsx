import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Basic validation
    if (form.current.message.value.length < 10) {
      setStatus("⚠️ Message must be at least 10 characters.");
      setLoading(false);
      return;
    }

    // 1️⃣ Send email to YOU
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        // 2️⃣ Auto-reply email to USER
        return emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );
      })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded"
          required
        />

        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>


        {status && <p className="text-center text-sm">{status}</p>}

      </form>
    </section>
  );
};

export default Contact;
