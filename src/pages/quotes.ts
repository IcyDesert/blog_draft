export const quotes: string[] = [
    "温馨的光境不过借出到期拿回吗<br>等不到下一代 是吗",
    "过往的回归分析<br>永不能成为<br>未来的无偏估计",
    "Fight or flight?",
    "人是一根会思考的芦苇",
    "内心强大者从不吝惜赞美",
    "《上海交通大学生存手册》！"
]

export function generate() {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerHTML = randomQuote;
    }

}