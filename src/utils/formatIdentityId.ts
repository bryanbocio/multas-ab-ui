export const format = (event: any): string => {
  const inputValue = event.target.value.replace(/\D/g, "");

  let formattedInputValue = "";
  if (inputValue.length > 0) {
    formattedInputValue = inputValue.slice(0, 3);
    if (inputValue.length > 3) {
      formattedInputValue += "-" + inputValue.slice(3, 10);
    }
    if (inputValue.length > 10) {
      formattedInputValue += "-" + inputValue.slice(10, 11);
    }
  }

  return formattedInputValue;
};

export const formatPhoneNumber = (inputNumber: string) => {
  const cleanedNumber = inputNumber.replace(/\D/g, "");
  const formattedNumber = cleanedNumber.replace(
    /(\d{0,3})(\d{0,3})(\d{0,4})/,
    (match, p1, p2, p3) => {
      let formatted = "";
      if (p1) formatted += `(${p1}`;
      if (p2) formatted += `) ${p2}`;
      if (p3) formatted += `-${p3}`;
      return formatted;
    }
  );
  return formattedNumber;
};
