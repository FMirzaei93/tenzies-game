export function SplitTime(time) {
  //

  const minute = ("0" + (Math.floor(time / 6000) % 60)).slice(-2);
  //--> 3)the quotient of the previous part will be minutes, but what if it exceeds 60?(considering 'hour' part - currently not needed)
  //So we need to devide it by 60 again, that will be (props.time / 100)/60 = (props.time / 6000)
  //Now the quotient will be added to 'hour' part. (not needed here)

  const second = ("0" + (Math.floor(time / 100) % 60)).slice(-2);
  //--> 2) These clusters of 100s are seconds, but what if the number exceeds 60?
  //For this reason we need the remainder of this number of 60, these way if the number is less than 60, the resualt is the same number, otherwise it will be the remainder and the quotient will be added to 'minute' part.

  const centisecond = ("0" + (time % 100)).slice(-2);
  //--> 1)props.time / 100: We want the number to be [0,100), so we calculate the remainer of the number of 100.
  //We want to see if we take clusters of 100 s as seconds(each second: 100 * 0.01 second), what would be the remainder, that is what we want to be written here, and the quotient will be added to 'second' part.
  //slice(-2) : the last 2 digits of a number

  const timeObject = {
    minute: minute,
    second: second,
    centisecond: centisecond,
  };

  return timeObject;
}
