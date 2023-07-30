window.onscroll=function(){
    myFunction()
  }
  function myFunction(){
          if (document.documentElement.scrollTop > 70 ){
          
              document.getElementsByClassName("nav")[0].style.backgroundColor="#061C2A";
              document.getElementById("navlink").style.backgroundColor="#061C2A";
  
          }
          else{
              document.getElementsByClassName("nav")[0].style.backgroundColor="#060C22";
              document.getElementById("navlink").style.backgroundColor="#060C22";
  
              
          }
  
  }

  const navIconToggle = document.querySelector('.nav-icon')
  navIconToggle.addEventListener('click', nav)
  function nav(){
      let x = document.getElementById('navlink');
      let y = document.querySelector('.bi-x')
      let z = document.querySelector('.bi-list')
      let toogle = 1;
      if ( toogle && x.style.display == 'none' ) {
            x.style.display = 'block'; 
            x.classList.add('transition')
            y.style.display = 'block'
            z.style.display = 'none'
          
      }
      else{
            x.style.display = 'none';
            y.style.display = 'none'
            z.style.display = 'block'
      }
  
  }
