function tabs(selectorOfTabs, selectorOfContents, contentActiveClass, tabActiveClass) {

    const tabs = document.querySelectorAll(selectorOfTabs);
    const contents = document.querySelectorAll(selectorOfContents);

    tabs.forEach(tab => {

        tab.addEventListener('click', event => {
            tabs.forEach(tab => tab.classList.remove(tabActiveClass));

            const target = event.target;   
            event.preventDefault();

            contents.forEach(content => {
                content.classList.remove(contentActiveClass);

                if (target.getAttribute(['data-id']) === content.id) {
                    target.classList.add(tabActiveClass);
                    content.classList.add(contentActiveClass);
                } 

            });
        });
    });
    
}

export default tabs;
