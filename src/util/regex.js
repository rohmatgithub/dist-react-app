export const handleCode = (event, setValue, maxLength) => {
  let value = event.target.value;
  // Hanya ambil angka
  value = value.replace(/[^a-zA-Z0-9]/g, "");
  value = value.toUpperCase();
  // Batasi panjang input hingga 20 digit

  if (maxLength === undefined) {
    maxLength = 20;
  }
  if (value.length > maxLength) {
    value = value.slice(0, maxLength);
  }
  setValue(value);
};

export const handleName = (event, setValue, maxLength) => {
    let value = event.target.value;
    // Hanya ambil angka
    value = value.replace(/[^a-zA-Z0-9 ]/g, "");
    // value = value.toUpperCase();
    // Batasi panjang input hingga 20 digit
  
    if (maxLength === undefined) {
      maxLength = 20;
    }
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setValue(value);
  };
  