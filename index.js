const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark")
      document.querySelectorAll(".content,.active,.portfolio-section, .service-card,.testimonial-card,.contact, .about, footer").forEach((el) => {
        el.classList.toggle("dark")
      })
      document.querySelectorAll("li a, .mobile-menu-btn").forEach((el) => {
        el.classList.toggle("light")
      })
    })

    