export const limit = (value: string, limit: number, end = '...'): string => {
  let limitedStr = value;

  if (value) {
    if (!limit) {
      return value;
    }

    if (value.length > limit) {
      limitedStr = value.substring(0, limit) + end;
    }
  }

  return limitedStr;
};

export const limitArray = (
  arr: string[],
  limit: number,
  end = '...',
): string => {
  const reArr = arr.filter((str, i) => {
    return i < limit;
  });

  return reArr.join(', ') + end;
};

export const makePath = (source: string, target: string): string => {
  const path = source + '/' + target;
  return path.replace('//', '/');
};
