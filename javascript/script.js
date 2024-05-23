function openPage(pageName, elmnt, color) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
  document.addEventListener('DOMContentLoaded', function() {
    const alasInput = document.getElementById('alas');
    const tinggiInput = document.getElementById('tinggi');
    const luasOutput = document.getElementById('luas');
    const s1Input = document.getElementById('s1');
    const s2Input = document.getElementById('s2');
    const s3Input = document.getElementById('s3');
    const kelilingOutput = document.getElementById('keliling');
  
    function calculateluas() {
        const alas = alasInput.value;
        const tinggi = tinggiInput.value;
        if (alas === '' || tinggi === '') {
            alert('Mohon isi semua input untuk luas.');
        } else {
            const luas = 0.5 * alas * tinggi;
            luasOutput.value = luas;
        }
    }
  
    function calculateKeliling() {
        const s1 = s1Input.value;
        const s2 = s2Input.value;
        const s3 = s3Input.value;
        if (s1 === '' || s2 === '' || s3 === '') {
            alert('Mohon isi semua input untuk keliling.');
        } else {
            const keliling = Number(s1) + Number(s2) + Number(s3);
            kelilingOutput.value = keliling;
        }
    }
  
    function resetLuas() {
        alasInput.value = '';
        tinggiInput.value = '';
        luasOutput.value = '';
    }
  
    function resetKeliling() {
        s1Input.value = '';
        s2Input.value = '';
        s3Input.value = '';
        kelilingOutput.value = '';
    }
  
    document.getElementById('form-luas').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateluas();
        }
    });
  
    document.getElementById('form-keliling').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculateKeliling();
        }
    });
  
    document.getElementById('hitung-luas').addEventListener('click', calculateluas);
    document.getElementById('reset-hitung-luas').addEventListener('click', resetLuas);
    document.getElementById('hitung-keliling').addEventListener('click', calculateKeliling);
    document.getElementById('reset-hitung-keliling').addEventListener('click', resetKeliling);
  });
