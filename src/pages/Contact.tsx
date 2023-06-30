import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div
      id="contact"
      className="h-screen w-screen bg-[url(/src/assets/bg-about.jpg)] bg-cover py-11 flex flex-col justify-evenly md:gap-[200px] lg:justify-evenly"
    >
      <h1 className="text-3xl md:text-5xl text-yellow-500 text-center font-semibold tracking-wider mb-8">
        CONTACT US
      </h1>
      <div className="mx-auto text-center">
        <label
          htmlFor="email"
          className="text-yellow-500 text-xl md:text-3xl text-center"
        >
          Subscribe to our newsletter
        </label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="example@mail.com"
          className="w-[60vw] border-none rounded-lg py-3 px-5 outline-none text-lg"
        />
      </div>
      <div className="text-yellow-500 text-lg md:text-xl font-semibold mx-auto text-left">
        <p>
          <AiOutlineInstagram className="inline mb-1" /> instagram.com/ditto
        </p>
        <p>
          <HiOutlineMail className="inline mb-1" /> restaurant@ditto.com
        </p>
        <p>
          <AiOutlinePhone className="inline mb-1" /> 11-1111-1111
        </p>
      </div>
    </div>
  );
}

export default Contact;
