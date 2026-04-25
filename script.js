document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that have the hidden class
    const hiddenElements = document.querySelectorAll('.hidden');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once it has animated in
                // observer.unobserve(entry.target); 
            } else {
                // Remove the class when out of view if you want it to animate every time you scroll past
                entry.target.classList.remove('show');
            }
        });
    }, {
        // Trigger the animation when the element is 15% into the viewport
        threshold: 0.15 
    });

    // Tell the observer to watch each hidden element
    hiddenElements.forEach((el) => observer.observe(el));
});