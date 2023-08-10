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
