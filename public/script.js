function getToken() {
  const params = new URLSearchParams(window.location.search);
  return params.get("token");
}

const token = getToken();

if (token) {
  const deepLink = `trphone://reset-password?token=${token}`;

  // Try to open app
  window.location.href = deepLink;

  // After 1500ms, if app didn't open, show fallback
  setTimeout(() => {
    document.getElementById("fallback").style.display = "block";
  }, 1500);
} else {
  document.getElementById("fallback").style.display = "block";
}
