function obscureCreditCard(cardNumber) {
  if (cardNumber.length < 12 || cardNumber.length > 16) {
    return "Invalid Credit Card";
  }

  const visiblePart = cardNumber.slice(-4);
  const obscuredPart = "*".repeat(cardNumber.length - 4);
  return obscuredPart + visiblePart;
}

module.exports = obscureCreditCard;
