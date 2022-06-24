module.exports = function toReadable(number) {
    const numbersArrayUpToTwenty  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozensArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const str = String(number)

    // remove extra spaces
    const clearSpaces = string => string.replace(/ +/g, ' ').trim()


    if (number < 20) return numbersArrayUpToTwenty[number]

    if (number >= 20 && number < 100) {
        if (str.slice(-1) != 0) {
            return `${dozensArr[str[0]]} ${numbersArrayUpToTwenty[str[1]]}`
        } else {
            return dozensArr[str[0]]
        }
    }

    if (number >= 100) {
        const hundreds = numbersArrayUpToTwenty[str[0]]
        const dozens = dozensArr[str[1]]
        const singleNum = numbersArrayUpToTwenty[str[2]]

        if (str.slice(-1) != 0) {

            if (str[1] >= 1 && str[1] < 2) {
                return clearSpaces(`${hundreds} hundred ${numbersArrayUpToTwenty[Number(str.substring(str.length - 2))]}`)
            }

            return clearSpaces(`${hundreds} hundred ${dozens} ${singleNum}`)
        } else {
            return clearSpaces(`${hundreds} hundred ${dozens}`)
        }
    }
}
