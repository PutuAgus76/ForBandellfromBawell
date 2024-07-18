function nonFo() {document.getElementById('idfoto').style.display = "none";} function showFo() {document.getElementById('idfoto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";} 
  function showDiv() {setTimeout(kpemb,100);document.getElementById('Content').style = "opacity:1;margin-top:10vh;animation:kont 3s infinite;";document.getElementById("pergeseran").style = "opacity:1;visibility:visible;";document.getElementById("akhiran").style = "display:block";}
  function showAkhir() {setInterval(createHeart,200);document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";document.getElementById('Content').style.display = "none";}
  function mulaiakhir() {nonDiv();setTimeout(showAkhir,500);setTimeout(finalis,600);}
  function showTom() {document.getElementById('idkirim').style = "display:block;";}
  var aa=0,pemb;pemb = "";var i=0,halo;halo = "";var u=0,text2;text2 = "";var o=0,text3;text3 = "";var a=0,final1;final1 = "";var ab=0,final2;final2 = "";
  function kpemb() {document.getElementById('bodyblur').style = "opacity:.6;";if(aa<pemb.length){document.getElementById("idgeser").innerHTML += pemb.charAt(aa);aa++;setTimeout(kpemb,80);}if(aa==pemb.length){document.getElementById("idgeser").innerHTML = pemb + "&#128073;";}}
  function finalis() {document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";setTimeout(showTom,4000);}
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 1500, timerProgressBar: true,});
  function play() {var audio = new Audio('' + linkmp3);audio.play();}
  async function menuju(){await swals.fire('Kirim pesan ke WhatsApp aku, ya!');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}