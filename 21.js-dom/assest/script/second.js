
  const texts = document.querySelectorAll(".text");

     const plusBtn = document.querySelectorAll(".btn")[0];


  const minusBtn = document.querySelectorAll(".btn")[1];



      const applyBtn = document.querySelector(".apply-btn");
  const colorInput = document.querySelector(".color-input"); 


  let size = 15;  //bunu evvel 0nan goturdunm alem deydi bir birnie






 
  plusBtn.addEventListener("click", () => {
    
    size += 2;
    texts.forEach(text => text.style.fontSize = `${size}px`);
  });



      minusBtn.addEventListener("click", () => {
    size -= 2;
       texts.forEach(text => text.style.fontSize = `${size}px`);
  });

             applyBtn.addEventListener("click", () => {
    texts.forEach(text => text.style.color = colorInput.value);
  });

