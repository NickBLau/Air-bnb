document.querySelector(".destinationslist").addEventListener("click", (e) => {
    let destinationsId = e.target.closest("figure").attributes.id.value;
    if (e.target.classList.contains("fa-heart")) {
      if (!localStorage.getItem(destinationsId, destinationsId)) {
        localStorage.setItem(destinationsId, destinationsId);
        e.target.classList.remove("fa-regular");
        e.target.classList.add("fa-solid");
      } else {
        localStorage.removeItem(destinationsId);
        e.target.classList.remove("fa-solid");
        e.target.classList.add("fa-regular");
      }
    }
  })
  