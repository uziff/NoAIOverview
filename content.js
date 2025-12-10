function removeOverview() {
    const headings = document.querySelectorAll('h1, h2, h3, div[role="heading"]');
    headings.forEach(heading => {
        if (heading.innerText.includes("AI Overview") ||
            heading.innerText.includes("Panoramica AI") ||
            heading.innerText.includes("Generative AI")) {
            let container = heading.closest('.g') || heading.closest('div[data-hveid]') || heading.parentElement.parentElement;
            if (container) {
                container.style.display = 'none';
                console.log("Removed AI Overview.");
            }
        }
    });

    const specificSelectors = [
        '.M8OgIe',
        'div[jsname="tJHJj"]',
    ];

    specificSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.style.display = 'none');
    });
}

removeOverview();
const observer = new MutationObserver((mutations) => {
    removeOverview();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
