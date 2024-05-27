import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  onSubmit(form: any) {
    const { name, subject, email, phone, message } = form.value;
    const mailtoLink = `mailto:sales@eddyscashandcarry.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Nombre: ' + name + '\nTeléfono: ' + phone + '\nCorreo: ' + email + '\n\n' + message)}`;

    window.location.href = mailtoLink;
  }
}
