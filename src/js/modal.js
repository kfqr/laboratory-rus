function modal(props = {}) {
    if (typeof props !== "object") {
        throw new Error("props must be an object");
    }

    const defaultProps = {
        btn: '.js-btn',
        btnClose: '.js-close',
        modal: '.js-modal'
    }

    const { btn, btnClose, modal } = { ...defaultProps, ...props };
    const [btnsElem, modalsElem] = [btn, modal].map(selector => document.querySelectorAll(selector));

    let modalElem = null;

    const showScrollPage = () => {
        document.body.style.overflow = "auto";
        document.documentElement.removeAttribute('style');
    }

    const showModal = (modalId) => {
        modalElem = document.getElementById(modalId);
        modalElem.showModal();
        document.body.style.overflow = "hidden";
        document.documentElement.setAttribute('style', 'scrollbar-gutter: stable');
    }

    const hideModal = ({ currentTarget, target }) => {
        const isBtnClose = target.closest(btnClose)?.classList.contains('js-close');
        const isBackdrop = target === currentTarget;

        if (isBtnClose || isBackdrop) {
            modalElem.close();
            showScrollPage();
        }
    }

    btnsElem.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            if (!modalId) {
                throw new Error(`button ${btn} does not have a date attribute data-modal`);
            }

            showModal(modalId)
        })
    })

    modalsElem.forEach(modal => modal.addEventListener('click', (e) => hideModal(e)))
    modalsElem.forEach(modal => modal.addEventListener('close', () => showScrollPage()))
}

modal();
