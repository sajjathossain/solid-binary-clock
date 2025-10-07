import store from '../store';

export function getBinary(input: number) {
  const outputs = [
    Math.floor(input / 10)
      .toString(2)
      .padStart(4, '0'),
    (input % 10).toString(2).padStart(4, '0'),
  ];

  return outputs;
}

export function splitTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
}

export function refresh() {
  const date = new Date();
  const splits = splitTime(date);
  const hrBinary = getBinary(splits.hours);
  const minBinary = getBinary(splits.minutes);
  const secBinary = getBinary(splits.seconds);

  const result = [hrBinary, minBinary, secBinary];

  return store.setTimeSections(result);
}
