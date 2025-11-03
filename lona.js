document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentContainers = document.querySelectorAll('.content-container');

    /**
     * Shows the specified content container and updates the active navigation item.
     * @param {string} containerId - The ID of the content container to show (e.g., 'home-container').
     */
    function showContainer(containerId) {
        
        // 1. Hide all containers and remove 'active' class from all nav items
        contentContainers.forEach(container => {
            container.classList.remove('active');
        });
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // 2. Show the target container
        const targetContainer = document.getElementById(containerId);
        if (targetContainer) {
            targetContainer.classList.add('active');
        }
        
        // 3. Mark the corresponding nav item as active
        const activeNavItem = document.querySelector(`.nav-item[data-container="${containerId}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }

    // --- Event Listeners for Navigation ---
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 
            const containerId = item.getAttribute('data-container');
            showContainer(containerId);
        });
    });

    // --- Initial Load ---
    // Display the home container when the page loads
    showContainer('home-container');
});