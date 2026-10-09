'use client';
import { useState } from 'react';
import Icon from './Icon';

export default function ActionLink({ href, children, className = 'button', icon = 'arrow', style, pending = 'Este enlace estará disponible pronto.', onClick, onMouseEnter, onMouseLeave }) {
  const [message, setMessage] = useState(false);
  if (href) return <a className={className} href={href} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={style} {...(href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}{icon && <Icon name={icon} size={17} />}</a>;
  return <div className="pending-action"><button type="button" className={className} onClick={() => setMessage(!message)} aria-expanded={message} style={style}>{children}{icon && <Icon name={icon} size={17} />}</button>{message && <p className="pending-message" role="status">{pending}</p>}</div>;
}

