
// ScrollReveal effect
document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.glow-border', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom'
  });

  // Typing effect
  const text = "Hi, I'm Dev Barman, a Web Developer!";
  let index = 0;
  const typeText = () => {
    if (index < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  };
  typeText();
});
