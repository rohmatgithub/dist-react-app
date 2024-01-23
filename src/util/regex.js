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

export const handleNumber = (event, setValue, maxLength) => {
  let value = event.target.value;
  // Hanya ambil angka
  value = value.replace(/[^0-9]/g, "");

  if (maxLength === undefined) {
    maxLength = 11;
  }
  if (value.length > maxLength) {
    value = value.slice(0, maxLength);
  }
  setValue(value);
};

export const formatRupiah = (event, setValue, maxLength) => {
  let value = event.target.value;
  // Hanya ambil angka
  value = value.replace(/[^0-9]/g, "");

  if (maxLength === undefined) {
    maxLength = 11;
  }
  if (value.length > maxLength) {
    value = value.slice(0, maxLength);
  }
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  setValue(formatter.format(value));
};

export const unformatRupiah = (number) => {
  const numericValue = number.replace(/[^0-9]/g, "");
  return numericValue;
};
