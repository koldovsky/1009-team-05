document.querySelectorAll(".about__content-conclusion-faq-accordion-item").forEach(activeAccordionItem => {
    activeAccordionItem.addEventListener("click", () => {
        document.querySelectorAll(".about__content-conclusion-faq-accordion-item").forEach(accordionItem => {
            if (accordionItem !== activeAccordionItem) {
                accordionItem.classList.remove("active");
            }
        });

        activeAccordionItem.classList.toggle("active");
    });
})

