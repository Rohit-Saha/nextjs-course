import Image from "next/image";
import { useRef, useState } from "react";

const EventComponent = ({ data }) => {
  const emailRef = useRef();
  const [message, setMessage] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", emailRef.current.value);
    fetch("/api/email-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailRef.current.value, eventId: data.id }),
    }).then(async (response) => {
      const res = await response.json();
      console.log(res);
      setMessage(res.message);
      if (response.ok) {
        emailRef.current.value = "";
      }
    });
  };
  return (
    <div className="event-detail">
      <h2>{data.title}</h2>
      <Image src={data.image} alt={data.title} width={1000} height={500} />

      <p>{data.description}</p>
      <form onSubmit={handleOnSubmit}>
        <label>Get your email registered</label>
        <div>
          <input type="email" name="email" ref={emailRef} />
          <button type="submit">Submit</button>
        </div>
        {message && <p className="info-message">{message}</p>}
      </form>
    </div>
  );
};

export default EventComponent;
