window.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "prasetyo@root:~# whoami",
    "Name: Prasetyo Herwibowo",
    "Age: 18",
    "Location: East Java, Indonesia",
    "Specialty: Bug Hunting",
    "Kata Kata Hari Ini: Wong Liyo Ngerti Opo",
    "Operation System: Linux #59~22.04.1-Ubuntu x86_64 GNU/Linux",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  const output = document.getElementById("terminal-output");

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        output.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;

        // Auto scroll biar keliatan
        output.scrollTop = output.scrollHeight;

        setTimeout(typeLine, 40);
      } else {
        output.textContent += "\n";
        lineIndex++;
        charIndex = 0;

        // Scroll ke bawah lagi setelah baris selesai
        output.scrollTop = output.scrollHeight;

        setTimeout(typeLine, 300);
      }
    }
  }

  typeLine();
});
