export const formatDuration = (duration: number) => {
  const padTime = (time: number) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  // Convert seconds into minutes and take the whole part
  const minutes = Math.floor(duration / 60);

  // Get the seconds left after converting minutes
  const seconds = duration % 60;

  //Return combined values as string in format mm:ss
  return `${minutes}:${padTime(seconds)}`;
};
