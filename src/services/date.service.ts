export const dateLocalFormat = (date: string) => {
  return new Intl.DateTimeFormat('dk-DK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date));
};
