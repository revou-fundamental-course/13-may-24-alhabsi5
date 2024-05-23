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
  function calculateluas() {
      const alas = document.getElementById('alas').value;
      const tinggi = document.getElementById('tinggi').value;
      const luas = 0.5 * alas * tinggi;
      document.getElementById('luas').value = luas;
  }

  function calculateKeliling() {
      const s1 = document.getElementById('s1').value;
      const s2 = document.getElementById('s2').value;
      const s3 = document.getElementById('s3').value;
      const keliling = Number(s1) + Number(s2) + Number(s3);
      document.getElementById('keliling').value = keliling;
  }

  function resetLuas() {
      document.getElementById('alas').value = '';
      document.getElementById('tinggi').value = '';
      document.getElementById('luas').value = '';
  }

  function resetKeliling() {
      document.getElementById('s1').value = '';
      document.getElementById('s2').value = '';
      document.getElementById('s3').value = '';
      document.getElementById('keliling').value = '';
  }

  const formLuas = document.getElementById('form-luas');
  formLuas.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();
          calculateluas();
      }
  });

  const formKeliling = document.getElementById('form-keliling');
  formKeliling.addEventListener('keypress', function(event) {
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