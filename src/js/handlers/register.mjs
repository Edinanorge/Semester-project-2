import { register } from "../api/auth/register.mjs";

export function submitRegisterForm() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const { name, email, password, avatar } = Object.fromEntries(formData.entries());

      register(name, email, password, avatar);
      form.reset();
    });
  }
}
