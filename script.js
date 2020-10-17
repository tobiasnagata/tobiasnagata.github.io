// Home
function getArticle() {
    alert('Artikel Telah Dibuka');
}

// events
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn_more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function readMore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("btn_more1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function readMore2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("btn_more2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

// Contact
function sendMessage() {
  var name = document.getElementById('name').value;
  var pesan = document.getElementById('pesan').value;

  if (name=="") {
    alert('Maaf Nama Tidak Boleh Kosong!');
  }else if (pesan=="") {
    alert('Anda Tidak Mempunyai Pesan Untuk Dikirim')
  }else {
    var conf = confirm('Hi, ' + name + '\nAnda yakin akan mengirim pesan sebagai berikut :\n' + pesan);
    if (conf==true) {
      alert('Pesan Anda Telah Terkirim');
      document.getElementById('name').value="";
      document.getElementById('pesan').value="";
    }
  }
}

// Registrasi
function joinUs() {
  var check = document.forms["form"]["eula"].checked;
  if (check == false) {
    alert('Harap Menyetujui Peraturan Terlebih Dahulu');
  } else {
    var fullName = document.forms["form"]["fullName"].value;
    var nickName = document.forms["form"]["nickName"].value;
    var place = document.forms["form"]["place"].value;
    var birth = document.forms["form"]["birth"].value;
    var nim = document.forms["form"]["nim"].value;
    var prodi = document.forms["form"]["prodi"].value;
    var email = document.forms["form"]["mail"].value;
    var handphone = document.forms["form"]["handphone"].value;
    var home = document.forms["form"]["homePlace"].value;

    if (fullName=="") {
      alert('Nama Lengkap Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (nickName=="") {
      alert('Nama Panggilan Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (place=="") {
      alert('Tempat Kelahiran Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (birth=="") {
      alert('Tanggal Lahir Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (nim=="") {
      alert('NIM Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (prodi=="") {
      alert('Program Studi Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (email=="") {
      alert('Email Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (handphone=="") {
      alert('No Hp Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else if (home=="") {
      alert('Alamat Anda Masih kosong, Harap Isi Data Terlebih Dahulu!');
    }else {
      var cek = confirm('Apakah data berikut sudah benar?\nNama Lengkap             : ' + fullName +
        '\nNama Panggilan           : ' + nickName +
        '\nTempat, Tanggal Lahir   : ' + place + ', ' + birth +
        '\nNIM                              : ' + nim +
        '\nProgram Studi              : ' + prodi +
        '\nEmail                            : ' + email +
        '\nNo HP                          : ' + handphone +
        '\nTempat Tinggal            : ' + home);

      if (cek==true) {
        alert('Selamat Anda Telah Terdaftar');
        document.forms["form"]["fullName"].value="";
        document.forms["form"]["nickName"].value="";
        document.forms["form"]["place"].value="";
        document.forms["form"]["birth"].value="";
        document.forms["form"]["nim"].value="";
        document.forms["form"]["prodi"].value="";
        document.forms["form"]["mail"].value="";
        document.forms["form"]["handphone"].value="";
        document.forms["form"]["homePlace"].value="";
      }
    }
  }
}

function peraturan() {
  alert('Anda Telah Membuka Halaman Peraturan');
}
