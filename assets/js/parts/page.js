import { Modal } from 'bootstrap';

export function contactPage() {
    const modalElement = document.querySelector('#contact-modal');
    const form = document.querySelector('#contact-form');
    const successMessage = document.querySelector('#form-success');

    if (!modalElement || !form || !successMessage) {
        return;
    }

    const contactModal = Modal.getOrCreateInstance(modalElement);

    const fields = {
        fullName: {
            input: form.elements.fullName,
            error: document.querySelector('#full-name-error'),
            validate: value => value.trim().length > 1,
            message: 'Podaj imię i nazwisko.'
        },
        email: {
            input: form.elements.email,
            error: document.querySelector('#email-error'),
            validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
            message: 'Podaj poprawny adres e-mail.'
        },
        subject: {
            input: form.elements.subject,
            error: document.querySelector('#subject-error'),
            validate: value => value !== '',
            message: 'Wybierz temat zapytania.'
        },
        message: {
            input: form.elements.message,
            error: document.querySelector('#message-error'),
            validate: value => value.trim().length >= 10,
            message: 'Wiadomość powinna mieć co najmniej 10 znaków.'
        },
        consent: {
            input: form.elements.consent,
            error: document.querySelector('#consent-error'),
            validate: () => form.elements.consent.checked,
            message: 'Zgoda jest wymagana do wysłania formularza.'
        }
    };

    function setFieldError(field, message = '') {
        field.error.textContent = message;
        field.input.classList.toggle('is-invalid', Boolean(message));
        field.input.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function resetFeedback() {
        successMessage.hidden = true;
        form.classList.remove('was-validated');
        Object.values(fields).forEach(field => setFieldError(field));
    }

    function validateForm() {
        let firstInvalidField = null;

        Object.values(fields).forEach(field => {
            const isValid = field.validate(field.input.value);
            setFieldError(field, isValid ? '' : field.message);

            if (!isValid && !firstInvalidField) {
                firstInvalidField = field.input;
            }
        });

        if (firstInvalidField) {
            firstInvalidField.focus();
            return false;
        }

        return true;
    }

    modalElement.addEventListener('shown.bs.modal', () => {
        resetFeedback();
        form.elements.fullName.focus();
    });

    modalElement.addEventListener('hidden.bs.modal', () => {
        form.reset();
        resetFeedback();
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        successMessage.hidden = true;
        form.classList.add('was-validated');

        if (!validateForm()) {
            return;
        }

        form.reset();
        resetFeedback();
        successMessage.hidden = false;
        successMessage.focus({ preventScroll: true });

        contactModal.handleUpdate();
    });
}
