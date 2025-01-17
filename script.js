function showInfo(title, info){
    document.getElementById("artTitle").textContent = title;
    document.getElementById("artInfo").textContent = info;

    document.getElementById("infoContainer").style.display = "block";
}

function closeInfo(){
    document.getElementById("infoContainer").style.display = "none";
}

function filterGallery(){
    var artist = document.getElementById("artistFilter").value;
    var images = document.querySelectorAll(".gallery img");

    images.forEach(function(img){
        img.style.display = "none";
    });

    if(artist === "all"){
        images.forEach(function(img){
            img.style.display = "block";
        });
    }else{
        var selectedImages = document.querySelectorAll("." + artist);
        selectedImages.forEach(function(img){
            img.style.display = "block";
        });
    }
}