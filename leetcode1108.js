/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
  // returns a defanged IP address
  return address.replaceAll(".", "[.]")
}
console.log(defangIPaddr("255.255.255.0"))
