document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");

  if (!form || !input) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = input.value.toLowerCase().trim();

    if (query.includes("mobile") && query.includes("accessories")) {
      window.location.href = "gridview.html";
    } else {
      window.location.href =
        "search.html?q=" + encodeURIComponent(query);
    }
  });
});
