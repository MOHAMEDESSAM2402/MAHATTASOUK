// Souk App — Screens 5–8: Checkout, Order Success, Order Tracking, Profile

function CheckoutScreen({ onBack, onSuccess }) {
  const [payment, setPayment] = React.useState('card');
  const methods = [
    { id: 'card', label: 'بطاقة ائتمانية / مدى', icon: '💳' },
    { id: 'cod', label: 'الدفع عند الاستلام', icon: '💵' },
    { id: 'tabby', label: 'Tabby — قسّم على 4', icon: '🔵' },
    { id: 'tamara', label: 'Tamara — اشتر الآن', icon: '🟢' },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <TopBar title="إتمام الشراء" back onBack={onBack} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', paddingBottom: 80 }}>
        {/* Address */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 14, marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 16 }}>🏠</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>المنزل</span>
              <Badge color={COLORS.purple}>افتراضي</Badge>
            </div>
            <button style={{ fontSize: 13, color: COLORS.purple, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>تغيير</button>
          </div>
          <div style={{ fontSize: 13, color: COLORS.text2, lineHeight: 1.6 }}>أحمد محمد العنزي<br/>حي النخيل، شارع الملك فهد، الرياض<br/>المملكة العربية السعودية · ١٢٣٤٥</div>
        </div>
        {/* Payment */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 14, marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>طريقة الدفع</div>
          {methods.map(m => (
            <div key={m.id} onClick={() => setPayment(m.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid #F0F0F0', cursor: 'pointer' }}>
              <div style={{ width: 20, height: 20, borderRadius: 999, border: `2px solid ${payment === m.id ? COLORS.purple : '#D1D5DB'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {payment === m.id && <div style={{ width: 10, height: 10, borderRadius: 999, background: COLORS.purple }}/>}
              </div>
              <span style={{ fontSize: 18 }}>{m.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{m.label}</span>
            </div>
          ))}
        </div>
        {/* Order summary */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 14, marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 10 }}>ملخص الطلب</div>
          {[['المجموع الفرعي', '٢٣٠ ر.س'], ['الخصم', '-٢٠ ر.س', true], ['التوصيل', 'مجاني', false, true]].map(([l, v, neg, green]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
              <span style={{ color: COLORS.text2 }}>{l}</span>
              <span style={{ fontWeight: 600, color: neg || green ? COLORS.success : COLORS.text }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>الإجمالي</span>
            <span style={{ fontSize: 17, fontWeight: 900 }}>٢١٠ ر.س</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <Btn full onClick={onSuccess}>تأكيد الطلب — ٢١٠ ر.س</Btn>
      </div>
    </div>
  );
}

function OrderSuccessScreen({ onHome, onTrack }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', fontFamily: 'Cairo, sans-serif', direction: 'rtl', padding: 24, textAlign: 'center' }}>
      <div style={{ width: 90, height: 90, borderRadius: 999, background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, marginBottom: 20, boxShadow: '0 8px 32px rgba(29,158,117,0.2)' }}>✅</div>
      <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.text, marginBottom: 8 }}>تم تأكيد طلبك!</div>
      <div style={{ fontSize: 14, color: COLORS.text2, lineHeight: 1.7, marginBottom: 20 }}>تم إرسال تأكيد الطلب عبر واتساب والبريد الإلكتروني</div>
      <div style={{ background: '#F5F0FF', borderRadius: 14, padding: '14px 28px', marginBottom: 28 }}>
        <div style={{ fontSize: 11, color: COLORS.text2, marginBottom: 4 }}>رقم الطلب</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: COLORS.purple, letterSpacing: '0.08em' }}>#SOQ-٢٠٢٤-٨٨٤٢</div>
      </div>
      <Btn full onClick={onTrack}>تتبع الطلب</Btn>
      <div style={{ marginTop: 12 }}><Btn variant="secondary" full onClick={onHome}>متابعة التسوق</Btn></div>
    </div>
  );
}

function OrderTrackingScreen({ onBack }) {
  const steps = [
    { label: 'تم إنشاء الطلب', time: '١٠:٣٢ ص', done: true },
    { label: 'تم تأكيده من البائع', time: '١٠:٤٥ ص', done: true },
    { label: 'تم الشحن', time: '١٢:١٥ م', done: true },
    { label: 'في الطريق إليك', time: 'الآن', done: false, active: true },
    { label: 'تم التسليم', time: '—', done: false },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <TopBar title="#SOQ-٢٠٢٤-٨٨٤٢" back onBack={onBack} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
        {/* Map placeholder */}
        <div style={{ height: 160, borderRadius: 14, background: 'linear-gradient(135deg,#E8E6FF,#FFE6EF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 48, border: '1px solid #E5E7EB', position: 'relative' }}>
          🗺️
          <div style={{ position: 'absolute', bottom: 12, right: 12, background: grad, borderRadius: 999, padding: '4px 12px', color: '#fff', fontSize: 11, fontWeight: 700 }}>📍 الرياض</div>
        </div>
        {/* Driver card */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 14, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 999, background: '#F5F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🚴</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>فهد الحارثي</div>
            <div style={{ fontSize: 11, color: COLORS.text2 }}>دراجة · ABC ١٢٣٤</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ width: 38, height: 38, borderRadius: 12, background: '#F0FDF4', border: 'none', fontSize: 18, cursor: 'pointer' }}>📞</button>
            <button style={{ width: 38, height: 38, borderRadius: 12, background: '#EFF6FF', border: 'none', fontSize: 18, cursor: 'pointer' }}>💬</button>
          </div>
        </div>
        {/* Timeline */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 16 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < steps.length - 1 ? 0 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, borderRadius: 999, background: step.done ? COLORS.success : step.active ? grad : '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff', flexShrink: 0, boxShadow: step.active ? '0 0 0 4px rgba(127,119,221,0.2)' : 'none' }}>
                  {step.done ? '✓' : step.active ? '●' : ''}
                </div>
                {i < steps.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: step.done ? COLORS.success : '#E5E7EB', margin: '2px 0' }}/>}
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: step.active ? 700 : 600, color: step.done || step.active ? COLORS.text : COLORS.text3 }}>{step.label}</div>
                <div style={{ fontSize: 11, color: COLORS.text3, marginTop: 2 }}>{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileScreen({ onNav }) {
  const menuItems = [
    { icon: '📦', label: 'طلباتي', badge: '٣' },
    { icon: '📍', label: 'عناويني' },
    { icon: '💳', label: 'طرق الدفع' },
    { icon: '❤️', label: 'المفضلة' },
    { icon: '⭐', label: 'المؤثرون المتابَعون', badge: '١٢' },
    { icon: '🔔', label: 'إعدادات الإشعارات' },
    { icon: '🌐', label: 'اللغة', value: 'عربي' },
    { icon: '💬', label: 'المساعدة والدعم' },
    { icon: '🚪', label: 'تسجيل الخروج', danger: true },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <div style={{ background: '#fff', padding: '20px 16px 16px', borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, color: '#fff' }}>👤</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.text }}>أحمد العنزي</div>
            <div style={{ fontSize: 13, color: COLORS.text2 }}>ahmad@example.com</div>
          </div>
        </div>
        <div style={{ marginTop: 14, background: grad, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>رصيد المحفظة</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#fff' }}>١٨٠ ر.س</div>
          </div>
          <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, padding: '8px 16px', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'Cairo, sans-serif', backdropFilter: 'blur(8px)' }}>إضافة رصيد</button>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', paddingBottom: 68 }}>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
          {menuItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderBottom: i < menuItems.length - 1 ? '1px solid #F0F0F0' : 'none', cursor: 'pointer' }}>
              <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{item.icon}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: item.danger ? COLORS.error : COLORS.text }}>{item.label}</span>
              {item.badge && <Badge color={COLORS.purple}>{item.badge}</Badge>}
              {item.value && <span style={{ fontSize: 12, color: COLORS.text2 }}>{item.value}</span>}
              {!item.danger && <span style={{ color: COLORS.text3, fontSize: 16 }}>‹</span>}
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="profile" onNav={onNav} />
    </div>
  );
}

Object.assign(window, { CheckoutScreen, OrderSuccessScreen, OrderTrackingScreen, ProfileScreen });
