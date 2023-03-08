// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

const mainDom = document.getElementById('main');

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
    
    console.log(`Il ${i + 1}° oggetto contiene le seguenti coppie chiave/valore`)
    let memberInfo = document.createElement('p');
    memberInfo.innerHTML += `Il ${i + 1}° membro del team è:<br />`
    for(let key in membersList[i]){
        console.log(`${key}: `,membersList[i][key]);
        if(key == 'immagine del profilo'){
            memberInfo.innerHTML += `<img src="img/${membersList[i][key]}" alt="Profile image"><br />`;
        } else{
            memberInfo.innerHTML += `${key}: ${membersList[i][key]} <br />`;
        }
    }
    mainDom.append(memberInfo);

}