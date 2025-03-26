document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation items
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
            link.classList.add('text-white');
            link.classList.remove('text-gray-300');
        }
    });
    
    // Add copy functionality to code blocks
    document.querySelectorAll('pre').forEach(block => {
        // Create copy button
        const button = document.createElement('button');
        button.className = 'copy-button absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 text-white rounded opacity-50 hover:opacity-100 transition-opacity';
        button.textContent = 'Copy';
        
        // Make pre position relative for absolute positioning of button
        block.style.position = 'relative';
        block.appendChild(button);
        
        button.addEventListener('click', () => {
            const code = block.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Could not copy text: ', err);
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });
    
    // Add table of contents generator
    const tocContainer = document.getElementById('table-of-contents');
    if (tocContainer) {
        const headings = document.querySelectorAll('.doc-content h2, .doc-content h3');
        if (headings.length > 0) {
            const toc = document.createElement('ul');
            toc.className = 'space-y-2';
            
            headings.forEach((heading, index) => {
                // Add ID to heading if doesn't exist
                if (!heading.id) {
                    heading.id = `heading-${index}`;
                }
                
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${heading.id}`;
                link.textContent = heading.textContent;
                link.className = heading.tagName === 'H2' 
                    ? 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 pl-4 text-sm';
                
                listItem.appendChild(link);
                toc.appendChild(listItem);
            });
            
            tocContainer.appendChild(toc);
        } else {
            tocContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-sm">No headings found on this page.</p>';
        }
    }
    
    // Enable dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark ? 'true' : 'false');
        });
        
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.documentElement.classList.add('dark');
        }
    }
}); 