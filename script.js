/*
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
  // Sidebar öğelerine tıklama olayları ekle
  document.querySelectorAll(".sidebar-item").forEach((item, index) => {
    item.addEventListener("click", () => {
      toggleArticle(`article-${index + 1}`);
    });
  });

  */

  document.getElementById('card1').addEventListener('click', function() {
    window.location.href = 'https://medium.com/@harunzsln0/git-ve-github-ile-sürüm-kontrolüne-giriş-85c3c4090eff';
  });

 