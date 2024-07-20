import { useRef, useState } from "react";
import footer from "./footer.module.scss";

const FooterContact = () => {
  const [loading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(false);
  const [isEmail, setIsEmail] = useState({
    email: "",
  });
  const handleChage = (e: any) => {
    setIsEmail({
      ...isEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://leilani-blogs.vercel.app/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...isEmail,
          }),
        }
      );
      const data = await response.json();
      setIsEmail(data);
      if (response.ok) {
        setMsg(true);
      }

      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setInterval(()=>{
        setMsg(false);
      },500)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={footer.arrow}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChage}
            required
          />
          <button type="submit">
            {loading ? (
              <>
                <img src="/images/spinner.svg" />
              </>
            ) : (
              <>
                <img src="/images/cursor.png" alt="" style={{cursor:"pointer"}}/>
              </>
            )}
          </button>
        </div>
        <p style={{ color: "#fff", position:"absolute", marginTop:"-10px" }}>{msg && "Submitted!"}</p>
      </form>
    </>
  );
};

export default FooterContact;
