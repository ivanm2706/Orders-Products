export const getDate = (date: Date) => date.toLocaleString(
  'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
);

export const getShortLongDate = (dateStr: Date, type: 'short' | 'long') => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return type === 'short'
    ? `${day}/${month}`
    : `${day}/${month}/${year}`;
};

export const getTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${hours}:${minutes}`;
};
