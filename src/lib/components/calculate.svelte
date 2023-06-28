<script context="module">
 export function calculateTime(password) {
  console.log(password)
  if(password.length < 1)
  {
    return [0, "seconds"]
  }
  const characters = 95; 
  const attemptsPerSecond = 10e12; 
  
  const passwordLength = password.length;
  const combinations = Math.pow(characters, passwordLength);
  const seconds = combinations / attemptsPerSecond;
  
  const time = {
    seconds,
    minutes: seconds / 60,
    hours: seconds / 3600,
    days: seconds / (3600 * 24),
    years: seconds / (3600 * 24 * 365),
    decades: seconds / (3600 * 24 * 365 * 10)
  };

  let bestTimeToDisplay = [time["seconds"], "seconds"]
  for(const potentialTime in time)
  {
    if(time[potentialTime] > 1 && time[potentialTime] < bestTimeToDisplay[0])
    {
      bestTimeToDisplay = [time[potentialTime], potentialTime]
    }
  }
  return bestTimeToDisplay
}

</script>