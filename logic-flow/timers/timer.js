// If you want to run something after 5 seconds, you would use a timeout.
// If you want to run something every 5 seconds, you would use an interval.

function buzzer() {
    console.log("ENNNNGGGG");
}

const buzzerTimer = setTimeout(() => {
    console.log('timer')
}, 5000);

    // function buzzer() {
    //     console.log("ENNNNGGGG");
    // }
    //
    // console.log("Starting");
    //
    // setTimeout(buzzer, 3000);
    // setTimeout(buzzer, 3000);
    //
    // console.log("Finishing!");

const buzzerInterval = setInterval(buzzer, 100);

document.getElementById('stop').addEventListener('click', () => {
    console.log('stopped')
    clearInterval(buzzerInterval);
    clearTimeout(buzzerTimer);
});

// Destroy

function destroy() {
    document.body.innerHTML = `<p>DESTROYED</p>`;
}

// setTimeout(destroy, 2000);
