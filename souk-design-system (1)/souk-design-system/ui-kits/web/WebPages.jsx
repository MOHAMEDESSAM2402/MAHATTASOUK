// Souk Website — All 5 Pages
// HomePage, ListingPage, ProductPage, CartPage, InfluencerPage

function HomePage({ lang, onProduct, onInfluencer, onNav, onCategory }) {
  const isRTL = lang !== 'en';
  const featured = PRODUCTS.slice(0, 8);
  const more = PRODUCTS.slice(8, 16);
  return (
    <div style={{direction:isRTL?'rtl':'ltr'}}>
      {/* Multi-banner carousel — managed from Admin Panel */}
      <BannerCarousel lang={lang} onNav={onNav}/>

      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 48px'}}>
        {/* Featured Influencers */}
        <section style={{padding:'48px 0 32px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
            <h2 style={{fontSize:22,fontWeight:800,color:C.text}}>{isRTL?'المؤثرون المميزون':'Featured Influencers'}</h2>
            <button onClick={()=>onNav('influencer')} style={{background:'none',border:`1.5px solid ${C.border}`,borderRadius:999,padding:'7px 18px',fontSize:12,fontWeight:700,color:C.purple,cursor:'pointer',fontFamily:'Cairo,sans-serif'}}>{isRTL?'عرض الكل':'See All'}</button>
          </div>
          <div style={{display:'flex',gap:24,overflowX:'auto',paddingBottom:8}}>
            {INFLUENCERS.map(inf=><InfluencerCard key={inf.id} influencer={inf} lang={lang} onInfluencer={onInfluencer}/>)}
          </div>
        </section>

        {/* Categories */}
        <section style={{padding:'32px 0'}}>
          <h2 style={{fontSize:22,fontWeight:800,color:C.text,marginBottom:20}}>{isRTL?'تسوق حسب الفئة':'Shop by Category'}</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(8,1fr)',gap:12}}>
            {CATEGORIES.map(cat=>(
              <div key={cat.id} onClick={()=>onCategory(cat.id)} style={{borderRadius:14,overflow:'hidden',cursor:'pointer',position:'relative',height:110}}>
                <img src={cat.img} alt={cat.label} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.3s'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.08)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0.1))',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'8px 10px'}}>
                  <div style={{fontSize:12,fontWeight:700,color:'#fff'}}>{isRTL?cat.label:cat.labelEn}</div>
                  <div style={{fontSize:10,color:'rgba(255,255,255,0.7)'}}>{cat.count} {isRTL?'منتج':'items'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Now */}
        <section style={{padding:'32px 0'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
            <h2 style={{fontSize:22,fontWeight:800,color:C.text}}>{isRTL?'الأكثر رواجاً':'Trending Now'}</h2>
            <button onClick={()=>onNav('listing')} style={{background:'none',border:`1.5px solid ${C.border}`,borderRadius:999,padding:'7px 18px',fontSize:12,fontWeight:700,color:C.purple,cursor:'pointer',fontFamily:'Cairo,sans-serif'}}>{isRTL?'عرض الكل':'View All'}</button>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {featured.map(p=><ProductCard key={p.id} product={p} lang={lang} onProduct={onProduct}/>)}
          </div>
        </section>

        {/* Mid-page Banner */}
        <section style={{padding:'16px 0 32px'}}>
          <div style={{borderRadius:20,overflow:'hidden',height:200,position:'relative'}}>
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=80&fit=crop" alt="promo" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to left,transparent,rgba(26,26,46,0.8))',display:'flex',alignItems:'center',padding:'0 48px'}}>
              <div>
                <div style={{fontSize:14,fontWeight:700,color:'#F59E0B',marginBottom:8}}>{isRTL?'⚡ عروض اليوم فقط':'⚡ Today Only'}</div>
                <div style={{fontSize:32,fontWeight:900,color:'#fff',lineHeight:1.2}}>{isRTL?'خصم حتى ٤٠٪\nعلى الأزياء':'Up to 40% OFF\nFashion'}</div>
                <button onClick={()=>onCategory('fashion')} style={{marginTop:16,background:grad,border:'none',borderRadius:12,padding:'10px 24px',color:'#fff',fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif'}}>{isRTL?'استغل العرض':'Grab Deal'}</button>
              </div>
            </div>
          </div>
        </section>

        {/* More Products */}
        <section style={{padding:'16px 0 48px'}}>
          <h2 style={{fontSize:22,fontWeight:800,color:C.text,marginBottom:20}}>{isRTL?'منتجات أخرى قد تعجبك':'More You\'ll Love'}</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {more.map(p=><ProductCard key={p.id} product={p} lang={lang} onProduct={onProduct}/>)}
          </div>
        </section>
      </div>
    </div>
  );
}

function ListingPage({ lang, onProduct, selectedCat, setSelectedCat }) {
  const isRTL = lang !== 'en';
  const [priceMax, setPriceMax] = React.useState(500);
  const filtered = PRODUCTS.filter(p=> (!selectedCat || selectedCat==='all' || p.cat===selectedCat) && p.price<=priceMax);
  return (
    <div style={{maxWidth:1280,margin:'0 auto',padding:'32px 48px',direction:isRTL?'rtl':'ltr'}}>
      <div style={{fontSize:12,color:C.text3,marginBottom:20}}>{isRTL?'الرئيسية':'Home'} / {selectedCat ? (CATEGORIES.find(c=>c.id===selectedCat)?.[isRTL?'label':'labelEn'] || selectedCat) : (isRTL?'المنتجات':'Products')}</div>
      <div style={{display:'grid',gridTemplateColumns:'240px 1fr',gap:32}}>
        {/* Filters */}
        <div style={{position:'sticky',top:80,alignSelf:'flex-start'}}>
          <div style={{background:'#fff',borderRadius:16,border:`1px solid ${C.border}`,padding:20}}>
            <div style={{fontSize:15,fontWeight:800,marginBottom:16}}>{isRTL?'تصفية النتائج':'Filters'}</div>
            <div style={{marginBottom:20}}>
              <div style={{fontSize:12,fontWeight:700,color:C.text2,marginBottom:10}}>{isRTL?'الفئة':'Category'}</div>
              {[{id:'all',label:'الكل',labelEn:'All'},...CATEGORIES].map(cat=>(
                <div key={cat.id} onClick={()=>setSelectedCat(cat.id==='all'?null:cat.id)} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',cursor:'pointer',fontSize:13,fontWeight:selectedCat===cat.id||(cat.id==='all'&&!selectedCat)?700:400,color:selectedCat===cat.id||(cat.id==='all'&&!selectedCat)?C.purple:C.text2}}>
                  <span>{isRTL?(cat.label||'الكل'):(cat.labelEn||'All')}</span>
                  <span style={{fontSize:11,color:C.text3}}>{cat.id==='all'?PRODUCTS.length:PRODUCTS.filter(p=>p.cat===cat.id).length}</span>
                </div>
              ))}
            </div>
            <div style={{marginBottom:20}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:700,color:C.text2}}>{isRTL?'السعر الأقصى':'Max Price'}</div>
                <div style={{fontSize:12,fontWeight:700,color:C.purple}}>{priceMax} {isRTL?'ر.س':'SAR'}</div>
              </div>
              <input type="range" min={50} max={500} value={priceMax} onChange={e=>setPriceMax(+e.target.value)} style={{width:'100%',accentColor:C.purple}}/>
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:700,color:C.text2,marginBottom:10}}>{isRTL?'البائع':'Seller'}</div>
              {['متجر الرياضة العالمي','بيوتي بالعربي','تك ستور','فاشون هاوس','سبورت زون'].map(s=>(
                <label key={s} style={{display:'flex',alignItems:'center',gap:8,marginBottom:7,cursor:'pointer'}}>
                  <input type="checkbox" defaultChecked style={{accentColor:C.purple}}/>
                  <span style={{fontSize:12,color:C.text2}}>{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* Grid */}
        <div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
            <div style={{fontSize:14,color:C.text2}}>{filtered.length} {isRTL?'منتج':'products'}</div>
            <select style={{height:36,border:`1.5px solid ${C.border}`,borderRadius:9,padding:'0 12px',fontFamily:'Cairo,sans-serif',fontSize:13,outline:'none',background:'#fff'}}>
              <option>{isRTL?'الأكثر رواجاً':'Most Popular'}</option>
              <option>{isRTL?'السعر: الأقل أولاً':'Price: Low to High'}</option>
              <option>{isRTL?'السعر: الأعلى أولاً':'Price: High to Low'}</option>
              <option>{isRTL?'الأعلى تقييماً':'Highest Rated'}</option>
            </select>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {filtered.map(p=><ProductCard key={p.id} product={p} lang={lang} onProduct={onProduct} compact/>)}
          </div>
          {filtered.length===0 && <div style={{textAlign:'center',padding:'60px 0',color:C.text3,fontSize:15}}>{isRTL?'لا توجد منتجات بهذه المعايير':'No products match your filters'}</div>}
        </div>
      </div>
    </div>
  );
}

function ProductPage({ product, lang, onBack, addToCart }) {
  const isRTL = lang !== 'en';
  const [selectedImg, setSelectedImg] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(0);
  const inf = INFLUENCERS.find(i=>i.id===product.influencerId);
  const related = PRODUCTS.filter(p=>p.cat===product.cat&&p.id!==product.id).slice(0,4);
  return (
    <div style={{maxWidth:1280,margin:'0 auto',padding:'32px 48px',direction:isRTL?'rtl':'ltr'}}>
      <button onClick={onBack} style={{background:'none',border:'none',color:C.purple,fontSize:13,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif',marginBottom:20,display:'flex',alignItems:'center',gap:6}}>
        {isRTL?'← رجوع':'← Back'}
      </button>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,marginBottom:64}}>
        {/* Images */}
        <div>
          <div style={{borderRadius:20,overflow:'hidden',height:440,background:'#F8F8F8',marginBottom:12}}>
            <img src={product.imgs[selectedImg]||product.img} alt={product.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div style={{display:'flex',gap:10}}>
            {product.imgs.map((img,i)=>(
              <div key={i} onClick={()=>setSelectedImg(i)} style={{width:72,height:72,borderRadius:10,overflow:'hidden',border:`2px solid ${selectedImg===i?C.purple:C.border}`,cursor:'pointer',flexShrink:0}}>
                <img src={img} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
            ))}
          </div>
        </div>
        {/* Info */}
        <div>
          {inf && (
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:14,background:'#F5F0FF',borderRadius:999,padding:'6px 12px 6px 8px',width:'fit-content'}}>
              <img src={inf.img} alt={inf.name} style={{width:28,height:28,borderRadius:999,objectFit:'cover'}}/>
              <span style={{fontSize:12,fontWeight:700,color:C.purple}}>{isRTL?`بواسطة ${inf.name}`:`By ${inf.nameEn}`}</span>
            </div>
          )}
          <h1 style={{fontSize:28,fontWeight:900,color:C.text,lineHeight:1.2,marginBottom:8}}>{isRTL?product.name:product.nameEn}</h1>
          <div style={{fontSize:13,color:C.text3,marginBottom:12}}>{product.brand}</div>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16}}>
            {[1,2,3,4,5].map(i=><span key={i} style={{color:i<=Math.round(product.rating)?'#F59E0B':'#E5E7EB',fontSize:18}}>★</span>)}
            <span style={{fontSize:13,color:C.text2,fontWeight:600}}>{product.rating} ({product.reviews} {isRTL?'تقييم':'reviews'})</span>
          </div>
          <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:24,paddingBottom:24,borderBottom:`1px solid ${C.border}`}}>
            <span style={{fontSize:36,fontWeight:900,color:C.text}}>{product.price}</span>
            <span style={{fontSize:18,color:C.text2}}>{isRTL?'ر.س':'SAR'}</span>
            {product.oldPrice && <span style={{fontSize:18,color:C.text3,textDecoration:'line-through'}}>{product.oldPrice}</span>}
            {product.discount && <span style={{background:grad,color:'#fff',borderRadius:999,fontSize:12,fontWeight:800,padding:'3px 10px'}}>-{product.discount}%</span>}
          </div>
          {product.colors.length>0 && (
            <div style={{marginBottom:20}}>
              <div style={{fontSize:13,fontWeight:700,marginBottom:10}}>{isRTL?'اللون':'Color'}</div>
              <div style={{display:'flex',gap:10}}>
                {product.colors.map((c,i)=>(
                  <div key={i} onClick={()=>setSelectedColor(i)} style={{width:32,height:32,borderRadius:999,background:c,border:`2.5px solid ${selectedColor===i?C.purple:'transparent'}`,cursor:'pointer',outline:selectedColor===i?`2px solid ${C.purple}`:none,outlineOffset:3,transition:'all 0.2s'}}/>
                ))}
              </div>
            </div>
          )}
          {product.sizes.length>0 && (
            <div style={{marginBottom:24}}>
              <div style={{fontSize:13,fontWeight:700,marginBottom:10}}>{isRTL?'المقاس':'Size'}</div>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {product.sizes.map((s,i)=>(
                  <div key={i} onClick={()=>setSelectedSize(i)} style={{padding:'8px 16px',borderRadius:999,border:`1.5px solid ${selectedSize===i?C.purple:C.border}`,background:selectedSize===i?C.purple:'#fff',color:selectedSize===i?'#fff':C.text2,fontSize:13,fontWeight:700,cursor:'pointer',transition:'all 0.2s'}}>{s}</div>
                ))}
              </div>
            </div>
          )}
          <div style={{background:'#FAFAFA',borderRadius:14,padding:'12px 16px',marginBottom:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><div style={{fontSize:11,color:C.text3}}>{isRTL?'البائع':'Seller'}</div><div style={{fontSize:14,fontWeight:700,color:C.text}}>{product.seller}</div></div>
            <span style={{color:C.text3,fontSize:18}}>›</span>
          </div>
          <div style={{display:'flex',gap:12}}>
            <button onClick={()=>addToCart(product)} style={{flex:1,height:52,background:'#fff',border:`2px solid ${C.purple}`,borderRadius:14,color:C.purple,fontSize:15,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif',transition:'all 0.2s'}}>{isRTL?'أضف للسلة':'Add to Cart'}</button>
            <button onClick={()=>addToCart(product)} style={{flex:1,height:52,background:grad,border:'none',borderRadius:14,color:'#fff',fontSize:15,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif',boxShadow:'0 6px 20px rgba(212,83,126,0.3)'}}>{isRTL?'اشتر الآن':'Buy Now'}</button>
          </div>
        </div>
      </div>
      {related.length>0 && (
        <div>
          <h2 style={{fontSize:20,fontWeight:800,marginBottom:20}}>{isRTL?'منتجات مشابهة':'Related Products'}</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {related.map(p=><ProductCard key={p.id} product={p} lang={lang} onProduct={()=>{}} compact/>)}
          </div>
        </div>
      )}
    </div>
  );
}

function CartPage({ lang, cart, setCart, onCheckout }) {
  const isRTL = lang !== 'en';
  const sellers = [...new Set(cart.map(i=>i.seller))];
  const subtotal = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const discount = cart.length>0 ? 20 : 0;
  const delivery = subtotal>200 ? 0 : 15;
  const changeQty = (id,delta) => setCart(cart.map(i=>i.id===id?{...i,qty:Math.max(1,i.qty+delta)}:i));
  const remove = (id) => setCart(cart.filter(i=>i.id!==id));
  if(cart.length===0) return (
    <div style={{minHeight:400,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',direction:isRTL?'rtl':'ltr',padding:48}}>
      <div style={{fontSize:64,marginBottom:16}}>🛒</div>
      <div style={{fontSize:20,fontWeight:700,color:C.text,marginBottom:8}}>{isRTL?'سلتك فارغة':'Your cart is empty'}</div>
      <div style={{fontSize:14,color:C.text3}}>{isRTL?'أضف منتجات للمتابعة':'Add products to continue'}</div>
    </div>
  );
  return (
    <div style={{maxWidth:1280,margin:'0 auto',padding:'32px 48px',direction:isRTL?'rtl':'ltr'}}>
      <h1 style={{fontSize:24,fontWeight:900,marginBottom:28}}>{isRTL?`السلة (${cart.length})`:`Cart (${cart.length})`}</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:32,alignItems:'flex-start'}}>
        <div>
          {sellers.map(seller=>(
            <div key={seller} style={{marginBottom:20}}>
              <div style={{fontSize:13,fontWeight:700,color:C.text2,marginBottom:10,display:'flex',alignItems:'center',gap:6}}>
                <span style={{fontSize:16}}>🏪</span>{isRTL?`من: ${seller}`:`From: ${seller}`}
              </div>
              <div style={{background:'#fff',borderRadius:16,border:`1px solid ${C.border}`,overflow:'hidden'}}>
                {cart.filter(i=>i.seller===seller).map((item,idx,arr)=>(
                  <div key={item.id} style={{display:'flex',gap:16,padding:16,borderBottom:idx<arr.length-1?`1px solid #F0F0F0`:'none',alignItems:'center'}}>
                    <img src={item.img} alt={item.name} style={{width:80,height:80,borderRadius:12,objectFit:'cover',flexShrink:0}}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:14,fontWeight:700,color:C.text}}>{isRTL?item.name:item.nameEn}</div>
                      <div style={{fontSize:12,color:C.text3,marginTop:3}}>{item.brand}</div>
                      <div style={{fontSize:16,fontWeight:900,color:C.text,marginTop:6}}>{item.price*item.qty} {isRTL?'ر.س':'SAR'}</div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
                      <button onClick={()=>changeQty(item.id,-1)} style={{width:32,height:32,borderRadius:8,border:`1px solid ${C.border}`,background:'#fff',cursor:'pointer',fontWeight:800,fontSize:16}}>−</button>
                      <span style={{fontSize:14,fontWeight:700,minWidth:24,textAlign:'center'}}>{item.qty}</span>
                      <button onClick={()=>changeQty(item.id,1)} style={{width:32,height:32,borderRadius:8,background:grad,border:'none',color:'#fff',cursor:'pointer',fontWeight:800,fontSize:16}}>+</button>
                      <button onClick={()=>remove(item.id)} style={{marginRight:8,background:'none',border:'none',color:C.text3,cursor:'pointer',fontSize:18}}>✕</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Summary */}
        <div style={{background:'#fff',borderRadius:20,border:`1px solid ${C.border}`,padding:24,position:'sticky',top:80}}>
          <div style={{fontSize:16,fontWeight:800,marginBottom:16}}>{isRTL?'ملخص الطلب':'Order Summary'}</div>
          {delivery===0 && <div style={{background:'#F0FDF4',borderRadius:10,padding:'10px 14px',marginBottom:14,fontSize:12,color:C.success,fontWeight:700}}>✓ {isRTL?'أهلاً بك! طلبك يستحق شحناً مجانياً':'You\'ve qualified for free shipping!'}</div>}
          {[[isRTL?'المجموع الفرعي':'Subtotal',`${subtotal} ${isRTL?'ر.س':'SAR'}`],[isRTL?'الخصم':'Discount',`-${discount} ${isRTL?'ر.س':'SAR'}`,true],[isRTL?'التوصيل':'Delivery',delivery===0?(isRTL?'مجاني':'Free'):`${delivery} ${isRTL?'ر.س':'SAR'}`,false,delivery===0]].map(([l,v,neg,green])=>(
            <div key={l} style={{display:'flex',justifyContent:'space-between',marginBottom:10,fontSize:14}}>
              <span style={{color:C.text2}}>{l}</span>
              <span style={{fontWeight:700,color:neg||green?C.success:C.text}}>{v}</span>
            </div>
          ))}
          <div style={{borderTop:`1px solid ${C.border}`,paddingTop:14,display:'flex',justifyContent:'space-between',marginBottom:20}}>
            <span style={{fontSize:16,fontWeight:800}}>{isRTL?'الإجمالي':'Total'}</span>
            <span style={{fontSize:20,fontWeight:900,color:C.text}}>{subtotal-discount+delivery} {isRTL?'ر.س':'SAR'}</span>
          </div>
          <div style={{marginBottom:14}}>
            <input placeholder={isRTL?'كود الخصم':'Coupon code'} style={{width:'100%',height:40,border:`1.5px solid ${C.border}`,borderRadius:10,padding:'0 14px',fontFamily:'Cairo,sans-serif',fontSize:13,outline:'none',marginBottom:8}}/>
          </div>
          <button onClick={onCheckout} style={{width:'100%',height:52,background:grad,border:'none',borderRadius:14,color:'#fff',fontSize:16,fontWeight:800,cursor:'pointer',fontFamily:'Cairo,sans-serif',boxShadow:'0 8px 24px rgba(212,83,126,0.3)'}}>
            {isRTL?`إتمام الشراء — ${subtotal-discount+delivery} ر.س`:`Checkout — ${subtotal-discount+delivery} SAR`}
          </button>
        </div>
      </div>
    </div>
  );
}

function InfluencerListPage({ lang, onInfluencer, onProduct }) {
  const isRTL = lang !== 'en';
  const [selected, setSelected] = React.useState(null);
  const inf = selected || INFLUENCERS[0];
  const theirProducts = PRODUCTS.filter(p=>p.influencerId===inf.id);
  return (
    <div style={{direction:isRTL?'rtl':'ltr'}}>
      {/* Cover */}
      <div style={{height:280,position:'relative',overflow:'hidden'}}>
        <img src={inf.cover} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(26,26,46,0.7),rgba(0,0,0,0.1))'}}/>
      </div>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 48px'}}>
        {/* Profile header */}
        <div style={{display:'flex',alignItems:'flex-end',gap:24,marginTop:-48,marginBottom:32,position:'relative',zIndex:2}}>
          <img src={inf.img} alt={inf.name} style={{width:96,height:96,borderRadius:999,objectFit:'cover',border:'4px solid #fff',boxShadow:'0 4px 20px rgba(0,0,0,0.15)',flexShrink:0}}/>
          <div style={{flex:1,paddingBottom:8}}>
            <div style={{fontSize:26,fontWeight:900,color:C.text}}>{isRTL?inf.name:inf.nameEn}</div>
            <div style={{fontSize:14,color:C.text2,marginTop:4,maxWidth:480}}>{inf.bio}</div>
            <div style={{display:'flex',gap:28,marginTop:12}}>
              {[[inf.followers,isRTL?'متابع':'Followers'],[inf.products,isRTL?'منتج':'Products'],[inf.sales,isRTL?'مبيعات':'Sales']].map(([v,l])=>(
                <div key={l}><div style={{fontSize:18,fontWeight:900,color:C.purple}}>{v}</div><div style={{fontSize:11,color:C.text3}}>{l}</div></div>
              ))}
            </div>
          </div>
          <button style={{height:44,background:grad,border:'none',borderRadius:12,padding:'0 28px',color:'#fff',fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'Cairo,sans-serif',flexShrink:0,boxShadow:'0 4px 16px rgba(212,83,126,0.3)'}}>
            {isRTL?'+ متابعة':'+ Follow'}
          </button>
        </div>
        {/* Influencer row selector */}
        <div style={{display:'flex',gap:20,overflowX:'auto',paddingBottom:8,marginBottom:32,borderBottom:`1px solid ${C.border}`}}>
          {INFLUENCERS.map(i=>(
            <div key={i.id} onClick={()=>setSelected(i)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,cursor:'pointer',flexShrink:0,opacity:inf.id===i.id?1:0.5,transition:'opacity 0.2s'}}>
              <img src={i.img} alt={i.name} style={{width:52,height:52,borderRadius:999,objectFit:'cover',border:`2.5px solid ${inf.id===i.id?C.purple:'transparent'}`}}/>
              <span style={{fontSize:11,fontWeight:inf.id===i.id?700:500,color:inf.id===i.id?C.purple:C.text2}}>{isRTL?i.name:i.nameEn}</span>
            </div>
          ))}
        </div>
        {/* Their products */}
        <div style={{marginBottom:48}}>
          <div style={{fontSize:18,fontWeight:800,marginBottom:20,color:C.text}}>{isRTL?`منتجات ${inf.name}`:` ${inf.nameEn}'s Products`} ({theirProducts.length})</div>
          {theirProducts.length>0 ? (
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
              {theirProducts.map(p=><ProductCard key={p.id} product={p} lang={lang} onProduct={onProduct}/>)}
            </div>
          ) : (
            <div style={{textAlign:'center',padding:'40px 0',color:C.text3}}>{isRTL?'لا توجد منتجات بعد':'No products yet'}</div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, ListingPage, ProductPage, CartPage, InfluencerListPage });
