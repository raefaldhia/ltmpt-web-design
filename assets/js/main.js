function populate() {
    var nav_item = {"Halaman Utama": "index.html",
                    "Landasan": "landasan.html",
                    "Struktur Organisasi": "struktur_organisasi.html", 
                    "Tentang Tes": "tentang_tes.html", 
                    "SNMPTN": "https://sbmptn.ltmpt.ac.id/", 
                    "SBMPTN": "http://www.snmptn.ac.id/",
                    "Pusat Bantuan": "http://halo.ltmpt.ac.id/"};

    var page = document.title.substring("LTMPT | ".length, document.title.length);
    var ul = document.getElementById("ul-nav");

    for(var key in nav_item) {
    if (key === page) {
    var li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    var a = document.createElement("a");
    a.setAttribute("class", "nav-link active");
    a.setAttribute("href", "#");

    var content = document.createTextNode(key);

    a.appendChild(content);
    li.appendChild(a);
    ul.appendChild(li);
    break;
    }
    }

    for(var key in nav_item) {
    if (key !== page) {
    var li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    var a = document.createElement("a");
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", nav_item[key]);

    var content = document.createTextNode(key);

    a.appendChild(content);
    li.appendChild(a);
    ul.appendChild(li);
    }
    }
}
