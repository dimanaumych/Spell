$( document ).ready(function() {
    let plus_buttons = document.querySelectorAll('.additional-info-button');
    let cancel_buttons = document.querySelectorAll('.additional-info-cancel');
    console.log(typeof (plus_buttons));
    console.log(cancel_buttons.length)
    for (let i = 0; i <= plus_buttons.length; i++) {
        plus_buttons[i].addEventListener('click', () => {
            console.log(i++);
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-text").css('display', 'unset');
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-button").css('display', 'none');
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-cancel").css('display', 'unset');
            i--;
        });
        cancel_buttons[i].addEventListener('click', () => {
            console.log(i++);
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-text").css('display', 'none');
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-cancel").css('display', 'none');
            $(".additional-info-section-wrapper:nth-child(" + i + ") .additional-info-button").css('display', 'unset');
            i--;
        });
    }
});