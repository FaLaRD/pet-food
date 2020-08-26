'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const petFood = document.querySelectorAll('.pet-food__main');

  if (petFood) {

    petFood.forEach((food) => {
      
      food.addEventListener('click', (e) => {
        e.preventDefault();

        const foodOpt = e.target.closest('.pet-food__main');

        if (!foodOpt || foodOpt.classList.contains('pet-food__main--disabled')) return;

        foodOpt.classList.toggle('active');
      });

    });

  }
});
