const frame4 = () => {
    $('#sl4').addClass('inv')
    $('#sl5').addClass('animate__fadeInUp')
    $('#sl5').removeClass('inv')
    setTimeout(() => {
        frame0()
    }, 2500);
}
const frame3 = () => {
    $('#sl3').addClass('inv')
    $('#sl4').addClass('animate__fadeInUp')
    $('#sl4').removeClass('inv')
    setTimeout(() => {
        frame4()
    }, 2500);
}
const frame2 = () => {
    $('#sl2').addClass('inv')
    $('#sl3').addClass('animate__fadeInUp')
    $('#sl3').removeClass('inv')
    setTimeout(() => {
        frame3()
    }, 2500);
}
const frame1 = () => {
    $('#sl1').addClass('inv')
    $('#sl2').addClass('animate__fadeInUp')
    $('#sl2').removeClass('inv')
    setTimeout(() => {
        frame2()
    }, 2500);
}
const frame0 = () => {
    $('#sl1').addClass('animate__fadeInUp')
    $('#sl1').removeClass('inv')
    setTimeout(() => {
        frame1()
    }, 2500);
}
window.onload = function() {
    $(() => {
    $('.loader').addClass('inv')
    frame0()
    });
};
