function toggleArticle(articleId) {
    // Hide all articles first
    document.querySelectorAll("article").forEach((article) => {
      article.style.display = "none";
    });
  
    // Show the selected article
    const selectedArticle = document.getElementById(articleId);
    if (selectedArticle) {
      selectedArticle.style.display = "block";
    }
  }
  