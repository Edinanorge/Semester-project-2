import { login } from "../api/auth/login.mjs";

export function submitLoginForm() {
  const form = document.querySelector("#loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData.entries());

      login(email, password);
      form.reset();
    });
  }
}
