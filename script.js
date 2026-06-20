const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "assets/img/male1.png",
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "assets/img/female1.png",
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "assets/img/male2.png",
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "assets/img/female2.png",
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "assets/img/male3.png",
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "assets/img/female3.png",
    },
];

/* const teamListUl = document.getElementById('team-list');

for (const member of teamMembers) {
  teamListUl.innerHTML += `
  <li>
    <img src="${member.img}"></img>
    <p>Name: ${member.name}</p>
    <p>Role: ${member.role}</p>
    <p>Mail: ${member.email}</p>
  </li>`;
} */

const tmplMemberCard = (member) => {
  const {name, role, email, img} = member;
  return `
  <div class="team-card">
      <div class="card-image">
          <img src="${img}" alt="${name}" />
      </div>
      <div class="card-text">
          <h3>${name}</h3>
          <p>${role}</p>
          <p>${email}</p>
      </div>
  </div>
  `;
}
  

const teamContainerEl = document.querySelector('.team-container');

const renderTeam = teamMembers => {
    teamContainerEl.innerHTML = '';
  for (const member of teamMembers) {
    teamContainerEl.innerHTML += tmplMemberCard(member);
  }  
}

const formAggiuntaEl = document.getElementById('form-aggiunta');

const newMemberData = {
    newMemberName : formAggiuntaEl.querySelector('#inputName'),
    newMemberRole : formAggiuntaEl.querySelector('#inputRole'),
    newMemberMail : formAggiuntaEl.querySelector('#inputMail'),
    newMemberImg : formAggiuntaEl.querySelector('#inputImg')
};

/* Metodo alternativo alla creazione di un oggetto newMemberData 
const newMemberName = formAggiuntaEl.getElementById('inputName');
const newMemberRole = formAggiuntaEl.getElementById('inputRole');
const newMemberMail = formAggiuntaEl.getElementById('inputMail');
const newMemberImg = formAggiuntaEl.getElementById('inputImg'); 
*/


const onFormSubmit = (e) => {
    event.preventDefault();

    /* Questa classe é un modo molto standard per ottenere i dati da un form (event.target é l'elemento form)
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const role = formData.get('role'); 
    const email = formData.get('email');
    const img = formData.get('img');*/

    const name = newMemberData.newMemberName.value;
    const role = newMemberData.newMemberRole.value;
    const email = newMemberData.newMemberMail.value;
    const img = newMemberData.newMemberImg.value;
    const newMember = {name, role, email, img};
    teamMembers.push(newMember);
    event.target.reset();
    renderTeam(teamMembers);

}

formAggiuntaEl.addEventListener('submit', onFormSubmit);

renderTeam(teamMembers);