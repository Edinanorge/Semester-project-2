import { login } from "../api/auth/login.mjs";
import { displayMessage } from "../api/helpers..mjs";

export function submitLoginForm() {
  const form = document.querySelector("#loginForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData.entries());
      try {
        await login(email, password);
        setTimeout(() => {
          location.href(`/profile?name=${email}`);
        }, 300);
      } catch (error) {
        displayMessage("loginFeedback", error.message, "error");
      }
    });
  }
}
