function updateUserRoute(requestBody, routeParams) {
  updateUserController(requestBody, routeParams);
}

function updateUserController(userData, userParams) {
  userRepository.update(userData, userParams);
}

const userRepository = {
  update(userData, userParams) {
    // Update logic here
  },
};
