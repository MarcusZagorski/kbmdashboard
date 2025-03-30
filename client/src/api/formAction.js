function formAction(e) {
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData);

  formValues.recurring = formValues.recurring === "yes" ? true : false;

  return formValues;

  // fetch("http://localhost:3000/expenses", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formValues),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Expense has been added!", data);
  //     handleAddExpense(data);
  //     form.reset();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

export default formAction;
