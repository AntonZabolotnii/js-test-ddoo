/**
 * Generates random integer number from 0 to (including) max
 *
 * @private
 * @param {Number} max
 * @return {Number}
 */
function getRandomInteger(max) {
  return Math.ceil( -1 + Math.random()*(max + 1) );
}

/**
 * Get random year
 *
 * @private
 * @param {Number} [yearsBack = 0] Set how many years back from now
 * @return {Number}
 */
function getRandomYear(yearsBack = 0) {
  return (new Date()).getFullYear() - getRandomInteger(yearsBack);
}

/**
 * Get random month for Date constructor.
 * Valid numbers are from 0 to 11
 *
 * @private
 * @return {Number}
 */
function getRandomMonth() {
  return getRandomInteger(11);
}

/**
 * Get random day of the month.
 * It doesn't matter that some months have less that 31
 *
 * @private
 * @return {Number}
 */
function getRandomDay() {
  return getRandomInteger(31);
}

/**
 * Generates input data. See example for the structure
 *
 * @param {Number} [length = 1000]
 * @param {Number} [maxValue = 10] Maximum value of `value` field
 * @example
 * generateInputData()
 *
 * [
 *   {
 *     "date": "2017-04-07T21:00:00.000Z",
 *     "value": 2
 *   }
 *   ...
 *   ...
 *   {
 *     "date": "2015-08-07T21:00:00.000Z",
 *     "value": 10
 *   }
 * ]
 * @return {Array<Object>}
 */
function generateInputData(length = 1e3, maxValue = 10) {
  const data = [];

  for (let i = 0; i < length; i++) {
    data.push({
      date: new Date(getRandomYear(), getRandomMonth(), getRandomDay()).toISOString(),
      value: getRandomInteger(maxValue)
    });
  }

  return data;
}

module.exports = generateInputData;