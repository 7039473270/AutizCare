document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupBtn');
    const signinBtn = document.getElementById('signinBtn');
    const savePatientDetailsBtn = document.getElementById('savePatientDetailsBtn');
    const saveTherapistDetailsBtn = document.getElementById('saveTherapistDetailsBtn');

    // Navigation functions
    signupBtn?.addEventListener('click', function() {
        window.location.href = 'patient-details.html';
    });

    signinBtn?.addEventListener('click', function() {
        window.location.href = 'therapist-details.html';
    });

    // Form submission functions
    savePatientDetailsBtn?.addEventListener('click', function() {
        const patientDetails = {
            name: document.getElementById('patientName').value,
            age: document.getElementById('patientAge').value,
            address1: document.getElementById('patientAddress1').value,
            address2: document.getElementById('patientAddress2').value,
            pincode: document.getElementById('patientPincode').value,
            diagnosis: document.getElementById('patientDiagnosis').value,
            therapy: document.getElementById('patientTherapy').value,
            medications: document.getElementById('patientMedications').value
        };
        console.log(patientDetails); // Replace with actual submission logic
    });

    saveTherapistDetailsBtn?.addEventListener('click', function() {
        const therapistDetails = {
            name: document.getElementById('therapistName').value,
            address1: document.getElementById('therapistAddress1').value,
            address2: document.getElementById('therapistAddress2').value,
            pincode: document.getElementById('therapistPincode').value,
            qualification: document.getElementById('therapistQualification').value,
            certification: document.getElementById('therapistCertification').value,
            affiliations: document.getElementById('therapistAffiliations').value,
            experience: document.getElementById('therapistExperience').value
        };

        const qualificationFile = document.getElementById('qualificationUpload').files[0];
        const certificationFile = document.getElementById('certificationUpload').files[0];
        const affiliationsFile = document.getElementById('affiliationsUpload').files[0];

        const formData = new FormData();
        formData.append('therapistDetails', JSON.stringify(therapistDetails));
        formData.append('qualificationFile', qualificationFile);
        formData.append('certificationFile', certificationFile);
        formData.append('affiliationsFile', affiliationsFile);

        console.log(therapistDetails, qualificationFile, certificationFile, affiliationsFile); // Replace with actual submission logic
    });
});
