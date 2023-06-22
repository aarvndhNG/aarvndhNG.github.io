// Function to generate a unique ID for each painting
function generatePaintingID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to filter paintings by ID
function filterPaintingsByID(id) {
  const paintings = document.querySelectorAll('.painting');

  paintings.forEach(painting => {
    const paintingID = painting.dataset.id;

    if (id === '' || paintingID === id) {
      painting.style.display = 'block'; // Show the painting
    } else {
      painting.style.display = 'none'; // Hide the painting
    }
  });
}

// Usage example:
const paintingID = generatePaintingID(); // Generate a unique ID
filterPaintingsByID(paintingID); // Filter paintings by the generated ID

// Example painting data
const paintings = [
  {
    id: generatePaintingID(), // Generate a unique ID for each painting
    title: 'Sunset Serenade',
    image: '/Leonardo_Diffusion_Spidermanin_cyberpunk_style_neon_glowing_m_1 (1).jpg',
    category: 'landscape',
    date: '2022-05-15',
    description: 'A serene painting capturing the beauty of a sunset over the ocean.'
  },
  {
    id: generatePaintingID(), // Generate a unique ID for each painting
    title: 'Nature\'s Symphony',
    image: 'nature.jpg',
    category: 'landscape',
    date: '2022-08-10',
    description: 'Vibrant colors and intricate details depict the harmonious symphony of nature.'
  },
  {
    id: generatePaintingID(), // Generate a unique ID for each painting
    title: 'Abstract Dreams',
    image: 'abstract.jpg',
    category: 'abstract',
    date: '2022-07-01',
    description: 'An abstract painting that sparks the imagination and invites contemplation.'
  },
  // Add more paintings as needed
];

const paintingsContainer = document.getElementById('paintings');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Function to filter paintings based on category
function filterPaintings(category) {
  return category === 'all' ? paintings : paintings.filter(painting => painting.category === category);
}

// Function to sort paintings based on sort option
function sortPaintings(sortOption) {
  const sortedPaintings = [...paintings];

  if (sortOption === 'title') {
    sortedPaintings.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'date') {
    sortedPaintings.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return sortedPaintings;
}

// Function to render paintings on the page
function renderPaintings(paintingsData) {
  paintingsContainer.innerHTML = '';

  paintingsData.forEach(painting => {
    const paintingElement = document.createElement('div');
    paintingElement.classList.add('painting');
    paintingElement.dataset.id = painting.id; // Set the painting ID as a data attribute

    const imageElement = document.createElement('img');
    imageElement.src = painting.image;
    imageElement.alt = painting.title;

    const titleElement = document.createElement('h2');
    titleElement.textContent = painting.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = painting.description;

    const timeElement = document.createElement('p');
    timeElement.classList.add('upload-date');
    timeElement.textContent = 'Recently uploaded';

    const requestButton = document.createElement('button');
    requestButton.classList.add('request-button');
    requestButton.textContent = 'Request';
    requestButton.dataset.instagram = 'https://www.instagram.com/aarvndh'; // Replace with your Instagram URL

    paintingElement.appendChild(imageElement);
    paintingElement.appendChild(titleElement);
    paintingElement.appendChild(descriptionElement);
    paintingElement.appendChild(timeElement);
    paintingElement.appendChild(requestButton);

    paintingsContainer.appendChild(paintingElement);
  });

  // Attach click event listener to each new request button
  const newRequestButtons = document.querySelectorAll('.request-button');
  newRequestButtons.forEach(button => {
    button.addEventListener('click', () => {
      const instagramURL = button.dataset.instagram;
      window.open(instagramURL, '_blank');
    });
  });
}

// Initial rendering of paintings
renderPaintings(paintings);

// Event listeners for filter and sort options
filterSelect.addEventListener('change', function () {
  const category = this.value;
  const filteredPaintings = filterPaintings(category);
  renderPaintings(filteredPaintings);
});

sortSelect.addEventListener('change', function () {
  const sortOption = this.value;
  const sortedPaintings = sortPaintings(sortOption);
  renderPaintings(sortedPaintings);
});

searchButton.addEventListener('click', () => {
  const searchID = searchInput.value.trim();
  filterPaintingsByID(searchID);
});
