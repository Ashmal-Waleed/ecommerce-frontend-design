// ===============================
// FILTER SIDEBAR TOGGLE
// ===============================
document.querySelectorAll('.productviewcol1-downarrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    const parent = arrow.closest('div');
    let next = parent.nextElementSibling;

    while (next && !next.querySelector('h6')) {
      next.classList.toggle('hidden');
      next = next.nextElementSibling;
    }
  });
});

// ===============================
// SHIP TO COUNTRY DROPDOWN
// ===============================
const shipBtn = document.querySelector('.selectcountrybtn');
const countryDropdown = document.querySelector('.countrydropdown');

if (shipBtn) {
  shipBtn.addEventListener('click', () => {
    countryDropdown.classList.toggle('show');
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('.selectcountry')) {
    countryDropdown?.classList.remove('show');
  }
});

// ===============================
// FOOTER LANGUAGE DROPDOWN
// ===============================
const langBtn = document.querySelector('.selectlangbtn');
const langDropdown = document.querySelector('.bfselectlang-dropdown');

if (langBtn) {
  langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('show');
  });
}

// ===============================
// PRICE RANGE SLIDER SYNC
// ===============================
const rangeInput = document.querySelector('.pricerang-slider input[type="range"]');
const minInput = document.getElementById('mintext');
const maxInput = document.getElementById('maxtext');

if (rangeInput) {
  rangeInput.addEventListener('input', () => {
    minInput.value = rangeInput.value;
  });
}

document.getElementById('apply-btn')?.addEventListener('click', () => {
  alert(`Price applied: ${minInput.value} - ${maxInput.value}`);
});

// ===============================
// GRID / LIST VIEW TOGGLE (UI)
// ===============================
const gridIcon = document.querySelector('.grid-icon');
const listIcon = document.querySelector('.list-icon');
const productContainer = document.querySelector('.gridviewproduct-container');

gridIcon?.addEventListener('click', () => {
  productContainer.classList.remove('list-view');
  productContainer.classList.add('grid-view');
});

listIcon?.addEventListener('click', () => {
  productContainer.classList.remove('grid-view');
  productContainer.classList.add('list-view');
});

// ===============================
// WISHLIST HEART TOGGLE
// ===============================
document.querySelectorAll('.product-row-icon svg').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});

// ===============================
// SEARCH BUTTON
// ===============================
document.querySelector('.srchbtn')?.addEventListener('click', () => {
  const searchValue = document.querySelector('.searchbox').value;
  if (searchValue.trim() === '') {
    alert('Please enter something to search');
  } else {
    alert(`Searching for: ${searchValue}`);
  }
});

// ===============================
// NEWSLETTER EMAIL VALIDATION
// ===============================
document.getElementById('newslettersection-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = e.target.querySelector('input');

  if (!emailInput.value.includes('@')) {
    alert('Please enter a valid email');
  } else {
    alert('Subscribed successfully!');
    emailInput.value = '';
  }
});
