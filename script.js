document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-y");
        const answer = item.querySelector(".answer");
        const arrow = item.querySelector(".arrow");

        question.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Close all open answers
            document.querySelectorAll(".faq-item").forEach(i => {
                i.classList.remove("active");
                i.querySelector(".answer").style.maxHeight = null;
                i.querySelector(".arrow").classList.remove("rotate");
            });

            if (!isActive) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                arrow.classList.add("rotate");
            }
        });
    });
});
