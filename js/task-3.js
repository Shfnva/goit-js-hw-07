const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const value = nameInput.value.trim();

  if (value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = value;
  }
});
