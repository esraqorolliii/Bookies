
    const cartIcons = document.querySelectorAll('.cart-icon');


    cartIcons.forEach(icon => {
        // Create a new anchor element
        const anchor = document.createElement('a');
        // Set the href attribute of the anchor element
        anchor.setAttribute('href', '../purchase.html');
        // Append the anchor element before the icon
        icon.parentNode.insertBefore(anchor, icon);
        // Move the icon inside the anchor element
        anchor.appendChild(icon);
    });
