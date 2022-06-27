const container = document.querySelector('.container');
const jumbo     = document.querySelector('.jumbo');
const thumbs    = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

    // mencari apakah elemen yang diclick sama dengan thumb img
    // untuk menggunakan className semua nama class harus disebutkan
    if ( e.target.className == 'thumb img'  ) {
        jumbo.src = e.target.src;

        // memberikan efek animation
        jumbo.classList.add('fade');
        
        // menghapus class fade dengan setTImeout
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        // membuat perulangan, untuk menghapus class active dari thumb
        thumbs.forEach(function(thumb) {
            if( thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        });
        // membuat thumb tetap dalam keadaan opacity 0.5 dengan class active
        e.target.classList.add('active');
    }

});