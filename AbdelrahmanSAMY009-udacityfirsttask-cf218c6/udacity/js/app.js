const sections= document.querySelectorAll("section");
const myUl = document.getElementById("navbar__list");

sections.forEach((item)=>{
    let link = document.createElement("li");
    link.textContent= item.getAttribute("data-nav");  // getting the name of the section
    myUl.appendChild(link);                                // Building the nav
    link.addEventListener('click', (f) =>{              //click event listener
        f.preventDefault();
        item.scrollIntoView({behavior:"smooth",block:"start", inline:"nearest"})            // scroll on click 
    item.classList.add("your-active-class");                                            //making the active class when clicking on the list
    const liAll = document.querySelectorAll("li");
    liAll.forEach((li)=>{
        li.classList.remove("light");
    })                                    //Adding or removing active list
    link.classList.add("light")
    sections.forEach(function(section) {
        if(section.classList.contains("your-active-class")){
            section.classList.remove("your-active-class");                 //looping over all sections to remove the light from them
            
             }
        
        })
    
    })
 
})
const activeClass=()=>{
    sections.forEach(function(item){
        const sectionTop = item.getBoundingClientRect().top;
        console.log(sectionTop);
        if(sectionTop <=430 && sectionTop >= -304){
            item.classList.add("your-active-class")
        }                                                                            // class is active when between these borders only
        else{
            item.classList.remove("your-active-class")
        }
    
    })

}


window.addEventListener("scroll", activeClass);                 //Callback function on scroll listener

