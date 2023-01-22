function userScrollbarWidth() {
    
    const temporaryElement = document.createElement("div");
    temporaryElement.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(temporaryElement);

    const userScrollwidth = temporaryElement.offsetWidth - temporaryElement.clientWidth;

    temporaryElement.remove();
    return userScrollwidth;
};

export {userScrollbarWidth};
