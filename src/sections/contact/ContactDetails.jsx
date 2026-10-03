import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SITE } from '../../data';

const Row = ({ icon: I, label, href, children }) => (
  <li>
    <a href={href} className="group flex items-center gap-4 rounded-2xl border border-ink/15 bg-white/60 p-4 transition hover:border-ink">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-lg text-accent"><I aria-hidden /></span>
      <span><span className="block text-xs text-ink/55">{label}</span><span className="break-all font-medium">{children}</span></span>
    </a>
  </li>
);

export default function ContactDetails() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl">Contact Details</h2>
      <ul className="mt-6 space-y-3">
        <Row icon={FiMail} label="Email" href={`mailto:${SITE.email}`}>{SITE.email}</Row>
        {SITE.phone && <Row icon={FiPhone} label="Phone" href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</Row>}
        {SITE.location && (
          <li className="flex items-center gap-4 rounded-2xl border border-ink/15 bg-white/60 p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-lg text-accent"><FiMapPin aria-hidden /></span>
            <span><span className="block text-xs text-ink/55">Location / service area</span><span className="font-medium">{SITE.location}</span></span>
          </li>
        )}
        <Row icon={FaLinkedinIn} label="LinkedIn" href={SITE.linkedin}>Rose Njeru</Row>
      </ul>
    </div>
  );
}