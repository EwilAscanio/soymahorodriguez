'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '../data/navigation';
import Brand from './Brand';
import logo from '../public/assets/logo.png';
import Icon from './Icon';

export default function Header({ isLoggedIn = false }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    const breakpoint = matchMedia('(min-width: 1280px)');
    const reset = () => { if (breakpoint.matches) setOpen(false); };
    window.addEventListener('keydown', close); breakpoint.addEventListener('change', reset);
    return () => { window.removeEventListener('keydown', close); breakpoint.removeEventListener('change', reset); };
  }, [open]);
  return <header className="site-header sticky top-0 z-50">
    <div className="container header-inner">
      <Image src={logo} alt="Logo de Soy Maho Rodríguez" width={300} height={56} quality={90} className="header-logo" fetchPriority="high" loading="eager" />


      {/* <a href="#inicio" aria-label="Soy Maho Rodríguez, inicio" onClick={() => setOpen(false)}><Brand /></a> */}
      <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="/#contacto" className="button header-cta" onClick={() => setOpen(false)}><Icon name="mail" size={17} />Contactame</Link>
      <Link href={isLoggedIn ? '/dashboard' : '/login'} className="button header-login" onClick={() => setOpen(false)}><Icon name="lock" size={15} />{isLoggedIn ? 'Mi panel' : 'Iniciar sesión'}</Link>
      <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={25} /></button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegación móvil" hidden={!open}>{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow" size={16} /></Link>)}<Link href="/#contacto" className="mobile-resource-link" onClick={() => setOpen(false)}>Contactame<Icon name="mail" size={16} /></Link><Link href={isLoggedIn ? '/dashboard' : '/login'} className="mobile-login-link" onClick={() => setOpen(false)}>{isLoggedIn ? 'Mi panel' : 'Iniciar sesión'}<Icon name="lock" size={16} /></Link></nav>
  </header>;
}