function getBallColor(n) {
    if (n <= 10) return "var(--yellow)";
    if (n <= 20) return "var(--blue)";
    if (n <= 30) return "var(--red)";
    if (n <= 40) return "var(--gray)";
    return "var(--green)";
}

function generateLottoNumbers() {
    const nums = [];
    while (nums.length < 6) {
        const n = Math.floor(Math.random() * 45) + 1;
        if (!nums.includes(n)) nums.push(n);
    }
    return nums.sort((a, b) => a - b);
}

document.getElementById("generate").addEventListener("click", () => {
    const nums = generateLottoNumbers();
    const box = document.getElementById("result");

    box.innerHTML = nums
      .map((n, i) =>
        `<span class="number"
            style="background:${getBallColor(n)}; animation-delay:${i * 0.1}s;">
            ${n}
        </span>`
      )
      .join("");
});

/* 🌙 다크모드 변경 */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
