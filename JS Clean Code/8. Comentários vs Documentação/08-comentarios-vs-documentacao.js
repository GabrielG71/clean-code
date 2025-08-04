async function register(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: "avatar is required" };
  if (!name) return { error: "name is required" };

  const userMail = getUserByEmail(email);
  if (userMail) {
    return { error: "email already used" };
  }

  // Converte a imagem para JPG para evitar incompatibilidades (Issue #1)
  const avatarJPG = convertImageToJPG(avatar);

  const user = await createUser({ email, name, avatar: avatarJPG });

  return { user };
}
