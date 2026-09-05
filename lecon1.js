// const monBouton = document.getElementById('btn-magique');
// monBouton.addEventListener('click', ()=> {               
                                                         
//     console.log("c'est cliquer");                        
// });                                                      
                                                         
                                                         
                                                         
//          console.log("c'est cliquer");                                                
                                                     
// const Qrcode = require('qrcode');
// const lien = "https://google.com";

// Qrcode.toString(lien, {type:'terminal'}, (err,codeGene)=> {
//      console.log(codeGene)
// }
// );

const conteneur = document.getElementById('zone-qrcode');
const monBouton = document.getElementById('btn-magique');
const monInput = document.getElementById('texte-utilisateur');


monBouton.addEventListener('click', () => {
  const texteSaisi = monInput.value;

  QRCode.toDataURL(texteSaisi, (err, url) => {
    if (err) return;

    conteneur.innerHTML = `
      <img src="${url}" alt="QR Code">
      <a href="${url}" download="qrcode.png" id="btn-telecharger">Télécharger le QR Code</a>
    `;
  });
});
