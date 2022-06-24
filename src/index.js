module.exports = function toReadable(number) {
    const numbersArrayUpToTwenty  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const dozensArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const str = String(number)


    if (number < 20) return numbersArrayUpToTwenty[number]

    if (number >= 20 && number < 100) {
        if (str.slice(-1) != 0) {
            return `${dozensArr[str[0]]} ${numbersArrayUpToTwenty[str[1]]}`
        } else {
            return dozensArr[str[0]]
        }
    }

}
