const getQuote = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Quote could not be fetched");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getQuote;
