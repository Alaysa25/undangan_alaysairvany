function bukaUndangan(){
    const s1 = document.querySelector('#section-1');
    const s2 = document.querySelector('#section-2');
    const s3 = document.querySelector('#section-3');
    const s4 = document.querySelector('#section-4');
    const s5 = document.querySelector('#section-5');
    const s6 = document.querySelector('#section-6');
    const s7 = document.querySelector('#section-7');
    const s8 = document.querySelector('#section-8');
    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';
    s5.style.display = 'block';
    s6.style.display = 'block';
    s7.style.display = 'block';
    s8.style.display = 'block';


}

document.addEventListener('DOMContentLoaded', function() {
    var countDate = new Date('Dec 23, 2024 00:00:00').getTime(); // Mengubah target waktu ke 23 Desember 2024

    function dateInvitation(){
        var now = new Date().getTime();
        var gap = countDate - now;

        console.log("Waktu Sekarang:", now);
        console.log("Waktu Target:", countDate);
        console.log("Selisih (gap):", gap);

        var detik = 1000;
        var menit = detik * 60;
        var jam = menit * 60;
        var hari = jam * 24;

        var h = Math.floor(gap / hari);
        var j = Math.floor((gap % hari) / jam);
        var m = Math.floor((gap % jam) / menit);
        var d = Math.floor((gap % menit) / detik);

        console.log("Hari:", h, "Jam:", j, "Menit:", m, "Detik:", d);

        document.getElementById('hari').innerText = String(h).padStart(2, '0');
        document.getElementById('jam').innerText = String(j).padStart(2, '0');
        document.getElementById('menit').innerText = String(m).padStart(2, '0');
        document.getElementById('detik').innerText = String(d).padStart(2, '0');

        if (gap < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }

    dateInvitation();
    var countdownInterval = setInterval(dateInvitation, 1000);
});


