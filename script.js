function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png")
      //@
      document.querySelector("#profile p").textContent = "@bgirl1995_";
      //links
      document.getElementById("trabalho-link").textContent = "🔥OnlyFans😈";
      document.getElementById("trabalho-link").href = "https://onlyfans.com/";
      document.getElementById("ideias-link-2").textContent = "💸PIX🤑";
      document.getElementById("ideias-link-2").href = "https://PIX.com";
      document.getElementById("ideias-link-3").textContent = "Novo Texto no Modo Escuro";
      document.getElementById("ideias-link-3").href = "https://PIX.com";
      document.getElementById("ideias-link-4").textContent = "Novo Texto no Modo Escuro";
      document.getElementById("ideias-link-4").href = "https://PIX.com";
      //icons
      document.getElementById("facebook-link").href = "https://www.facebook.com/nana.margera";

      document.getElementById("whatsapp-link").href = "https://novolinkmodoescuro.com/whatsapp";

      document.getElementById("instagram-link").href = "https://www.instagram.com/bgirl1995_/";
    
      document.getElementById("email-link").href = "mailto:Nanaahsantos5@gmail.com";
   
     
      
      

      
    
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
      //@
      document.querySelector("#profile p").textContent = "@22segundos_";
      //links
      document.getElementById("trabalho-link").textContent = "Mais Sobre o Meu Trabalho 📸";
      document.getElementById("trabalho-link").href = "https://vinteedoissegundos.mypixieset.com/";
      document.getElementById("ideias-link-2").textContent = "Novo Texto no Modo Claro";
      document.getElementById("ideias-link-2").href = "https://outrolinkmodoclaro.com";
      document.getElementById("ideias-link-3").textContent = "Novo Texto no Modo Claro";
      document.getElementById("ideias-link-3").href = "https://outrolinkmodoclaro.com";
      document.getElementById("ideias-link-4").textContent = "Novo Texto no Modo Claro";
      document.getElementById("ideias-link-4").href = "https://outrolinkmodoclaro.com";
      //icons
      document.getElementById("facebook-link").href = "https://www.facebook.com/nana.margera";
     
      document.getElementById("whatsapp-link").href = "https://wa.me/5511988481841";

      document.getElementById("instagram-link").href = "https://www.instagram.com/22segundos_/";
    
      document.getElementById("email-link").href = "mailto:Elainebarauna.1995@outlook.com";
      
    }
    
  }