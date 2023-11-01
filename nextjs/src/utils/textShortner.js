const title = 25
export default function textShortner(inputString, maxLength = title) {
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.slice(0, maxLength) + '...';
    }
  }

  