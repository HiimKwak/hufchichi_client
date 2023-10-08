export default function useDate(date: Date) {
  const currentDate = new Date(date);
  return {
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
  };
}
