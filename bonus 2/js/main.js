// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const membersList= [
    {
        'nome completo': 'Wayne Barnett',
        occupazione: 'Founder & CEO',
        'immagine del profilo': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome completo': 'Angela Caroll',
        occupazione: 'Chief Editor',
        'immagine del profilo': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome completo': 'Walter Gordon',
        occupazione: 'Office Manager',
        'immagine del profilo': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome completo': 'Angela Lopez',
        occupazione: 'Social Media Manager',
        'immagine del profilo': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome completo': 'Scott Estrada',
        occupazione: 'Developer',
        'immagine del profilo': 'scott-estrada-developer.jpg'
    },
    {
        'nome completo': 'Barbara Ramos',
        occupazione: 'Graphic Designer',
        'immagine del profilo': 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log("L'array di oggetti creato è:", membersList);

for(i=0; i< membersList.length; i++){
    
    const member = membersList[i];
    const cardsContainerDom = document.getElementById('cardsContainer');
    let memberCard;
    let memberName;
    let memberRole;
    let memberImgUrl;
    for(let key in member){
        memberName = member['nome completo'];
        memberRole = member['occupazione'];
        memberImgUrl = member['immagine del profilo'];
    }
    memberCard = `  <div class="col-12 col-md-6 col-lg-3">    
                        <div class="card m-3">
                            <img src="img/${memberImgUrl}" class="card-img-top" alt="Profile image">
                            <div class="card-body">
                                <h5 class="card-title">${memberName} </h5>
                                <p class="card-text">${memberRole} </p>
                            </div>
                        </div>
                    </div>`
    cardsContainerDom.innerHTML += memberCard;

}