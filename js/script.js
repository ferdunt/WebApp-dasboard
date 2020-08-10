
// *** ALERT SECTION ***
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains('alert-banner-close')) {
        alertBanner.style.opacity = '0'
        setTimeout(() => {
            alertBanner.style.display = 'none';
        }, 700);
    }
});

// *** MESSAGING SECTION ***
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    if (user.value === '' && message === '') {
        alert('Please fill out user and message field before sending');
        e.preventDefault();
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
        e.preventDefault();
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
        e.preventDefault();
    } else {
        alert(`Message successfully sent to ${user.value}`);
        e.preventDefault();
        user.value = '';
        message.value = '';
    }
});

// *** NOTIFICATION SECTION ***
const notification = document.querySelector('.bell');
const closeNotification = document.querySelector('.close');

notification.addEventListener('click', () => {
    document.getElementById("box").style.display = 'block';
    document.querySelector('.main').style.opacity = 0.5;
});

closeNotification.addEventListener('click', () => {
    document.getElementById("box").style.display = 'none';
    document.querySelector('.main').style.opacity = 1;

});















