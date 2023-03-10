
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede




// creo l'array di oggetti contenenti le informazioni dei singoli membri
const members = [

    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        fullName: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];



// dichiaro la variabile corrispondente al contenitore delle card
let cardContainerElement = document.getElementById("card-container");


// creo un ciclo di stampa in console delle informazioni dei membri
for (let i = 0; i < members.length; i++) {

    // creo per ogni membro contenuto nell'array una card
    let newCard = document.createElement("div");

    // assegno ad ogni elemento creato una classe di stile
    newCard.classList.add("card");

    // assegno la genitorialità all'elemento creato
    cardContainerElement.append(newCard);

    
    newCard.innerHTML = ('<img src="img/' + members[i].img + '">' + '<div class="nome">' + members[i].fullName + '</div>' + '<div class="ruolo">' + members[i].role + '</div>');

}