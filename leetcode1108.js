/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
  return address.replaceAll(".", "[.]")
}
console.log(defangIPaddr("255.255.255.0"))