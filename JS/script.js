// Display current time
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = 'Current time: ' + now.toString();
}

// Initialize time display and update every second
setInterval(updateTime, 1000);
updateTime();

// Form submission handler
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    
    // Format birthdate
    const formattedDate = birthdate ? new Date(birthdate).toLocaleDateString('en-GB') : '';
    
    // Display submitted data
    document.getElementById('displayName').textContent = 'Nama: ' + (name || 'Harfi Novian');
    document.getElementById('displayBirthdate').textContent = 'Tanggal Lahir: ' + (formattedDate || '01/11/1985');
    document.getElementById('displayGender').textContent = 'Jenis Kelamin: ' + (gender || 'Laki - Laki');
    document.getElementById('displayMessage').textContent = 'Pesan: ' + (message || 'Lagi Balajar buat Website');
    
    // Show submission data
    document.getElementById('submissionData').style.display = 'block';
});