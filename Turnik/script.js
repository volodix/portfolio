// COUNTDOWN /////////////////////////////////

var countdownDate = new Date('Jan 1, 2025 00:00:00').getTime();
var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementsByClassName('hours')[0].innerHTML = hours;
  document.getElementsByClassName('hours')[1].innerHTML = hours;
  document.getElementsByClassName('minutes')[0].innerHTML = minutes;
  document.getElementsByClassName('minutes')[1].innerHTML = minutes;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds;
  document.getElementsByClassName('seconds')[1].innerHTML = seconds;
}, 1000);

////////////////////////////////////////////////////

// SLIDER ////////////////////////////////////////

const srcImgArr = [
  'https://previews.dropbox.com/p/thumb/AAkNAHx8cLDThr0mhw093cf-2PL2pcC-kpvmfaVLrvjtt_0Lr2rCRwcs6m5C8GrggUc7TETv5-T_PoeAnXgCbtNM8qT7bhsUWPn58ju3JZfLDXXxDtTxn13Uoz0FAy10KKRLn2-Koh5W8R2_gzhbFZVvA1XsY1VkBHy5AUKwR5AUaoq2gpE_YzfjuJv6iMajNA0XRuDJ_WUKMmgVBOTSfED8i9yttv9QgT6NrhE0lRZTDbG7EPD1tAtzDbS30S-ht6wgakBPkMMa8UGutlYkAWhbp5f-l0Hl6DRyipNlcV_0YTp8Y0FHPDRuz2pYfsMK8rnPBeqc-dmO8cze572SUgiozzUQFVxLebWGybiG8kcyzg/p.png?fv_content=true&size_mode=5',
  'https://sportshop21.ru/wp-content/uploads/2016/05/turnik-brusya-press-3-v-1.jpg',
  'https://borabo.ru/images/razmer/3_v_1_razmer.jpg',
  'https://zlatgrif.ru/wa-data/public/shop/products/32/01/132/images/558/558.750.jpg',
  'https://www.yongbody.ru/image/cache/data/products/6252_1-500x500.jpg'
];

document.getElementById('miniSlide1').onclick = () => {
  document.getElementById('mainSlide').innerHTML = `<img src=${srcImgArr[0]}>`
};
document.getElementById('miniSlide2').onclick = () => {
  document.getElementById('mainSlide').innerHTML = `<img src=${srcImgArr[1]}>`
};
document.getElementById('miniSlide3').onclick = () => {
  document.getElementById('mainSlide').innerHTML = `<img src=${srcImgArr[2]}>`
};
document.getElementById('miniSlide4').onclick = () => {
  document.getElementById('mainSlide').innerHTML = `<img src=${srcImgArr[3]}>`
};
document.getElementById('miniSlide5').onclick = () => {
  document.getElementById('mainSlide').innerHTML = `<img src=${srcImgArr[4]}>`
};
////////////////////////////////////////////////

// POPUP //////////////////////////////////////
document.getElementsByClassName('orderCall')[0].onclick = () => {
  document.getElementsByClassName('overlay')[0].style.display = 'flex';
}
document.getElementsByClassName('closePopup')[0].onclick = () => {
  document.getElementsByClassName('overlay')[0].style.display = 'none';
}
document.getElementsByClassName('orderCall')[1].onclick = () => {
  document.getElementsByClassName('overlay')[0].style.display = 'flex';
}
document.getElementsByClassName('closePopup')[1].onclick = () => {
  document.getElementsByClassName('overlay')[0].style.display = 'none';
}
////////////////////////////////////////////

// AJAX FORM /////////////////////////////
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("main-form");
    var button = document.getElementById("main-form-button");
    var status = document.getElementById("main-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Спасибо! Заявка отправлена!";
    }

    function error() {
      status.innerHTML = "Произошла ошибка. Попробуйте перезагрузить страницу и попробовать еще раз";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
////////////////////////////////////////