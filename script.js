// Add event listener to nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Nav link clicked');
    });
});

// Add event listener to hero button
document.querySelector('.hero .btn').addEventListener('click', () => {
    console.log('Hero button clicked');
});
```

This project includes a responsive design, a hero section with a call-to-action button, a features section with icons and descriptions, a cards section with sample transaction data, and a footer with a copyright notice. The design is modern and clean, with a focus on ease of use and navigation.