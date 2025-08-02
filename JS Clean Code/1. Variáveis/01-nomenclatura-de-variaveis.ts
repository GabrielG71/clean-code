const userFollowersLevels = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getUserData(req, res) {
  const githubUsername = String(req.query.username);

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const responseGithubUser = await fetch(
    `https://api.github.com/users/${githubUsername}`
  );

  if (responseGithubUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`,
    });
  }

  const dataGithubUser = await responseGithubUser.json();

  const orderUserFollowersLevels = userFollowersLevels.sort(
    (a, b) => b.followers - a.followers
  );

  const userFollowersCategory = orderUserFollowersLevels.find(
    (i) => dataGithubUser.followers >= i.followers
  ) || { title: "No Category" };

  const result = {
    githubUsername,
    category: userFollowersCategory.title,
  };

  return result;
}

getUserData(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
