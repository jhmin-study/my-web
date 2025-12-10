function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const n = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(n)) numbers.push(n);
    }
    return numbers.sort((a, b) => a - b);
}

document.getElementById('generate').addEventListener('click', () => {
    const nums = generateLottoNumbers();
    const resultBox = document.getElementById('result');

    resultBox.innerHTML = nums
        .map((n, idx) => 
            `<span class="number" style="animation-delay:${idx * 0.08}s">${n}</span>`
        )
        .join("");
});

/* 🌙 다크모드 토글 */
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // 아이콘 변경
    toggleBtn.textContent = 
        document.body.classList.contains('dark') ? "☀️" : "🌙";
});
