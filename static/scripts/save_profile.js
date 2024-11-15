// Event listener untuk mengganti gambar profil saat file diunggah
//
const test = document.getElementById("profile-picture");
//const test2 = document.getElementById("file-status");
document
  .getElementById("profile-picture")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        test.src = event.target.result;
        //test2.innerText = file.name;
      };
      reader.readAsDataURL(file);
    }
  });

//// Fungsi untuk menyimpan data ke localStorage
//function saveProfile() {
//  const name = document.getElementById("name").value;
//  const username = document.getElementById("username").value;
//  const email = document.getElementById("email").value;
//  const profileImageSrc = document.getElementById("profile-picture").src;
//
//  // Validasi: Jika ada yang kosong, tampilkan pesan peringatan
//  if (!name || !username || !email || !profileImageSrc) {
//    alert("Semua bagian harus diisi. Mohon lengkapi semua data.");
//    return; // Berhenti di sini jika ada yang kosong
//  }
//
//  // Simpan data ke localStorage
//  localStorage.setItem("name", name);
//  localStorage.setItem("username", username);
//  localStorage.setItem("email", email);
//  localStorage.setItem("profile-Image", profileImageSrc); // Gambar disimpan
//
//  console.log(profileImageSrc);
//
//  // Alihkan ke halaman view_profile.html
//  window.location.href = "view_profile.html";
//}

//document.getElementById("profile-form").addEventListener("submit", function () {
//  const username = document.getElementById("username").value;
//  const email = document.getElementById("email").value;
//  const profileImageSrc = document.getElementById("profile-picture").src;
//
//  // Validasi: Jika ada yang kosong, tampilkan pesan peringatan
//  //if (!username || !email || !profileImageSrc) {
//  //  alert("Semua bagian harus diisi. Mohon lengkapi semua data.");
//  //  return; // Berhenti di sini jika ada yang kosong
//  //}
//  e.preventDefault(); // Prevent the form from submitting the normal way
//
//  const profileImageSrc = document.getElementById("profile-picture").src;
//
//  const formData = new FormData();
//  formData.append("profile_picture", profileImageSrc);
//
//  fetch("/edit_profile/", {
//    method: "POST",
//    body: formData,
//    headers: {
//      "X-CSRFToken": getCookie("csrftoken"), // CSRF token for security
//    },
//  }).then((response) => {
//    if (response.ok) {
//      console.log("Profile picture updated successfully");
//    } else {
//      console.error("Error updating profile picture");
//    }
//  });
//
//  // Simpan data ke localStorage
//  localStorage.setItem("username", username);
//  localStorage.setItem("email", email);
//  localStorage.setItem("profile-Image", profileImageSrc); // Gambar disimpan
//
//  console.log(profileImageSrc);
//
//  // Alihkan ke halaman view_profile.html
//  //window.location.href = "view_profile.html";
//});
