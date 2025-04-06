
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});



document.querySelector('.read-more-btn').addEventListener('click', function() {
    const extraContent = document.querySelector('.extra-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
      extraContent.style.display = 'block';
      readMoreBtn.textContent = 'Read Less';
    } else {
      extraContent.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  });

  


  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  
  function moveSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;

      const newTransformValue = -currentIndex * 100;
      document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
  }