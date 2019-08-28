const joinButton = document.getElementById("join-button");

joinButton.addEventListener("click", function() {
    // e.preventDefault();
    document.querySelector(".how-to-join").scrollIntoView({
        behavior: "smooth"
      });
});