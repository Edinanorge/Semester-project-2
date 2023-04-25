export function header() {
  const isLoggedIn = false;

  const visibleElements = document.querySelectorAll("[data-visible]");

  for (const element of visibleElements) {
    const visibility = element.dataset.visible;
    console.log(visibility);
    if (
      (visibility === "loggedIn" && isLoggedIn) ||
      (visibility === "loggedOut" && !isLoggedIn)
    ) {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  }
}
