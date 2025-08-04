function getFirstFiveRatings(ratings) {
  return ratings.length >= 5 ? ratings.slice(0, 5) : null;
}

function sumFirstFiveRatings(ratings) {
  if (!ratings) {
    return { error: "ratings is required" };
  }

  const firstFiveRatings = getFirstFiveRatings(ratings);

  if (!firstFiveRatings) {
    return { error: "there must be at least 5 ratings" };
  }

  const ratingsSum = firstFiveRatings.reduce(
    (sum, rating) => sum + Number(rating),
    0
  );

  return {
    ratingsSum,
    created_at: Date.now(),
  };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];
console.log(sumFirstFiveRatings(appRatings));
