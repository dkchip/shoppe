$(document).ready(function(){
    $('.category-list-arrow-right').click(function(event){
        var slide_last = $('.fa-solid fa-angle-right').next();
        $('.fa-solid fa-angle-right').addClass(`bien-mat-trai`);
        slide_last.addClass('fa-solid fa-angle-right').addClass('di-vao-ben-phai');
    });
});