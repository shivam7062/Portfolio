import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form";


const Contact = () => { 

   const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
   
    const sendEmail = async (data) => {
    try {     
   await emailjs.send (
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    data,
    import.meta.env.VITE_PUBLIC_KEY
  )
    toast.success("Message sent successfully! ✅", {
      position: "top-right",
      autoClose : 3000,
      hideProgressBar : false,
      closeOnClick : true,
      pauseOnHover : true,
      draggable : true,
      theme : "dark"
    });
    reset();
    } catch (error) {
      console.log(error)
      toast.error("Failed to send Message, Please try again ❎", {
      position: "top-right",
      autoClose : 3000,
      hideProgressBar : false,
      closeOnClick : true,
      pauseOnHover : true,
      draggable : true,
      theme : "dark"
    });
    }
  }

  return (
   <div className="flex flex-col items-center py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8">

   <ToastContainer />

     {/* Heading */}
      <div className='text-center mb-8'>
       <h2 className='text-2xl sm:text-3xl font-semibold text-white'>CONTACT</h2>
       {/*Heading  underline */}
       <div className='w-32 h-1 bg-[#8245ec] mx-auto mt-2'></div>
       {/* paragraph */}
       <p className='text-gray-400 mt-4 text-sm sm:text-base font-semibold'>I'd love to hear from you - reach out for any opportunities or questions!</p>
      </div>

      {/* Contact Form */}
      <div className='mt-4 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
      {/* Contact heading */}
      <h3 className='text-xl font-semibold text-white text-center'>Connect With Me 🚀</h3>
      {/* Input fields */}
    <form onSubmit={handleSubmit(sendEmail)} className='mt-4 flex flex-col space-y-3'>
      {/* Email field */}
      <input type='email' placeholder='Your Email' disabled={isSubmitting} className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' {...register("email", { required: { value: true, message: "this field is required" }, minLength: { value: 8, message: "Min Length is 8" }, maxLength: { value: 100, message: "Max Length is 100" },  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}})} />
      {errors.email && (<span className="text-red-500 text-sm mt-1">{errors.email.message}</span>)}
      {/* Name field  */}
      <input type='text' placeholder='Your Name' disabled={isSubmitting} className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' {...register("user_name", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "Min Length is 3" }, maxLength: { value: 20, message: "Max Length is 20" } })} />
      {errors.user_name && (<span className="text-red-500 text-sm mt-1">{errors.user_name.message}</span>)}
      {/* Subject field  */}
      <input type='text' placeholder='Subject' disabled={isSubmitting} className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' {...register("subject", { required: { value: true, message: "this field is required" }, minLength: { value: 5, message: "Min Length is 5" }, maxLength: { value: 40, message: "Max Length is 40" } })} />
      {errors.subject && (<span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>)}
      {/* Message field  */}
      <textarea rows={4} placeholder='Message' disabled={isSubmitting} className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' {...register("message", {minLength: { value: 10, message: "Min Length is 10" }, maxLength: { value: 255, message: "Max Length is 255" } })} />
      {errors.message && (<span className="text-red-500 text-sm">{errors.message.message}</span>)}
       {/* Send button */}
      <button type='submit' disabled={isSubmitting} className={"mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"}>
      {isSubmitting ? "Processing..." : "Send"}
      </button>
    </form>
      </div>
    
    </div>
  )
}

export default Contact





