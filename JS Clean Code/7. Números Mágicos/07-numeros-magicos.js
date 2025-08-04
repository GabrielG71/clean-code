function lookForUpdates() {
  // Logic to check for updates
}

setInterval(lookForUpdates, 30 * 60 * 1000); // Every 30 minutes

function calculateDiscount(price: number, discountPercentage: number): number {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}
