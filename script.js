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
        .map(n => `<span class="number">${n}</span>`)
        .join("");
});
