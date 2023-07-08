export default function handleAuthError(error: { code: string }): string {
  switch (error.code) {
    case "auth/wrong-password":
      return "Wrong password";
    case "auth/user-not-found":
      return "User not found";
    default:
      return "Error occurred";
  }
};
