/**
 *
 * @param data full data object, array of charging locations
 * @returns the same array but ordered by distance ascending
 */
export const sortData = (data): [] => {
  const myClonedArray = [] as any;
  data.data.getAllChargePoints?.forEach((val) =>
    myClonedArray.push({ ...val }),
  );
  return myClonedArray.sort((a, b) =>
    Number(a.distance) < Number(b.distance) ? -1 : 1,
  );
};

/**
 *
 * @param distance distance from user of charging location
 * @returns distance plus unit of length
 */
export const kmConversion = (distance) => {
  if (distance >= 1000) {
    return distance / 1000 + 'km';
  } else {
    return distance + 'm';
  }
};

/**
 *
 * @param available availible charging points
 * @param total total charging points
 * @returns String representation of charging points
 *
 */
export const availableConstructer = (available, total) => {
  return available + '/' + total;
};
