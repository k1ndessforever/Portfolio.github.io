       // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        const html = document.documentElement;

        // Store theme preference in memory (will reset on page refresh)
        let currentTheme = 'light';
        html.setAttribute('data-theme', currentTheme);
        updateThemeUI(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            updateThemeUI(newTheme);
        });

        function updateThemeUI(theme) {
            if (theme === 'dark') {
                themeIcon.src = 'icons/Light Mode.png';
                themeIcon.alt = 'Light mode';
                themeText.textContent = 'Light';
            } else {
                themeIcon.src = 'icons/Dark Mode.png';
                themeIcon.alt = 'Dark mode';
                themeText.textContent = 'Dark';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 2px 20px var(--nav-shadow)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });