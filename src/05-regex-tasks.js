/**
 * Returns the regexp that matches a GUID string representation
 * '{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}'
 */
function getRegexForGuid() {
  return /^{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}}$/;
}

/**
 * Returns the regexp that matches all the strings from first column
 * but none of them from the second
 *
 * Match: 'pit', 'spot', 'spate', 'slap two', 'respite'
 * Do not match: ' pt', 'Pot', 'peat', 'part'
 */
function getRegexForPitSpot() {
  return /p[^e]t/;
}

/**
 * Returns the password validator regex.
 * - At least minLength characters long
 * - Contains a lowercase letter
 * - Contains an uppercase letter
 * - Contains a number
 * - Valid passwords will only be alphanumeric characters (+ underscore)
 */
function getPasswordValidator(minLength) {
  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?!.*__)[A-Za-z0-9_]{${minLength},}$`,
  );
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
