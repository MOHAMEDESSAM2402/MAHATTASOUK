// Souk App — Screens 1–4: Home, Influencer Profile, Product Detail, Cart (real images)

const APP_INFLUENCERS = [
  { name: 'سارة', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b3bc?w=150&q=80&fit=crop&crop=faces' },
  { name: 'لينا',  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&fit=crop&crop=faces' },
  { name: 'نورة',  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80&fit=crop&crop=faces' },
  { name: 'محمد',  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=faces' },
  { name: 'فاطمة', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80&fit=crop&crop=faces' },
  { name: 'خالد',  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80&fit=crop&crop=faces' },
];

const APP_PRODUCTS = [
  { name: 'حذاء نايك Air Max',   influencer: '@سارة_فيشن',  price: '١٢٠', oldPrice: '١٦٠', discount: 25, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&fit=crop',   sizes: ['٣٩','٤٠','٤١','٤٢'], colors: ['#1A1A1A','#7F77DD','#D4537E'], influencerImg: 'https://images.unsplash.com/photo-1494790108755-2616b612b3bc?w=150&q=80&fit=crop&crop=faces', seller: 'متجر الرياضة العالمي', rating: 4.8, reviews: 128 },
  { name: 'كريم ترطيب فاخر',     influencer: '@لينا_بيوتي', price: '٨٥',  oldPrice: null,  discount: null, image: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=400&q=80&fit=crop', sizes: ['٥٠مل','١٠٠مل'], colors: [], influencerImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&fit=crop&crop=faces', seller: 'بيوتي بالعربي', rating: 4.5, reviews: 87 },
  { name: 'ساعة ذكية برو',       influencer: '@محمد_تك',    price: '٤٥٠', oldPrice: '٥٨٠', discount: 22, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80&fit=crop',   sizes: [], colors: ['#1A1A1A','#C0C0C0','#C8A84B'], influencerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=faces', seller: 'تك ستور', rating: 4.9, reviews: 312 },
  { name: 'فستان صيفي أنيق',     influencer: '@نورة_ستايل', price: '١٩٥', oldPrice: '٢٤٠', discount: 19, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80&fit=crop',   sizes: ['S','M','L','XL'], colors: ['#E8D5C4','#1A1A2E','#D4537E'], influencerImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80&fit=crop&crop=faces', seller: 'فاشون هاوس', rating: 4.6, reviews: 143 },
  { name: 'سماعات لاسلكية',       influencer: '@محمد_تك',    price: '٢٢٠', oldPrice: null,  discount: null, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&fit=crop', sizes: [], colors: ['#fff','#1A1A1A'], influencerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&fit=crop&crop=faces', seller: 'تك ستور', rating: 4.7, reviews: 206 },
  { name: 'حقيبة جلدية فاخرة',   influencer: '@نورة_ستايل', price: '٣٤٠', oldPrice: null,  discount: null, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80&fit=crop',   sizes: [], colors: ['#8B7355','#1A1A1A','#D4537E'], influencerImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80&fit=crop&crop=faces', seller: 'فاشون هاوس', rating: 4.8, reviews: 189 },
  { name: 'حذاء جري رياضي',      influencer: '@فاطمة_فيت',  price: '١٥٠', oldPrice: '١٩٠', discount: 21, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80&fit=crop',   sizes: ['٣٩','٤٠','٤١','٤٢'], colors: ['#7F77DD','#1A1A1A'], influencerImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80&fit=crop&crop=faces', seller: 'متجر الرياضة العالمي', rating: 4.7, reviews: 221 },
  { name: 'عطر فاخر',            influencer: '@لينا_بيوتي', price: '٣٢٠', oldPrice: '٣٨٠', discount: 16, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80&fit=crop',   sizes: ['٥٠مل','١٠٠مل'], colors: [], influencerImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&fit=crop&crop=faces', seller: 'بيوتي بالعربي', rating: 4.9, reviews: 267 },
];

const CATEGORIES_APP = [
  { label: 'أزياء',       icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=70&fit=crop' },
  { label: 'جمال',        icon: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&q=70&fit=crop' },
  { label: 'إلكترونيات', icon: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&q=70&fit=crop' },
  { label: 'رياضة',       icon: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&q=70&fit=crop' },
  { label: 'أطفال',       icon: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100&q=70&fit=crop' },
  { label: 'منزل',        icon: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&q=70&fit=crop' },
  { label: 'طعام',        icon: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&q=70&fit=crop' },
  { label: 'هدايا',       icon: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=100&q=70&fit=crop' },
];

function HomeScreen({ onNav, onProduct, onInfluencer }) {
  const products = APP_PRODUCTS.slice(0, 4);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ fontSize: 24, fontWeight: 900, background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>سوق</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ background: '#F5F0FF', border: 'none', borderRadius: 10, width: 36, height: 36, cursor: 'pointer', fontSize: 16 }}>🔍</button>
          <button onClick={() => onNav('cart')} style={{ background: '#FFF0F5', border: 'none', borderRadius: 10, width: 36, height: 36, cursor: 'pointer', fontSize: 16, position: 'relative' }}>
            🛒<span style={{ position: 'absolute', top: -3, left: -3, background: COLORS.pink, color: '#fff', borderRadius: 999, fontSize: 9, fontWeight: 700, padding: '1px 4px' }}>3</span>
          </button>
        </div>
      </div>
      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 68 }}>
        {/* Hero banner */}
        <div style={{ margin: '12px', borderRadius: 16, overflow: 'hidden', height: 150, position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&fit=crop" alt="hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left,rgba(0,0,0,0.05),rgba(26,26,46,0.65))', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
            <div>
              <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, lineHeight: 1.3 }}>عروض حصرية<br/>لهذا الأسبوع</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, marginTop: 4 }}>خصم حتى ٤٠٪ على الأزياء</div>
              <button style={{ marginTop: 10, background: '#fff', border: 'none', borderRadius: 999, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: COLORS.purple, cursor: 'pointer' }}>تسوق الآن</button>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: i===0?16:6, height: 6, borderRadius: 3, background: i===0?'#fff':'rgba(255,255,255,0.4)' }}/>)}
          </div>
        </div>

        {/* Featured Influencers */}
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.text, marginBottom: 10 }}>المؤثرون المميزون</div>
          <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 4 }}>
            {APP_INFLUENCERS.map((inf, i) => (
              <div key={i} onClick={() => onInfluencer(inf)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, cursor: 'pointer', flexShrink: 0 }}>
                <Avatar size={60} image={inf.img} border />
                <span style={{ fontSize: 11, color: COLORS.text, fontWeight: 600 }}>{inf.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.text, marginBottom: 10 }}>الفئات</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {CATEGORIES_APP.map((c, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', height: 64, position: 'relative', cursor: 'pointer' }}>
                <img src={c.icon} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy"/>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.55),rgba(0,0,0,0.1))', display: 'flex', alignItems: 'flex-end', padding: '5px 6px' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.text, marginBottom: 10 }}>الأكثر رواجاً</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {products.map((p, i) => <ProductCard key={i} {...p} onClick={() => onProduct(p)} />)}
          </div>
        </div>
      </div>
      <BottomNav active="home" onNav={onNav} />
    </div>
  );
}

function InfluencerScreen({ influencer, onBack, onProduct }) {
  const products = APP_PRODUCTS.slice(0, 4).map(p => ({ ...p, influencer: influencer?.name || '@سارة', influencerImg: influencer?.img }));
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl', overflowY: 'auto', paddingBottom: 68 }}>
      {/* Cover */}
      <div style={{ height: 180, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&fit=crop" alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.3),rgba(0,0,0,0.1))' }}/>
        <button onClick={onBack} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: 10, width: 36, height: 36, fontSize: 16, cursor: 'pointer', backdropFilter: 'blur(8px)' }}>←</button>
        <div style={{ position: 'absolute', bottom: -36, right: 16 }}>
          <Avatar size={72} image={influencer?.img} border />
        </div>
      </div>
      <div style={{ background: '#fff', padding: '44px 16px 16px', borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text }}>{influencer?.name || 'سارة'} الأزياء</div>
        <div style={{ fontSize: 13, color: COLORS.text2, lineHeight: 1.6, marginTop: 4 }}>مؤثرة في عالم الأزياء والجمال · الرياض، السعودية</div>
        <div style={{ display: 'flex', gap: 24, marginTop: 14, paddingTop: 14, borderTop: '1px solid #F0F0F0' }}>
          {[['١٢٠ ألف', 'متابع'], ['٢٣٤', 'منتج'], ['٤.٨K', 'مبيعات']].map(([v, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: COLORS.purple }}>{v}</span>
              <span style={{ fontSize: 11, color: COLORS.text2 }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14 }}><Btn full>متابعة</Btn></div>
      </div>
      <div style={{ display: 'flex', background: '#fff', borderBottom: '2px solid #F0F0F0' }}>
        {['المنتجات', 'المجموعات', 'التقييمات'].map((t, i) => (
          <div key={t} style={{ flex: 1, textAlign: 'center', padding: '12px 0', fontSize: 13, fontWeight: i===0?700:500, color: i===0?COLORS.purple:COLORS.text2, borderBottom: i===0?`2px solid ${COLORS.purple}`:'2px solid transparent', cursor: 'pointer', marginBottom: -2 }}>{t}</div>
        ))}
      </div>
      <div style={{ padding: 12, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {products.map((p, i) => <ProductCard key={i} {...p} onClick={() => onProduct(p)} />)}
      </div>
      <BottomNav active="explore" onNav={() => {}} />
    </div>
  );
}

function ProductScreen({ product, onBack, onCart }) {
  const [selectedColor, setSelectedColor] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const p = product || APP_PRODUCTS[0];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
        {/* Image */}
        <div style={{ height: 300, position: 'relative', overflow: 'hidden', background: '#F8F8F8' }}>
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button onClick={onBack} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: 10, width: 36, height: 36, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>←</button>
          <button style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: 10, width: 36, height: 36, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>♡</button>
          <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4 }}>
            {[0,1,2,3].map(i => <div key={i} style={{ width: i===0?16:6, height: 6, borderRadius: 3, background: i===0?COLORS.purple:'#E5E7EB' }}/>)}
          </div>
        </div>
        <div style={{ padding: 16 }}>
          <InfluencerChip name={p.influencer?.replace('@','') || 'سارة_فيشن'} image={p.influencerImg} />
          <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text, marginTop: 10, lineHeight: 1.3 }}>{p.name}</div>
          <div style={{ marginTop: 6 }}><StarRating rating={p.rating || 4.8} count={p.reviews || 128} /></div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: COLORS.text }}>{p.price} ر.س</span>
            {p.oldPrice && <span style={{ fontSize: 15, color: COLORS.text3, textDecoration: 'line-through' }}>{p.oldPrice} ر.س</span>}
            {p.discount && <Badge color={COLORS.pink}>-{p.discount}%</Badge>}
          </div>
          {/* Colors */}
          {p.colors && p.colors.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>اللون</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {p.colors.map((c, i) => (
                  <div key={i} onClick={() => setSelectedColor(i)} style={{ width: 32, height: 32, borderRadius: 999, background: c, border: '2px solid transparent', cursor: 'pointer', boxShadow: selectedColor===i?`0 0 0 2px white, 0 0 0 4px ${COLORS.purple}`:'none', transition: 'all 0.2s' }}/>
                ))}
              </div>
            </div>
          )}
          {/* Sizes */}
          {p.sizes && p.sizes.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text, marginBottom: 8 }}>المقاس</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {p.sizes.map((s, i) => (
                  <div key={i} onClick={() => setSelectedSize(i)} style={{ padding: '8px 14px', borderRadius: 999, border: `1.5px solid ${selectedSize===i?COLORS.purple:'#E5E7EB'}`, background: selectedSize===i?COLORS.purple:'#fff', color: selectedSize===i?'#fff':COLORS.text2, fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>{s}</div>
                ))}
              </div>
            </div>
          )}
          {/* Seller */}
          <div style={{ marginTop: 16, padding: '12px', background: '#FAFAFA', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div><div style={{ fontSize: 11, color: COLORS.text2 }}>البائع</div><div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>{p.seller || 'متجر الرياضة العالمي'}</div></div>
            <span style={{ color: COLORS.purple, fontSize: 18 }}>›</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: '#fff', borderTop: '1px solid #E5E7EB', display: 'flex', gap: 10 }}>
        <Btn variant="secondary" onClick={onCart}>أضف للسلة</Btn>
        <Btn full onClick={onCart}>اشتر الآن</Btn>
      </div>
    </div>
  );
}

function CartScreen({ onBack, onCheckout }) {
  const [items, setItems] = React.useState([
    { id: 1, seller: 'متجر الرياضة العالمي', name: 'حذاء نايك Air Max', variant: 'أسود · ٤١', price: 120, qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=70&fit=crop' },
    { id: 2, seller: 'متجر الرياضة العالمي', name: 'حذاء جري رياضي',   variant: 'أزرق · ٤٢', price: 150, qty: 1, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&q=70&fit=crop' },
    { id: 3, seller: 'بيوتي بالعربي',        name: 'كريم ترطيب فاخر',  variant: '٥٠مل',      price: 85,  qty: 1, image: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=200&q=70&fit=crop' },
  ]);
  const sellers = [...new Set(items.map(i => i.seller))];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = 20;
  const delivery = subtotal > 200 ? 0 : 15;
  const changeQty = (id, delta) => setItems(items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFAFA', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
      <TopBar title={`السلة (${items.length})`} back onBack={onBack} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 80px' }}>
        {sellers.map(seller => (
          <div key={seller} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.text2, marginBottom: 8 }}>من: {seller}</div>
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', overflow: 'hidden' }}>
              {items.filter(i => i.seller === seller).map((item, idx, arr) => (
                <div key={item.id} style={{ display: 'flex', gap: 10, padding: 12, borderBottom: idx < arr.length-1 ? '1px solid #F0F0F0' : 'none', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: COLORS.text2, marginTop: 2 }}>{item.variant}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginTop: 4 }}>{item.price * item.qty} ر.س</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                    <button onClick={() => changeQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid #E5E7EB', background: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: 16 }}>−</button>
                    <span style={{ fontSize: 14, fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: 8, background: grad, border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: 16 }}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Coupon */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <input placeholder="كود الخصم" style={{ flex: 1, height: 44, border: '1.5px solid #E5E7EB', borderRadius: 12, padding: '0 12px', fontFamily: 'Cairo, sans-serif', fontSize: 13, outline: 'none' }} />
          <button style={{ background: grad, border: 'none', borderRadius: 12, color: '#fff', fontSize: 13, fontWeight: 700, padding: '0 16px', cursor: 'pointer', fontFamily: 'Cairo, sans-serif' }}>تطبيق</button>
        </div>
        {/* Summary */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB', padding: 14 }}>
          {delivery === 0 && <div style={{ background: '#F0FDF4', borderRadius: 8, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: COLORS.success, fontWeight: 600 }}>✓ مبروك! شحن مجاني على طلبك</div>}
          {[['المجموع الفرعي', `${subtotal} ر.س`], ['الخصم', `-${discount} ر.س`, true], ['رسوم التوصيل', delivery === 0 ? 'مجاني' : `${delivery} ر.س`, false, delivery === 0]].map(([l, v, neg, green]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
              <span style={{ color: COLORS.text2 }}>{l}</span>
              <span style={{ fontWeight: 600, color: neg || green ? COLORS.success : COLORS.text }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: COLORS.text }}>الإجمالي</span>
            <span style={{ fontSize: 17, fontWeight: 900, color: COLORS.text }}>{subtotal - discount + delivery} ر.س</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: '#fff', borderTop: '1px solid #E5E7EB' }}>
        <Btn full onClick={onCheckout}>إتمام الشراء — {subtotal - discount + delivery} ر.س</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, InfluencerScreen, ProductScreen, CartScreen });
