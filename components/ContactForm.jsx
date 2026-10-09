'use client';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionHeading from './SectionHeading';
import ActionLink from './ActionLink';
import Icon from './Icon';
import { externalLinks } from '../data/navigation';
import { emailjsConfig, isEmailjsConfigured } from '../lib/emailjs';

const initialValues = { nombre: '', correo: '', telefono: '', mensaje: '', website: '' };

export default function ContactForm() {
  return (
    <section id="contacto" className="contact-section section-pad">
      <div className="container contact-grid reveal">
        <div className="contact-intro">
          <p className="eyebrow">CONTÁCTENOS</p>
          <SectionHeading>Me encantaría leerte ♡</SectionHeading>
          <p className="contact-lead">Cuéntame en qué puedo ayudarte: dudas, ideas, invitaciones o simplemente un saludo. Recibirás mi respuesta lo antes posible.</p>
          <p className="script contact-script">Tu mensaje es bienvenido</p>
          <p className="contact-note">También puedes escribirme directamente por WhatsApp usando el botón flotante.</p>
          <div className="contact-social">
            <p className="footer-label">SÍGUEME EN REDES</p>
            <ActionLink href={externalLinks.instagram} className="social-link" icon="instagram">Instagram</ActionLink>
            <ActionLink href={externalLinks.youtube} className="social-link" icon="youtube">YouTube</ActionLink>
            <ActionLink href={externalLinks.tiktok} className="social-link" icon="tiktok">TikTok</ActionLink>
          </div>
        </div>
        <Suspense fallback={<div className="contact-form contact-form-loading" aria-hidden="true" />}>
          <ContactFormBody />
        </Suspense>
      </div>
    </section>
  );
}

function ContactFormBody() {
  const searchParams = useSearchParams();
  const [values, setValues] = useState(() => {
    const recurso = searchParams.get('recurso');
    return recurso ? { ...initialValues, mensaje: `Hola, me gustaría solicitar el recurso: ${recurso}.` } : initialValues;
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (field) => (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (values.website) {
      setStatus('success');
      setValues(initialValues);
      return;
    }
    if (!isEmailjsConfigured) {
      setStatus('error');
      setError('El formulario no está configurado todavía.');
      return;
    }
    setStatus('submitting');
    setError('');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        {
          nombre: values.nombre,
          correo: values.correo,
          telefono: values.telefono,
          mensaje: values.mensaje,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      setStatus('error');
      setError(err?.text || err?.message || 'No pudimos enviar tu mensaje. Intenta de nuevo.');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success" role="status">
        <Icon name="heart" size={34} />
        <h3>¡Gracias por escribirme!</h3>
        <p>Tu mensaje se envió correctamente. Te responderé muy pronto.</p>
        <button type="button" className="button button-outline" onClick={() => setStatus('idle')}>Enviar otro mensaje</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-nombre">Nombre</label>
        <input id="contact-nombre" name="nombre" type="text" value={values.nombre} onChange={update('nombre')} autoComplete="name" required placeholder="Tu nombre" />
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="contact-correo">Correo</label>
          <input id="contact-correo" name="correo" type="email" value={values.correo} onChange={update('correo')} autoComplete="email" required placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-telefono">Teléfono <span>(opcional)</span></label>
          <input id="contact-telefono" name="telefono" type="tel" value={values.telefono} onChange={update('telefono')} autoComplete="tel" placeholder="+58 000 0000000" />
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="contact-mensaje">Mensaje</label>
        <textarea id="contact-mensaje" name="mensaje" rows={5} value={values.mensaje} onChange={update('mensaje')} required placeholder="Escribe aquí tu mensaje…" />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">No completar este campo</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update('website')} />
      </div>
      {status === 'error' && <p className="contact-error" role="alert">{error}</p>}
      <button type="submit" className="button contact-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
        {status !== 'submitting' && <Icon name="arrow" size={17} />}
      </button>
    </form>
  );
}
