document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const shoeBase = document.getElementById('shoeBase');
    const shoeUpper = document.getElementById('shoeUpper');
    const baseSwatches = document.querySelectorAll('#baseSwatches .swatch');
    const upperSwatches = document.querySelectorAll('#upperSwatches .swatch');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    // State
    let currentConfig = {
        baseColor: '#333333',
        upperColor: '#555555'
    };

    // Functions
    function updateShoeColor(part, color) {
        part.style.fill = color;
        
        // Add a subtle pulse animation when changing color
        part.animate([
            { filter: 'brightness(1)' },
            { filter: 'brightness(1.3)' },
            { filter: 'brightness(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    }

    function handleSwatchClick(swatches, targetPart, configKey) {
        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                // Remove active class from all in this group
                swatches.forEach(s => s.classList.remove('active'));
                
                // Add active to clicked
                swatch.classList.add('active');
                
                // Get color
                const color = swatch.dataset.color;
                
                // Update State
                currentConfig[configKey] = color;
                
                // Update Visuals
                updateShoeColor(targetPart, color);
            });
        });
    }

    // Initialize Event Listeners
    handleSwatchClick(baseSwatches, shoeBase, 'baseColor');
    handleSwatchClick(upperSwatches, shoeUpper, 'upperColor');

    // Add to Cart Animation
    addToCartBtn.addEventListener('click', () => {
        const originalText = addToCartBtn.innerText;
        
        addToCartBtn.innerText = 'Added!';
        addToCartBtn.style.backgroundColor = '#2ecc71';
        addToCartBtn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            addToCartBtn.style.transform = 'scale(1)';
        }, 100);

        setTimeout(() => {
            addToCartBtn.innerText = originalText;
            addToCartBtn.style.backgroundColor = '';
        }, 2000);
    });

    // Intro Animation
    const shoeStage = document.querySelector('.shoe-stage');
    shoeStage.style.opacity = '0';
    shoeStage.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        shoeStage.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        shoeStage.style.opacity = '1';
        shoeStage.style.transform = 'translateY(0)';
    }, 100);
});
