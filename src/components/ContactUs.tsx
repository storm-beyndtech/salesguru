import { useState } from "react";
import s from '../pages/login/Login.module.css'

export default function ContactUs() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;


  const sendMessage = async (e: any) => {
    e.preventDefault()
    setError('')

    if(fullName.length < 5) return setError('Full name must be at least 5 characters')
    if(email.length < 5 || !email.includes('@')) return setError('Not a valid email address')
    if(fullName.length < 5) return setError('Message must be at least 5 characters')
    
    try {
      setLoading(true)
      const res = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ fullName, email, message})
      })
      const data = await res.json()

      if(res.ok) setSuccess(data.message) 
      else throw new Error(data.message)
    } catch (error: any) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
  }



  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-5 font-satoshi text-4xl font-bold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a product? Need
          details about our Business plan? Let us know.
        </p>
        <form onSubmit={sendMessage} className="space-y-8">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {!loading ? "Send message": "Sending..."}
          </button>
        </form>
        {error && <p className={s.formError}>{error}</p>}
        {success && <p className={s.formSuccess}>{success}</p>}
      </div>
    </section>
  );
}
