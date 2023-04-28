export function displayMessage(container, message, style) {
  const feedback = document.getElementById(container);
  feedback.innerHTML = "";
  feedback.innerText = message;
  feedback.classList.add(style);
}
