const onClickNavBarItem = (name) => () => {
    const allExtraItems = document.querySelectorAll('.nav-bar-extra_item');
    
    allExtraItems.forEach((item) => {
        item.classList.remove('visible');
    });

    const extraItem = document.querySelector(`.extra-${name}`);

    extraItem.classList.add('visible');

    const navBarItems = document.querySelectorAll('.nav-bar_item');
    
    navBarItems.forEach((item) => {
        item.classList.remove('active');
    });

    const clickedItem = document.getElementById(`nav-${name}`);

    clickedItem.classList.add('active');
}

const navItems = ['plane', 'person', 'bicycle', 'car', 'sailboat'];

navItems.forEach((item) => {
    const navBarItem = document.getElementById(`nav-${item}`);
    navBarItem.addEventListener('click', onClickNavBarItem(item));
});