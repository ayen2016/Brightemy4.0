// Hamburger menu functionality


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  searchResults.style.display = 'none'; // Close search when hamburger is clicked
});

// Search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchButton = document.getElementById('search-button');

// Navigation data
const navData = [
  { "title": "Home", "link": "index.html" },
  { "title": "Course", "link": "Courses.html" },
  { "title": "Partners", "link": "Partners.html" },
  { "title": "About", "link": "About-Brightemy.html" },
  { "title": "Blog", "link": "Blog.html" },
  { "title": "Contact", "link": "Contact.html" },
  { "title": "Sponsor", "link": "Sponsor.html" },
  { "title": "Web Development", "link": "Web-Development-Course.html" },
  { "title": "Cyber Security & Online Safety", "link": "Cyber-Security-&-Online-Saftey-Course.html" },
  { "title": "Microsoft Office 365", "link": "Microsoft-Office-365-Course.html" },
  { "title": "Graphic Design", "link": "Graphic-Design-Course.html" },
  { "title": "Privacy Policy", "link": "Privacy-Policy.html" },
  { "title": "Terms & Conditions", "link": "Terms-&-Conditions.html" }
];

// Function to perform search and return results
function getSearchResults(query) {
  if (query === '') {
    return [];
  }
  
  return navData.filter(item => 
    item.title.toLowerCase().includes(query)
  );
}

// Function to display search results
function displaySearchResults(results) {
  if (results.length > 0) {
    searchResults.innerHTML = results
      .map(item => `<div class="search-result-item" data-link="${item.link}">${item.title}</div>`)
      .join('');
    searchResults.style.display = 'block';
    
    // Add click event to search result items
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-link');
      });
    });
  } else {
    searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    searchResults.style.display = 'block';
  }
}

// Function to handle search input (display results only)
function handleSearchInput() {
  const query = searchInput.value.toLowerCase().trim();
  
  if (query === '') {
    searchResults.style.display = 'none';
    return;
  }
  
  const results = getSearchResults(query);
  displaySearchResults(results);
}

// Function to handle search button click (navigate to first result)
function handleSearchButtonClick() {
  const query = searchInput.value.toLowerCase().trim();
  
  if (query === '') {
    return;
  }
  
  const results = getSearchResults(query);
  
  if (results.length > 0) {
    // Navigate to the first search result
    window.location.href = results[0].link;
  } else {
    // Display no results message
    displaySearchResults(results);
  }
}

// Event listeners
searchInput.addEventListener('input', handleSearchInput);
searchButton.addEventListener('click', handleSearchButtonClick);

// Close search results when clicking outside
document.addEventListener('click', function(event) {
  const searchContainer = document.getElementById('search-container');
  const isClickInsideSearch = searchContainer.contains(event.target);
  
  if (!isClickInsideSearch) {
    searchResults.style.display = 'none';
  }
});

// Close search results when window is resized
window.addEventListener('resize', function() {
  searchResults.style.display = 'none';
});



