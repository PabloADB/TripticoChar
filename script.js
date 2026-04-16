document.addEventListener('DOMContentLoaded', () => {
    const tripticoVoltearContainer = document.querySelector('.triptico-voltear-container');
    const botonVoltear = document.querySelector('.btn-voltear');

    botonVoltear.addEventListener('click', () => {
        tripticoVoltearContainer.classList.toggle('flipped');
    });

    const botonesDeslizamiento = document.querySelectorAll('.botones-deslizamiento');

    botonesDeslizamiento.forEach(container => {
        const buttons = container.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetPanel = button.getAttribute('data-target');

                const parentTriptico = button.closest('.triptico-frontal') || button.closest('.triptico-trasero');
                const deslizanteContainer = parentTriptico.querySelector('.triptico-deslizante-container');

                deslizanteContainer.classList.forEach(cls => {
                    if (cls.startsWith('slide-')) {
                        deslizanteContainer.classList.remove(cls);
                    }
                });
                deslizanteContainer.classList.add(`slide-${targetPanel}`);
            });
        });
    });
});