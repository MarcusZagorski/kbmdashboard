import { useState, useEffect } from "react";
import "./Quote.css";
import getQuote from "../../api/getQuote";

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const data = await getQuote();

        if (data) {
          setQuote(data);
        }
      } catch (err) {
        console.error("Error fetching Quotes", err);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quote__container">
      <h2>Quote Of The Day</h2>

      {quote !== null && (
        <>
          <p>{quote.quote}</p>
          <em>{quote.author}</em>
        </>
      )}
    </div>
  );
};

export default Quote;
