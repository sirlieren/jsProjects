let activeButton = null; // Aktif butonu takip etmek için bir değişken

function loadApp(appPath) {
    const container = document.getElementById('app-container');

    // Eski içeriği temizle
    container.innerHTML = '';

    // Yeni iframe oluştur ve yükle
    const iframe = document.createElement('iframe');
    iframe.src = appPath; // Uygulamanın yolu
    iframe.width = '100%';
    iframe.height = '600px';
    iframe.style.border = 'none';

    container.appendChild(iframe);

    // Aktif butonun rengini değiştir
    if (activeButton) {
        activeButton.style.backgroundColor = '#DBD2E0'; // Varsayılan buton rengi
        activeButton.style.color = '#000000'; // Varsayılan yazı rengi
    }

    // Yeni aktif butonu ayarla
    const clickedButton = [...document.querySelectorAll('nav button')].find(
        button => button.getAttribute('onclick') === `loadApp('${appPath}')`
    );

    if (clickedButton) {
        clickedButton.style.backgroundColor = 'rgb(58, 120, 190)'; // Seçili buton rengi
        clickedButton.style.color = '#DBD2E0'; // Seçili yazı rengi
        activeButton = clickedButton;
    }
}
