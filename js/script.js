// --- Select menu ---
var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
if(is_android) {
		$('select.form-control').removeClass('form-control').css('width', '100%');

}
// -- !Select menu --

const init = () => {
    function update() {
        let next = false;

        sections.forEach(section => {
            const current = link(section.id);

            if (inView(section) && !next) {
                current.classList.add('current');
                next = true;
            } else {
                current.classList.remove('current');
            }
        });
    }

    update();
    window.addEventListener('scroll', update);
};