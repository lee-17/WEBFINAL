// Get references to the filter buttons container and the documents container
const filterButtonsContainer = document.querySelector('.filter');
const documentsContainer = document.querySelector('.docs');

// Get all the individual document file elements
// Using Array.from() to convert the HTMLCollection to an array for easier iteration
const documentFiles = Array.from(documentsContainer.querySelectorAll('.file'));

/**
 * Filters the document files based on the selected category.
 * @param {string} category - The data-filter value of the clicked button (e.g., 'labtest', 'xray', 'all').
 */
function filterDocuments(category) {
    let itemsFound = false; // Flag to check if any items match the filter

    // Iterate over each document file
    documentFiles.forEach(file => {
        // Check if the file element has the class corresponding to the selected category
        // The classList.contains() method is used to check for specific classes
        // For 'all' category, we show all files
        if (category === 'all' || file.classList.contains(category)) {
            file.style.display = 'flex'; // Show the item (using flex as per your CSS layout)
            itemsFound = true;
        } else {
            file.style.display = 'none'; // Hide the item
        }
    });

    // Optional: Provide user feedback if no items are found for a specific category
    // This uses a simple message box simulation, as alert() is not allowed.
    if (!itemsFound && category !== 'all') {
        showMessage(`No records found for category: "${category.toUpperCase()}".`, 'info');
    } else if (itemsFound && category !== 'all') {
        showMessage(`Showing records for category: "${category.toUpperCase()}".`, 'success');
    } else if (category === 'all') {
        // Clear message if 'All' is selected and items are visible
        const messageBox = document.getElementById('message-box');
        if (messageBox) {
            messageBox.classList.remove('opacity-100');
            messageBox.classList.add('opacity-0');
        }
    }
}

// Add an event listener to the filter buttons container
// This uses event delegation: one listener on the parent handles clicks on all its children buttons
filterButtonsContainer.addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'categ'
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('categ')) {
        // Remove 'active' class from all filter buttons
        // First, get all buttons within the filter container
        Array.from(filterButtonsContainer.querySelectorAll('.categ')).forEach(button => {
            button.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        event.target.classList.add('active');

        // Get the filter category from the 'data-filter' attribute of the clicked button
        const selectedCategory = event.target.dataset.filter;

        // Call the filter function with the selected category
        filterDocuments(selectedCategory);
    }
});

// Optional: Add a message box for user feedback
// This function creates or updates a simple message box at the bottom right of the screen
function showMessage(message, type = 'info') {
    let messageBox = document.getElementById('message-box');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.id = 'message-box';
        // Tailwind classes for styling the message box
        messageBox.className = 'fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-opacity duration-300 ease-in-out opacity-0';
        document.body.appendChild(messageBox);
    }

    messageBox.textContent = message;
    // Clear previous background color classes
    messageBox.className = messageBox.className.replace(/bg-\w+-\d+/g, '');
    // Add new background color based on message type
    if (type === 'success') {
        messageBox.classList.add('bg-green-500');
    } else if (type === 'error') {
        messageBox.classList.add('bg-red-500');
    } else { // Default to info
        messageBox.classList.add('bg-blue-500');
    }

    // Make the message box visible
    messageBox.classList.remove('opacity-0');
    messageBox.classList.add('opacity-100');

    // Clear any existing timeout to prevent multiple messages from interfering
    if (messageBox._timeoutId) {
        clearTimeout(messageBox._timeoutId);
    }

    // Set a timeout to hide the message box after 3 seconds
    messageBox._timeoutId = setTimeout(() => {
        messageBox.classList.remove('opacity-100');
        messageBox.classList.add('opacity-0');
    }, 3000);
}

// Initial filter to show all items when the page loads
// This ensures the "DASHBOARD" (All) view is active by default
document.addEventListener('DOMContentLoaded', () => {
    // Find the "all" button and add the 'active' class to it
    const allButton = document.querySelector('.filter button[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
    filterDocuments('all');
});