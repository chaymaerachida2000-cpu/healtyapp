
const openBtn = document.querySelector(".btn-open-menu");
const formBox = document.getElementById("form-box");
const submitBtn = document.getElementById("submit-btn");
const welcomeMsg = document.getElementById("welcome-message");

// Kat-fth o kat-sedd l-form (Inscription)
if (openBtn) {
    openBtn.addEventListener("click", function(e) {
        e.stopPropagation(); 
        formBox.classList.toggle("show-now");
    });
}


if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        const username = document.getElementById("user-name").value;
        const sexevalue = document.getElementById("sexe-id").value;

        if (username.trim() !== "") {
            
            formBox.classList.remove("show-now");
            
           
            if (openBtn) openBtn.style.display = "none";

            let prefix = (sexevalue.toLowerCase() === "women") ? "Ms. " : "Mr. ";

           
            welcomeMsg.style.display = "block";
            welcomeMsg.innerHTML = `
                <div style="padding: 20px; background: white; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align:center; margin-top: 20px; border-top: 5px solid #3574A9;">
                    <h1 style="color: #3574A9;">Welcome ${prefix}${username} 👋</h1>
                    <p style="color: #231d4d; font-size: 1.2rem; margin-top: 10px;">
                        Your health trackers are ready! Fill the numbers below.
                    </p>
                </div>
            `;
        } else {
            alert("Please enter your name first! 😊");
        }
    });
}


const btnCalc = document.getElementById('btn-health-calc');

if (btnCalc) {
    btnCalc.addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('water-id').value);
        const gymTime = parseFloat(document.getElementById('gym-id').value);

        // Validation dyal l-arqam
        if (isNaN(weight) || isNaN(gymTime)) {
            alert(" please put your weihgt😊");
            return;
        }

        // L-7isab dyal l-mā (Weight * 0.033) + extra for gym
        let waterNeeded = (weight * 0.033) + (gymTime / 30 * 0.5);

        // Styling the Result (Kbiir o f l-wst)
        welcomeMsg.style.display = "block";
        welcomeMsg.innerHTML = `
            <div style="background: #1e78af; padding: 25px; border-radius: 15px; border: 3px solid #004B92; margin-top: 30px; text-align: center;">
                <h2 style="color: #004B92; font-size: 20px; text-transform: uppercase;">Result:</h2>
                <span style="font-size: 40px; color: #231d4d; font-weight: 900;">
                    ${waterNeeded.toFixed(2)} Liters
                </span> 
                <p style="color: #004B92; font-weight: bold;">OF WATER DAILY! 💧</p>
            </div>
        `;
    });
}

// Bach l-form t-t-sedd ila clikiti f ay blāṣa khra
document.addEventListener("click", function(e) {
    if (formBox && !formBox.contains(e.target) && e.target !== openBtn) {
        formBox.classList.remove("show-now");
    }
});
function showImage(category) {
    const imgElement = document.getElementById('dynamic-img');
    
    // Hna kat-khtar kola "category" achmn tswira t-affichi liha
    let imageUrl = '';

    if (category === 'water') {
        imageUrl = 'IMG/waterdrink.png'; 
    } else if (category === 'GYM') {
        imageUrl = 'IMG/gym.png'; 
    } else if (category === 'Food') {
        imageUrl = 'IMG/healthfood.png'; 
    }

   
    if (imageUrl !== '') {
        imgElement.src = imageUrl;
        imgElement.style.display = 'block'; 
        
        
    }
}