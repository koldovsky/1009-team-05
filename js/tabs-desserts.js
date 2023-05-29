(function () {
    const products = [
      {
        id: "1",
        title: "Sweet Joy",
        price: "15$",
        imageUrl: "images/tabs/sweet-joy.png",
        category: "Desserts",
      },
      {
        id: "2",
        title: "Rose Sparkle",
        price: "15$",
        imageUrl: "images/tabs/rose-sparkle.png",
        category: "Desserts",
      },
      {
        id: "3",
        title: "Gentle Cloud",
        price: "12$",
        imageUrl: "images/tabs/gentle-cloud.png",
        category: "Desserts",
      },
      {
        id: "4",
        title: "Tropical Day",
        price: "18$",
        imageUrl: "images/tabs/tropical-day.png",
        category: "Desserts",
      },
      {
        id: "5",
        title: "Hazelnut",
        price: "12$",
        imageUrl: "images/tabs/hazelnut.png",
        category: "Desserts",
      },
      {
        id: "6",
        title: "Berry Mix",
        price: "13$",
        imageUrl: "images/tabs/berry-mix.png",
        category: "Desserts",
      },
      {
        id: "7",
        title: "Siesta",
        price: "15$",
        imageUrl: "images/tabs/siesta.png",
        category: "Desserts",
      },
      {
        id: "8",
        title: "Choco Cream",
        price: "11$",
        imageUrl: "images/tabs/choco-cream.png",
        category: "Desserts",
      },
      {
        id: "9",
        title: "Lemon & Lime",
        imageUrl: "images/tabs/lemon-lime.png",
        price: "6$",
        category: "Ice Cream",
      },
      {
        id: "10",
        title: "Blackberry",
        imageUrl: "images/tabs/blackberry.png",
        price: "7$",
        category: "Ice Cream",
      },
      {
        id: "11",
        title: "Mango",
        imageUrl: "images/tabs/mango.png",
        price: "5$",
        category: "Ice Cream",
      },
      {
        id: "12",
        title: "Lavender",
        imageUrl: "images/tabs/lavender.png",
        price: "8$",
        category: "Ice Cream",
      },
      {
        id: "13",
        title: "Vanilla",
        imageUrl: "images/tabs/vanilla.png",
        price: "4$",
        category: "Ice Cream",
      },
      {
        id: "14",
        title: "Chocolate",
        imageUrl: "images/tabs/chocolate.png",
        price: "5$",
        category: "Ice Cream",
      },
      {
        id: "15",
        title: "Strawberry",
        imageUrl: "images/tabs/strawberry_ice-cream.png",
        price: "5$",
        category: "Ice Cream",
      },

      {
        id: "16",
        title: "Pistachio",
        imageUrl: "images/tabs/pistachio.png",
        price: "5$",
        category: "Ice Cream",
      },
      {
        id: "17",
        title: "Strawberry",
        imageUrl: "images/tabs/strawberry.png",
        price: "10$",
        category: "Drinks",
      },
      {
        id: "18",
        title: "Caramel",
        imageUrl: "images/tabs/caramel.png",
        price: "8$",
        category: "Drinks",
      },
      {
        id: "19",
        title: "Berry Shake",
        imageUrl: "images/tabs/berry-shake.png",
        price: "12$",
        category: "Drinks",
      },
      {
        id: "20",
        title: "Choco-Choco",
        imageUrl: "images/tabs/choco-choco.png",
        price: "9$",
        category: "Drinks",
      },
      {
        id: "21",
        title: "Mango Shake",
        imageUrl: "images/tabs/mango-shake.png",
        price: "8$",
        category: "Drinks",
      },
      {
        id: "22",
        title: "Orange Shake",
        imageUrl: "images/tabs/orange-shake.png",
        price: "9$",
        category: "Drinks",
      },
      {
        id: "23",
        title: "Banana Shake",
        imageUrl: "images/tabs/banana-shake.png",
        price: "8$",
        category: "Drinks",
      },
      {
        id: "24",
        title: "Ice Latte",
        imageUrl: "images/tabs/ice-latte.png",
        price: "10$",
        category: "Drinks",
      },
    ];
    
    let currentCategory = "Desserts";
    function renderProducts(products) {
      const productsContainer = document.querySelector("#tabs__content");
      productsContainer.innerHTML = "";
      const filteredProducts = products.filter(
        (product) => product.category === currentCategory
      );
      for (const product of filteredProducts) {
        productsContainer.innerHTML += `
        <div class="tabs__content-box">
        <div class="tabs__content-box__image">
          <img src="${product.imageUrl}" alt="${product.title}">
          </div>
        <span class="tabs__content-box__heading">
        ${product.title} /
          <span class="tabs__content-box__heading_colored">${product.price}</span>
        </span>
      </div>`;
      }
    }
    
    renderProducts(products);
    document.querySelector(".desserts-category").addEventListener("click", (ev) => {
      clearActiveCategories();
      ev.target.classList.add('active');
      currentCategory = 'Desserts';
      renderProducts(products);
    });
    document.querySelector(".ice_cream-category").addEventListener("click", (ev) => {
      clearActiveCategories();
      ev.target.classList.add('active');
      currentCategory = 'Ice Cream';
      renderProducts(products);
    });
    document.querySelector(".drinks-category").addEventListener("click", (ev) => {
      clearActiveCategories();
      ev.target.classList.add('active');
      currentCategory = 'Drinks';
      renderProducts(products);
    });
    function clearActiveCategories() {
      const categoryButtons = document.querySelectorAll('.tabs__heading');
      for (const button of categoryButtons) {
      
          button.classList.remove('active');
        
      }
  
    }
  
  })();