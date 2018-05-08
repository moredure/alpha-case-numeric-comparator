const SET_FIRST_AS_SECOND = 1;
const SET_SECOND_AS_FIRST = -1;
const DO_NOTHING = 0;

/**
 * Compare two strings
 * @param  {String} first  [description]
 * @param  {String} second [description]
 * @return {Number}        [description]
 */
function sort1(first, second) {
  if (first === second) {
    return DO_NOTHING;
  } else {
    return sort2(first, second);
  }
}

/**
 * [sort2 description]
 * @param  {String} first  [description]
 * @param  {String} second [description]
 * @return {Number}        [description]
 */
function sort2(first, second) {
  if (isNaN(first) && isNaN(second)) {
    return sort3(first, second);
  } else if (isNaN(first) && !isNaN(second)) {
    return SET_FIRST_AS_SECOND;
  } else if (!isNaN(first) && isNaN(second)) {
    return SET_SECOND_AS_FIRST;
  } else {
    return first - second;
  }
}

/**
 * [sort3 description]
 * @param  {String} first  [description]
 * @param  {String} second [description]
 * @return {Number}        [description]
 */
function sort3(first, second) {
  const limit = Math.min(first.length, second.length);
  for (let position = 0; position < limit; position += 1) {
    if (first[position] !== second[position]) {
      return sort5(first[position], second[position]);
    }
  }
  return first.length - second.length;
}

/**
 * [sort5 description]
 * @param  {String} first  [description]
 * @param  {String} second [description]
 * @return {Number}        [description]
 */
function sort5(first, second) {
    if (isNaN(first) && isNaN(second)) {
        return sort4(first, second);
    } else if (!isNaN(first) && isNaN(second)) {
        return SET_SECOND_AS_FIRST;
    } else if (isNaN(first) && !isNaN(second)) {
        return SET_FIRST_AS_SECOND;
    } else {
        return first - second;
    }
}

/**
 * [sort4 description]
 * @param  {String} first  [description]
 * @param  {String} second [description]
 * @return {Number}        [description]
 */
function sort4(first, second) {
  if (isSameLetter(first, second)) {
    return compare(first, second);
  } else {
    return sort6(first, second);
  }
}

/**
 * [sort6 description]
 * @param  {[type]} first  [description]
 * @param  {[type]} second [description]
 * @return {[type]}        [description]
 */
function sort6(first, second) {
    if (isSameCase(first, second) || hasNoCase(first) || hasNoCase(second)) {
      return compare(first, second);
    } else {
      return compare(first.toLowerCase(), second.toLowerCase());
    }
}

/**
 * [isSameLetter description]
 * @param  {String}  first  [description]
 * @param  {String}  second [description]
 * @return {Boolean}        [description]
 */
function isSameLetter(first, second) {
  return first.toUpperCase() === second.toUpperCase()
}

/**
 * [isSameCase description]
 * @param  {String}  first  [description]
 * @param  {String}  second [description]
 * @return {Boolean}        [description]
 */
function isSameCase(first, second) {
  if (isUpperCase(first) && isUpperCase(second)) {
    return true;
  } else if (isLowerCase(first) && isLowerCase(second)) {
    return true;
  } else {
    return false;
  }
}

/**
 * [compare description]
 * @param  {String} first  comparable string
 * @param  {String} second comparable string
 * @return {Number} result of compare
 */
function compare(first, second) {
    return first > second ? SET_FIRST_AS_SECOND : SET_SECOND_AS_FIRST;
}

/**
 * Check if letter or string cannot be converted to another case
 * @param  {String}  first string
 * @return {Boolean} result
 */
function hasNoCase(first) {
  return first.toLowerCase() == first.toUpperCase();
}

/**
 * Check if string or letter in uppercase
 * @param  {String}  str string
 * @return {Boolean} result
 */
function isUpperCase(str) {
  return str.toUpperCase() === str;
}

/**
 * Check if string or letter in lowercase
 * @param  {String}  str string or letter
 * @return {Boolean} result
 */
function isLowerCase(str) {
  return str.toLowerCase() === str;
}

module.exports = sort1;
