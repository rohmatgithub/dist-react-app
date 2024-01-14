export const formatDatetime = (datetimeStr) => {
  return datetimeStr
    ? new Date(datetimeStr).toISOString().slice(0, 19).replace("T", " ")
    : "";
};
