const divs = document.querySelectorAll('.clickable');
const under_f = document.querySelector('.c_underline_f');
const under_s = document.querySelector('.c_underline_s');
const under_t = document.querySelector('.c_underline_t');

// To Make Clickables for Top Bar

divs.forEach(element => {

    element.addEventListener('click', (event) => {

        divs.forEach(div => {
            div.classList.remove('text-white');
            div.classList.remove('bg-slate-900');
            div.classList.add('text-gray-400');
        });

        under_f.classList.add('hidden');
        under_s.classList.add('hidden');
        under_t.classList.add('hidden');

        element.classList.remove('text-gray-400');
        element.classList.add('text-white');
        element.classList.add('bg-slate-900');

        if (element.classList.contains('left')) {
            under_f.classList.remove('hidden');
        } else if (element.classList.contains('right')) {
            under_s.classList.remove('hidden');
        } else if (element.classList.contains('settings')) {
            under_t.classList.remove('hidden');
        }
    });
});

// For Auto Selected
divs[0].click()

// To make clikables for Sidebar 
// const home_div = document.querySelector('.sidebar').querySelector('ul').querySelector('li:first-child');
const home_div = document.querySelector('.sidebar').querySelector('ul').querySelectorAll('li')

home_div.forEach(item => {
    if (!item.classList.contains('s_c')){
        item.addEventListener('click', () => {
            home_div.forEach(div => {
                div.classList.remove('bg-slate-900')
                div.classList.remove('scale-105')
            });
            item.classList.add('bg-slate-900')
            item.classList.add('scale-105')
        })
    }
});

// For Selected Deafult
home_div[0].click()

// For Dynamic Text Area
function adjustHeight() {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
}
const textarea = document.getElementById('autoresizing');
textarea.addEventListener('input', adjustHeight);


