const showErrors = (id, idMensaje) => {
  const elementNombre = document.getElementById(id);
  const elementError = document.getElementById(idMensaje);
  if (elementNombre.value === "" || elementError.value === null) {
    elementError.style.position = "relative";
    elementError.style.display = "flex";
    elementError.style.color = "rgba(254, 26, 26)";
    elementNombre.classList.add("error");
    if (elementNombre.id === "email") {
      elementError.innerHTML = "You must enter a username or email";
    } else {
      elementError.innerHTML = "You must enter a password";
    }
  } else {
    elementError.style.visibility = "hidden";
    elementNombre.classList.remove("error");
  }
};
