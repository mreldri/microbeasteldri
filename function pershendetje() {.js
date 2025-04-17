function pershendetje() {
  const emri = document.getElementById("emri").value;
  const mesazhi = document.getElementById("mesazhi");

  if (emri.trim() === "") {
    mesazhi.textContent = "Të lutem shkruaj emrin!";
  } else {
    mesazhi.textContent = `Përshëndetje, ${emri}!`;
  }
}

function perditesoOra() {
  const tani = new Date();
  const ora = tani.toLocaleTimeString('sq-AL');
  document.getElementById("ora").textContent = ora;
}

// Përditëso orën çdo sekondë
setInterval(perditesoOra, 1000);
// E thërrasim një herë menjëherë
perditesoOra();

let gjuhaAktuale = "sq";

function ndryshoGjuhe() {
  gjuhaAktuale = document.getElementById("gjuha").value;

  const titulli = document.getElementById("titulli");
  const butoni = document.getElementById("butoni");
  const mesazhi = document.getElementById("mesazhi");

  if (gjuhaAktuale === "en") {
    titulli.textContent = "Welcome to my page!";
    butoni.textContent = "Greet";
    if (mesazhi.textContent.includes("Përshëndetje") || mesazhi.textContent.includes("Shkruaj")) {
      mesazhi.textContent = ""; // fshij përshëndetjen
    }
  } else {
    titulli.textContent = "Mirë se vini në faqen time!";
    butoni.textContent = "Përshëndet";
    mesazhi.textContent = "";
  }
}

function pershendetje() {
  const emri = document.getElementById("emri").value;
  const mesazhi = document.getElementById("mesazhi");

  if (emri.trim() === "") {
    mesazhi.textContent = gjuhaAktuale === "en" ? "Please enter your name!" : "Të lutem shkruaj emrin!";
  } else {
    mesazhi.textContent = gjuhaAktuale === "en" ? `Hello, ${emri}!` : `Përshëndetje, ${emri}!`;
  }
}