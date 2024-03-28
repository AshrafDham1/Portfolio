

var contactbtn = document.getElementById("contactbtn");

contactbtn.addEventListener("click", function() {
    window.location.href = "#conactSection";
}
);


const allTech = document.querySelectorAll(".all");
const allBtn= document.getElementById("AllBtn")
allBtn.addEventListener("click" ,function() {
    // console.log("all")
    allTech.forEach(function(element) {
        element.style.visibility = "visible"; 
        element.style.position = "relative";
    })
})

const frontEndTech = document.querySelectorAll(".frontEnd");
const frontEndBtn= document.getElementById("frontEndBtn")
frontEndBtn.addEventListener("click" ,function() {
    // console.log("Frontend")
    allTech.forEach(function(elements) {
        elements.style.visibility = "hidden";
        elements.style.position = "absolute";
    })
    frontEndTech.forEach(function(element) {
        element.style.visibility = "visible";
        element.style.position = "relative";

    })
})



const allText = document.getElementsByClassName("blockText");
const allBlock = document.getElementsByClassName("block");

Array.from(allBlock).forEach((block, index) => {
    block.addEventListener("mouseover", () => {
        allText[index].style.display = "block";
        console.log("text removed");
    });
});

Array.from(allBlock).forEach((block, index) => {
    block.addEventListener("mouseout", () => {
        allText[index].style.display = "none";
        console.log("text removed");
    });
});

// const addButton = document.getElementById('addSectionButton');
// const removeSectionButton = document.getElementById("removeSectionButton")

// const newSectionContainer =document.getElementById("newSectionContainer")
// addButton.addEventListener('click', addNewSection)

// function addNewSection() {
//     const newSection = document.createElement('section');
//     newSection.id = 'newSection';
    
//     newSection.innerHTML = `
//     <div Id="projectContainer"> 


//     <div class="projects" id="uaeProject">
//         <div>
//         <h2 class="projectHeader" id="uaeHeader">Guide To United Arab Emirates</h2>
//         <p class="projectParagraph" id="uaePragraph">
//             A website blending HTML, CSS, and JavaScript for UAE Enthusiast, embark on a journey through its captivating locations, delve into its storied history, and discover the marvels of its attractions, culture and achievement.
//             </p>
//         </div>
//         <div id="UaeprojectContainer">
//             <img src="/assets/uaeMockup.png" alt=">Guide To United Arab Emirates website, content and design" class="projectPhoto" id="uaephoto">
//         <div class="textAfter">
//         <a href="https://guide-to-united-arab-emirates.netlify.app/"><img src="/assets/link.png" alt="Check on google" class="Check"></a>
//         <a href="https://github.com/AshrafDham1/Guide-to-my-country-project" > <img src="/assets/gitHub.svg" alt="on Github" class="Check"></a>
//         </div>
//         </div>
//     </div> 
//     <div class="projects" id="christmasMarketProject">
//         <div id="CMprojectContainer">
//         <img src="/assets/WordpressMockup.png" alt=">Christmas Market website, content and design" class="projectPhoto" id="CMphoto">
//         <div class="textAfter">
//             <a href="https://dev-ashraf-site.pantheonsite.io/"><img src="/assets/link.png" alt="Check on google" class="Check"></a>
//         </div>
//         </div>
//         <div>

//         <h2 class="projectHeader" id="CMHeader">Christmas Market</h2>
//         <p class="projectParagraph" id="CMPragraph">
//             Navigate through the user-friendly WordPress website interface showcasing the annual Christmas Market. Dive into its seamless design, explore its charitable initiatives, and tantalize your senses with the festive menu.                    </p>
//         </div>
//     </div>

// </div> `;
//     newSectionContainer.appendChild(newSection);
//     addButton.removeEventListener('click', addNewSection);
// };
// removeSectionButton.addEventListener('click', removeSection)


// function removeSection(){
// newSectionContainer.innerHTML = "";
// addButton.addEventListener('click', addNewSection);

// }

const toggleModeButton = document.getElementById('toggleModeButton');
const rootElement = document.documentElement;
let numberOfClick=0;
toggleModeButton.addEventListener('click', function() {
    if (rootElement.getAttribute('data-theme') === 'light') {
        rootElement.setAttribute('data-theme', 'dark');
    } else {
        rootElement.setAttribute('data-theme', 'light');
    }
    numberOfClick++
    console.log(numberOfClick)

    if (numberOfClick%2!= 0) {
        toggleModeButton.innerHTML = '<img src="/assets/night-mode.png" alt="night mode">';
        toggleModeButton.style.backgroundColor="#e4eaf6"
    }else{
        toggleModeButton.innerHTML = '<img src="/assets/brightness.png" alt="night mode">';
        toggleModeButton.style.backgroundColor="#090F1C"
    }

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}





