document.getElementById('dob').addEventListener('change', function() {
            const dob = new Date(this.value);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            document.getElementById('age').value = age; // Set calculated age in the Age field
        });

        document.getElementById('registrationForm').addEventListener('submit', function (e) {
            // Validate all fields before allowing submission
            const regno = document.getElementById('regno').value.trim();
            const studentName = document.getElementById('studentName').value.trim();
            const age = document.getElementById('age').value.trim();
            const dob = document.getElementById('dob').value;
            const programme = document.getElementById('programme').value.trim();
            const school = document.getElementById('school').value.trim();
            const modeOfStudy = document.getElementById('modeOfStudy').value;

            const errorMessage = document.getElementById('errorMessage');

            if (!regno || !studentName || !age || !dob || !programme || !school || !modeOfStudy) {
                e.preventDefault(); // Prevent form submission
                errorMessage.textContent = 'Please fill all fields.';
                errorMessage.style.display = 'block';
                return;
            }

            errorMessage.style.display = 'none';
        });

        document.getElementById('resetBtn').addEventListener('click', function (e) {
            const confirmReset = confirm('Are you sure you want to reset the form?');
            if (!confirmReset) {
                e.preventDefault(); // Prevent reset
            }
        });
