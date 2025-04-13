(function() {
    emailjs.init({
        publicKey: "lJ8iOsFBPRU6jLxFK",
    });
})();

// Function to send email
async function sendEmail(formData) {
    try {
        // Get current time in a readable format
        const now = new Date();
        const time = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const response = await emailjs.send(
            'service_q9hdsnf',
            'template_tu8ewuj',
            {
                to_name: "Pranav",
                from_name: formData.name,
                sender_email: formData.email,  // Added this for template
                subject: formData.subject,
                message: formData.message,
                time: time,
                reply_to: formData.email
            }
        );
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

// Make the sendEmail function globally available
window.sendEmail = sendEmail; 