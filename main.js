window.onload = function() {
  document.querySelectorAll("nav a").forEach((a) => {
    a.addEventListener("click", function(){
      // Pages
      document.querySelectorAll("div.page").forEach((div) => {
        div.classList.add("hidden")
      });
      document.querySelector(`div#${this.name}`).classList.remove("hidden");
      document.querySelector("main").scrollTop = 0;
      // Links
      document.querySelectorAll("nav a").forEach((div) => {
        div.classList.remove("selected")
      });
      this.classList.add("selected");
    });
  });
};