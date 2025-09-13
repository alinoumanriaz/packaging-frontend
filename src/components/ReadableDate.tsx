export const formatDate = (dateInput: string | number) => {
  const date =
    typeof dateInput === "string" && !isNaN(Number(dateInput))
      ? new Date(Number(dateInput)) // numeric string (timestamp)
      : new Date(dateInput);        // ISO string or number

  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};