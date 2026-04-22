// Mahatta/Souk — Shared Mobile App Components (updated with real image support)
// Exposes to window: { BottomNav, TopBar, ProductCard, Badge, Avatar, Btn, StarRating, InfluencerChip, COLORS, grad }

const COLORS = {
  purple: '#7F77DD', pink: '#D4537E', purpleDark: '#5C54C0',
  text: '#1A1A1A', text2: '#6B7280', text3: '#9CA3AF',
  bg: '#FFFFFF', bgGray: '#F5F5F5', bgFaint: '#FAFAFA',
  border: '#E5E7EB', success: '#1D9E75', warning: '#F59E0B', error: '#E24B4A',
};
const grad = 'linear-gradient(135deg, #7F77DD 0%, #D4537E 100%)';

function BottomNav({ active, onNav }) {
  const tabs = [
    { id: 'home',    label: 'الرئيسية', icon: '⌂' },
    { id: 'explore', label: 'اكتشف',   icon: '◎' },
    { id: 'cart',    label: 'السلة',   icon: '⊡', badge: 3 },
    { id: 'profile', label: 'حسابي',   icon: '◉' },
  ];
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 68, background: '#fff', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 8 }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onNav(t.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: '4px 12px' }}>
          {t.badge && <span style={{ position: 'absolute', top: 0, right: 8, background: COLORS.pink, color: '#fff', borderRadius: 999, fontSize: 9, fontWeight: 700, padding: '1px 5px' }}>{t.badge}</span>}
          <span style={{ fontSize: 20, lineHeight: 1, color: active === t.id ? COLORS.purple : COLORS.text3 }}>{t.icon}</span>
          <span style={{ fontSize: 10, fontWeight: active === t.id ? 700 : 400, color: active === t.id ? COLORS.purple : COLORS.text3, fontFamily: 'Cairo, sans-serif' }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function TopBar({ title, back, onBack, actions }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#fff', borderBottom: '1px solid #F0F0F0', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {back && <button onClick={onBack} style={{ background: '#F5F5F5', border: 'none', borderRadius: 10, width: 36, height: 36, cursor: 'pointer', fontSize: 16 }}>←</button>}
        {title && <span style={{ fontSize: 17, fontWeight: 700, color: COLORS.text, fontFamily: 'Cairo, sans-serif' }}>{title}</span>}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>{actions}</div>
    </div>
  );
}

function ProductCard({ name, influencer, price, oldPrice, discount, emoji, image, onClick }) {
  return (
    <div onClick={onClick} style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', overflow: 'hidden', cursor: 'pointer', flex: '1 1 44%' }}>
      <div style={{ height: 110, background: '#F8F8F8', position: 'relative', overflow: 'hidden' }}>
        {image
          ? <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy"/>
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, background: 'linear-gradient(135deg,rgba(127,119,221,0.1),rgba(212,83,126,0.1))' }}>{emoji}</div>
        }
        {discount && <span style={{ position: 'absolute', top: 7, right: 7, background: grad, color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 999, padding: '2px 7px' }}>-{discount}%</span>}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.text, lineHeight: 1.4, marginBottom: 3 }}>{name}</div>
        <div style={{ fontSize: 10, color: COLORS.purple, marginBottom: 5 }}>بواسطة {influencer}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>{price} ر.س</span>
          {oldPrice && <span style={{ fontSize: 11, color: COLORS.text3, textDecoration: 'line-through' }}>{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}

function Badge({ children, color = COLORS.purple, bg }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, fontSize: 11, fontWeight: 600, padding: '2px 9px', color, background: bg || color + '18' }}>{children}</span>;
}

function Avatar({ size = 48, emoji = '👤', image, border }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 999, overflow: 'hidden', border: border ? `2.5px solid ${COLORS.purple}` : 'none', flexShrink: 0, background: '#F5F0FF' }}>
      {image
        ? <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy"/>
        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.45 }}>{emoji}</div>
      }
    </div>
  );
}

function Btn({ children, variant = 'primary', small, onClick, full }) {
  const styles = {
    primary:   { background: grad,    color: '#fff',        border: 'none', boxShadow: '0 4px 14px rgba(212,83,126,0.3)' },
    secondary: { background: '#fff',  color: COLORS.text,   border: '1.5px solid #E5E7EB' },
    ghost:     { background: '#F5F0FF', color: COLORS.purple, border: 'none' },
    danger:    { background: COLORS.error, color: '#fff',   border: 'none' },
  };
  return (
    <button onClick={onClick} style={{ ...styles[variant], borderRadius: 12, height: small ? 36 : 48, padding: `0 ${small ? 16 : 24}px`, fontSize: small ? 13 : 15, fontWeight: 600, fontFamily: 'Cairo, sans-serif', cursor: 'pointer', width: full ? '100%' : 'auto', transition: 'all 0.2s' }}>
      {children}
    </button>
  );
}

function StarRating({ rating = 4.8, count = 128 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {[1,2,3,4,5].map(i => <span key={i} style={{ color: i <= Math.round(rating) ? '#F59E0B' : '#E5E7EB', fontSize: 13 }}>★</span>)}
      <span style={{ fontSize: 12, color: COLORS.text2, marginRight: 2 }}>{rating} ({count})</span>
    </div>
  );
}

function InfluencerChip({ name, image }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F5F0FF', borderRadius: 999, padding: '4px 10px 4px 6px' }}>
      <Avatar size={24} image={image} />
      <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.purple }}>بواسطة {name}</span>
    </div>
  );
}

Object.assign(window, { BottomNav, TopBar, ProductCard, Badge, Avatar, Btn, StarRating, InfluencerChip, COLORS, grad });
