// Souk Website — Shared Components
// Exposes: SiteHeader, SiteFooter, ProductCard, InfluencerCard, StarRating, Badge

const C = { purple:'#7F77DD', pink:'#D4537E', text:'#1A1A1A', text2:'#6B7280', text3:'#9CA3AF', border:'#E5E7EB', success:'#1D9E75', warning:'#F59E0B', error:'#E24B4A' };
const grad = 'linear-gradient(135deg,#7F77DD,#D4537E)';

function SiteHeader({ lang, setLang, cartCount, onNav, page }) {
  const isRTL = lang !== 'en';
  return (
    <header style={{position:'sticky',top:0,zIndex:100,background:'rgba(255,255,255,0.95)',backdropFilter:'blur(12px)',borderBottom:`1px solid ${C.border}`,height:68,display:'flex',alignItems:'center',padding:'0 48px',gap:24,direction:isRTL?'rtl':'ltr'}}>
      {/* Logo */}
      <div onClick={()=>onNav('home')} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',flexShrink:0}}>
        <div style={{width:38,height:38,borderRadius:10,background:grad,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <svg width="22" height="22" viewBox="0 0 80 80" fill="none"><rect x="14" y="28" width="52" height="42" rx="10" fill="white" fillOpacity="0.9"/><rect x="22" y="23" width="36" height="10" rx="5" fill="#C8A84B"/></svg>
        </div>
        <div style={{display:'flex',flexDirection:'column',lineHeight:1}}>
          <span style={{fontSize:20,fontWeight:900,background:grad,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>سوق</span>
          <span style={{fontSize:9,color:C.text3,fontWeight:600,letterSpacing:'0.14em',marginTop:2}}>MAHATTA</span>
        </div>
      </div>
      {/* Search — takes the whole middle */}
      <div style={{flex:1,position:'relative'}}>
        <input placeholder={lang==='en'?'Search products, brands, influencers…':'ابحث عن منتجات، ماركات، مؤثرين…'} style={{width:'100%',height:44,border:`1.5px solid ${C.border}`,borderRadius:12,padding: isRTL ? '0 48px 0 16px' : '0 16px 0 48px',fontFamily:'Cairo,sans-serif',fontSize:13,outline:'none',background:'#FAFAFA',color:C.text,direction:isRTL?'rtl':'ltr'}}/>
        <span style={{position:'absolute',top:'50%',transform:'translateY(-50%)',color:C.text3,...(isRTL?{right:16}:{left:16}),display:'flex'}}><Icon name="search" size={18}/></span>
      </div>
      {/* Actions — only 2 buttons + cart + lang */}
      <div style={{display:'flex',gap:10,flexShrink:0,alignItems:'center'}}>
        <button onClick={()=>setLang(l=>l==='ar'?'en':'ar')} title="Language" style={{background:'none',border:`1.5px solid ${C.border}`,borderRadius:10,height:42,padding:'0 12px',fontSize:12,fontWeight:700,color:C.text2,cursor:'pointer',fontFamily:'Cairo,sans-serif'}}>
          {lang==='ar'?'EN':'عربي'}
        </button>
        <button onClick={()=>onNav('cart')} title="Cart" style={{background:'none',border:`1.5px solid ${C.border}`,borderRadius:10,width:42,height:42,cursor:'pointer',position:'relative',display:'flex',alignItems:'center',justifyContent:'center',color:C.text}}>
          <Icon name="cart" size={20}/>
          {cartCount>0 && <span style={{position:'absolute',top:-5,...(isRTL?{left:-5}:{right:-5}),background:C.pink,color:'#fff',borderRadius:999,fontSize:10,fontWeight:800,padding:'1px 6px',border:'2px solid #fff'}}>{cartCount}</span>}
        </button>
        <button onClick={()=>onNav('listing')} style={{background:grad,border:'none',borderRadius:10,padding:'0 20px',height:42,fontSize:13,fontWeight:700,color:'#fff',cursor:'pointer',fontFamily:'Cairo,sans-serif',whiteSpace:'nowrap',boxShadow:'0 6px 16px rgba(212,83,126,0.25)'}}>
          {lang==='en'?'Shop Now':'تسوق الآن'}
        </button>
      </div>
    </header>
  );
}

function SiteFooter({ lang }) {
  const isRTL = lang !== 'en';
  return (
    <footer style={{background:'#1A1A2E',color:'#fff',padding:'48px',direction:isRTL?'rtl':'ltr',marginTop:64}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40}}>
        <div>
          <div style={{fontSize:26,fontWeight:900,background:grad,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',marginBottom:12}}>سوق · Souk</div>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',lineHeight:1.8,maxWidth:280}}>{isRTL?'المنصة الأولى للتسوق عبر المؤثرين في المملكة العربية السعودية. اكتشف، تسوق، ثق.':'Saudi Arabia\'s #1 influencer-driven marketplace.'}</p>
        </div>
        {[[isRTL?'روابط سريعة':'Quick Links',['الرئيسية','المنتجات','المؤثرون','العروض']],
          [isRTL?'الدعم':'Support',['مركز المساعدة','الشحن والتوصيل','الإرجاع','تواصل معنا']],
          [isRTL?'الشركة':'Company',['من نحن','الشراكة معنا','البائعون','المدونة']]
        ].map(([title, links])=>(
          <div key={title}>
            <div style={{fontSize:13,fontWeight:700,marginBottom:12,color:'rgba(255,255,255,0.9)'}}>{title}</div>
            {links.map(l=><div key={l} style={{fontSize:12,color:'rgba(255,255,255,0.45)',marginBottom:8,cursor:'pointer'}}>{l}</div>)}
          </div>
        ))}
      </div>
      <div style={{maxWidth:1200,margin:'32px auto 0',paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontSize:12,color:'rgba(255,255,255,0.35)'}}>© ٢٠٢٤ سوق · محطة. جميع الحقوق محفوظة.</div>
        <div style={{display:'flex',gap:16}}>
          {['instagram','tiktok','twitter','youtube'].map((n,i)=><div key={i} style={{width:34,height:34,borderRadius:8,background:'rgba(255,255,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'rgba(255,255,255,0.7)'}}><Icon name={n} size={16}/></div>)}
        </div>
      </div>
    </footer>
  );
}

function ProductCard({ product, lang, onProduct, compact }) {
  const [hovered, setHovered] = React.useState(false);
  const isRTL = lang !== 'en';
  const inf = INFLUENCERS.find(i=>i.id===product.influencerId);
  return (
    <div onClick={()=>onProduct(product)} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{background:'#fff',borderRadius:16,border:`1px solid ${C.border}`,overflow:'hidden',cursor:'pointer',transition:'all 0.2s',transform:hovered?'translateY(-4px)':'none',boxShadow:hovered?'0 12px 40px rgba(127,119,221,0.15)':'0 2px 8px rgba(0,0,0,0.04)',direction:isRTL?'rtl':'ltr'}}>
      <div style={{position:'relative',height:compact?160:200,overflow:'hidden',background:'#F8F8F8'}}>
        <img src={product.img} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.4s',transform:hovered?'scale(1.05)':'scale(1)'}} loading="lazy"/>
        {product.discount && <div style={{position:'absolute',top:10,right:isRTL?10:undefined,left:isRTL?undefined:10,background:grad,color:'#fff',fontSize:11,fontWeight:800,borderRadius:999,padding:'3px 9px'}}>-{product.discount}%</div>}
        <button onClick={e=>{e.stopPropagation();}} style={{position:'absolute',top:10,left:isRTL?10:undefined,right:isRTL?undefined:10,background:'rgba(255,255,255,0.9)',border:'none',borderRadius:10,width:32,height:32,cursor:'pointer',fontSize:15,backdropFilter:'blur(4px)'}}>♡</button>
      </div>
      <div style={{padding:compact?'10px 12px':'14px 16px'}}>
        {inf && <div style={{display:'flex',alignItems:'center',gap:5,marginBottom:6}}>
          <img src={inf.img} alt={inf.name} style={{width:18,height:18,borderRadius:999,objectFit:'cover'}}/>
          <span style={{fontSize:11,color:C.purple,fontWeight:600}}>{isRTL?inf.name:inf.nameEn}</span>
        </div>}
        <div style={{fontSize:compact?12:13,fontWeight:700,color:C.text,lineHeight:1.4,marginBottom:6}}>{isRTL?product.name:product.nameEn}</div>
        <div style={{fontSize:10,color:C.text3,marginBottom:6}}>{product.brand}</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:6}}>
            <span style={{fontSize:compact?14:16,fontWeight:900,color:C.text}}>{product.price} {isRTL?'ر.س':'SAR'}</span>
            {product.oldPrice && <span style={{fontSize:11,color:C.text3,textDecoration:'line-through'}}>{product.oldPrice}</span>}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:3}}>
            <span style={{color:'#F59E0B',fontSize:11}}>★</span>
            <span style={{fontSize:11,color:C.text2,fontWeight:600}}>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfluencerCard({ influencer, lang, onInfluencer }) {
  const isRTL = lang !== 'en';
  return (
    <div onClick={()=>onInfluencer(influencer)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8,cursor:'pointer',flexShrink:0,width:100}}>
      <div style={{width:72,height:72,borderRadius:999,overflow:'hidden',border:`2.5px solid ${C.purple}`,padding:2,background:'#fff',boxSizing:'border-box'}}>
        <img src={influencer.img} alt={influencer.name} style={{width:'100%',height:'100%',borderRadius:999,objectFit:'cover'}}/>
      </div>
      <div style={{fontSize:12,fontWeight:700,color:C.text,textAlign:'center',lineHeight:1.3}}>{isRTL?influencer.name:influencer.nameEn}</div>
      <div style={{fontSize:10,color:C.text3}}>{influencer.followers}</div>
    </div>
  );
}

// ── Multi-Banner Carousel ────────────────────────────────────
// Reads from localStorage('souk.banners') so the admin panel can manage it.
// Each banner: { id, img, eyebrowAr, eyebrowEn, titleAr, titleEn, subAr, subEn, ctaAr, ctaEn, href, tint }
const DEFAULT_BANNERS = [
  {
    id:'b1',
    img:'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&fit=crop',
    eyebrowAr:'المنصة الأولى للتسوق عبر المؤثرين', eyebrowEn:'#1 INFLUENCER MARKETPLACE',
    titleAr:'اكتشف\nتسوق بثقة', titleEn:'Discover.\nShop Smart.',
    subAr:'منتجات مختارة بعناية من مؤثرين موثوقين في الأزياء والجمال والتكنولوجيا.',
    subEn:'Curated products from trusted influencers in fashion, beauty, and tech.',
    ctaAr:'تسوق الآن', ctaEn:'Shop Now', href:'listing', tint:'rgba(26,26,46,0.7)',
  },
  {
    id:'b2',
    img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80&fit=crop',
    eyebrowAr:'مجموعة رمضان', eyebrowEn:'RAMADAN COLLECTION',
    titleAr:'أناقة\nتُحاكي التراث', titleEn:'Heritage,\nreimagined.',
    subAr:'أزياء وعطور وهدايا من أفخر العلامات السعودية، بخصم حتى ٤٠٪.',
    subEn:'Fashion, fragrance and gifts from Saudi\'s finest brands — up to 40% off.',
    ctaAr:'اكتشف المجموعة', ctaEn:'Explore Collection', href:'listing', tint:'rgba(127,119,221,0.55)',
  },
  {
    id:'b3',
    img:'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80&fit=crop',
    eyebrowAr:'إطلاق حصري', eyebrowEn:'EXCLUSIVE DROP',
    titleAr:'جديد من\nالمؤثرين', titleEn:'New from\nyour favourites.',
    subAr:'إطلاقات محدودة العدد — قبل أن تنفد.',
    subEn:'Limited drops curated by top creators — before they\'re gone.',
    ctaAr:'شاهد الآن', ctaEn:'Shop Drops', href:'influencer', tint:'rgba(212,83,126,0.5)',
  },
];
function loadBanners() {
  try { const saved = JSON.parse(localStorage.getItem('souk.banners')); if(Array.isArray(saved) && saved.length) return saved; } catch(e){}
  return DEFAULT_BANNERS;
}
function BannerCarousel({ lang, onNav }) {
  const isRTL = lang !== 'en';
  const [banners, setBanners] = React.useState(loadBanners);
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(()=>{
    const h = ()=>setBanners(loadBanners());
    window.addEventListener('storage', h);
    window.addEventListener('souk-banners-changed', h);
    return ()=>{window.removeEventListener('storage',h);window.removeEventListener('souk-banners-changed',h);};
  },[]);
  React.useEffect(()=>{
    if(paused || banners.length<2) return;
    const t = setInterval(()=>setIdx(i=>(i+1)%banners.length), 5500);
    return ()=>clearInterval(t);
  },[paused, banners.length]);
  const go = (d)=>setIdx(i=>(i+d+banners.length)%banners.length);
  return (
    <div onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}
      style={{height:520,position:'relative',overflow:'hidden',background:'#1A1A2E'}}>
      {banners.map((b,i)=>(
        <div key={b.id} style={{position:'absolute',inset:0,opacity:i===idx?1:0,transition:'opacity 0.8s ease'}}>
          <img src={b.img} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:`linear-gradient(to ${isRTL?'left':'right'}, ${b.tint||'rgba(26,26,46,0.7)'}, rgba(0,0,0,0.05))`}}/>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',padding:'0 80px'}}>
            <div style={{maxWidth:560}}>
              <div style={{background:grad,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontSize:13,fontWeight:800,marginBottom:14,letterSpacing:'0.1em'}}>{isRTL?b.eyebrowAr:b.eyebrowEn}</div>
              <h1 style={{color:'#fff',fontSize:56,fontWeight:900,lineHeight:1.1,margin:'0 0 18px',whiteSpace:'pre-line',textShadow:'0 4px 24px rgba(0,0,0,0.3)'}}>{isRTL?b.titleAr:b.titleEn}</h1>
              <p style={{color:'rgba(255,255,255,0.82)',fontSize:16,lineHeight:1.7,marginBottom:28,maxWidth:440}}>{isRTL?b.subAr:b.subEn}</p>
              <div style={{display:'flex',gap:12}}>
                <button onClick={()=>onNav(b.href||'listing')} style={{background:grad,border:'none',borderRadius:14,padding:'15px 34px',color:'#fff',fontSize:15,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif',boxShadow:'0 8px 24px rgba(212,83,126,0.45)'}}>
                  {isRTL?b.ctaAr:b.ctaEn}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* arrows */}
      {banners.length>1 && <>
        <button onClick={()=>go(isRTL?1:-1)} style={{position:'absolute',top:'50%',left:20,transform:'translateY(-50%)',width:44,height:44,borderRadius:999,border:'none',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',color:'#fff',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon name="chevronLeft" size={22}/>
        </button>
        <button onClick={()=>go(isRTL?-1:1)} style={{position:'absolute',top:'50%',right:20,transform:'translateY(-50%)',width:44,height:44,borderRadius:999,border:'none',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',color:'#fff',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon name="chevronRight" size={22}/>
        </button>
        {/* dots */}
        <div style={{position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',display:'flex',gap:8}}>
          {banners.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} style={{width:i===idx?28:8,height:8,borderRadius:8,border:'none',background:i===idx?'#fff':'rgba(255,255,255,0.45)',cursor:'pointer',transition:'width 0.3s'}}/>
          ))}
        </div>
      </>}
      {/* Stats strip */}
      <div style={{position:'absolute',bottom:24,...(isRTL?{right:80}:{left:80}),display:'flex',gap:12,pointerEvents:'none'}}>
        {[[isRTL?'مؤثر':'Influencers','٤٨+'],[isRTL?'منتج':'Products','١,٢٠٠+'],[isRTL?'عميل':'Customers','٥٠K+']].map(([l,v])=>(
          <div key={l} style={{background:'rgba(255,255,255,0.12)',backdropFilter:'blur(12px)',borderRadius:12,padding:'10px 16px',border:'1px solid rgba(255,255,255,0.18)'}}>
            <div style={{fontSize:18,fontWeight:900,color:'#fff',lineHeight:1}}>{v}</div>
            <div style={{fontSize:10,color:'rgba(255,255,255,0.7)',marginTop:3}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { C, grad, SiteHeader, SiteFooter, ProductCard, InfluencerCard, BannerCarousel, DEFAULT_BANNERS });
