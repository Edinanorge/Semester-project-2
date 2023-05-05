import { updateProfile } from "../api/profile/update.mjs";
import { load } from "../storage/load.mjs";

export function submitUpdateProfileAvatarForm() {
  const form = document.querySelector("#updateProfileAvatarForm");

  if (form) {
    let { name } = load("user");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const user = Object.fromEntries(formData.entries());
      user.name = name;

      updateProfile(user);
      location.reload();
    });
  }
}
