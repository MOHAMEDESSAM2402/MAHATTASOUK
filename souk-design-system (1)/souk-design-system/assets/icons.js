// Souk · Mahatta icon library — 20×20 stroke icons, 1.6 stroke, inherit currentColor
// Usage: <Icon name="cart" size={18}/>
(function(){
  const P = {
    // navigation & ui
    home: 'M3 10.5 10 4l7 6.5V16a1.5 1.5 0 0 1-1.5 1.5H12v-5H8v5H4.5A1.5 1.5 0 0 1 3 16z',
    grid: 'M4 4h5v5H4zM11 4h5v5h-5zM4 11h5v5H4zM11 11h5v5h-5z',
    box:  'M3.5 6.2 10 3l6.5 3.2v7.6L10 17l-6.5-3.2z M3.5 6.2 10 9.4l6.5-3.2 M10 9.4V17',
    receipt: 'M5 3h10v14l-2-1.3L11 17l-1.5-1.3L8 17l-2-1.3L4 17V3z M7 7h6 M7 10h6 M7 13h4',
    wallet: 'M3 6a2 2 0 0 1 2-2h9v3H5a2 2 0 0 1-2-2zM3 6v9a2 2 0 0 0 2 2h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a2 2 0 0 1-2-1zM14 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0',
    gift: 'M3 9h14v2H3zM4 11h12v6H4zM10 6v11 M7 6a2 2 0 1 1 3-1 M13 6a2 2 0 1 0-3-1',
    chart: 'M3 17h14 M6 14V9 M10 14V5 M14 14v-7',
    cog: 'M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M10 2v2 M10 16v2 M4 10H2 M18 10h-2 M5.3 5.3 3.9 3.9 M16.1 16.1l-1.4-1.4 M5.3 14.7 3.9 16.1 M16.1 3.9l-1.4 1.4',
    search: 'M9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3z M14 14l4 4',
    bell: 'M10 3a5 5 0 0 0-5 5v3l-2 2h14l-2-2V8a5 5 0 0 0-5-5zM8 15a2 2 0 0 0 4 0',
    user: 'M10 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z M3.5 17a6.5 6.5 0 0 1 13 0',
    store: 'M3 8 4.5 4h11L17 8 M3 8v8h14V8 M3 8a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 M8 16v-4h4v4',
    cart: 'M3 4h2l2 9h9l2-7H6 M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 M17 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0',
    heart: 'M10 16s-6-3.7-6-8a3.5 3.5 0 0 1 6-2.5A3.5 3.5 0 0 1 16 8c0 4.3-6 8-6 8z',
    plus: 'M10 4v12 M4 10h12',
    minus: 'M4 10h12',
    close: 'M5 5l10 10 M15 5 5 15',
    check: 'M4 10.5 8 14.5 16 6',
    chevronRight: 'M7 4l6 6-6 6',
    chevronLeft: 'M13 4l-6 6 6 6',
    chevronDown: 'M4 7l6 6 6-6',
    chevronUp: 'M4 13l6-6 6 6',
    arrowRight: 'M4 10h12 M12 5l5 5-5 5',
    arrowLeft: 'M16 10H4 M8 5l-5 5 5 5',
    filter: 'M3 5h14 M6 10h8 M8 15h4',
    edit: 'M4 16h3l9-9-3-3-9 9v3z M12 4l3 3',
    trash: 'M4 6h12 M8 6V4h4v2 M6 6l1 10h6l1-10 M8 9v5 M12 9v5',
    eye: 'M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    eyeOff: 'M3 3l14 14 M6 6 a6.5 6.5 0 0 0-4 4s3 6 8 6a7 7 0 0 0 3-0.7 M9 5a8 8 0 0 1 1-0.1c5 0 8 6 8 6a11 11 0 0 1-2 3',
    star: 'M10 3l2.2 4.5 5 0.7-3.6 3.5 0.9 5L10 14.4 5.5 16.7l0.9-5L2.8 8.2l5-0.7z',
    image: 'M3 4h14v12H3z M3 13l4-4 4 4 3-3 3 3 M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
    link: 'M8 12a3 3 0 0 0 4 0l3-3a3 3 0 0 0-4-4l-1 1 M12 8a3 3 0 0 0-4 0l-3 3a3 3 0 0 0 4 4l1-1',
    truck: 'M2 5h10v8H2zM12 8h3l3 3v2h-6 M5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M15 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
    tag: 'M3 3h7l7 7-7 7-7-7zM7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
    sparkles: 'M10 2v4 M10 14v4 M2 10h4 M14 10h4 M5 5l2 2 M13 13l2 2 M5 15l2-2 M13 7l2-2',
    instagram: 'M5 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M14 5.5a0.5 0.5 0 1 0 0 1 0.5 0.5 0 0 0 0-1',
    tiktok: 'M12 3v9a3 3 0 1 1-3-3 M12 3c0 2 2 4 4 4',
    twitter: 'M17 5a6 6 0 0 1-2 0.5 3 3 0 0 0-5 2v1a7 7 0 0 1-6-3s-2 5 4 7a8 8 0 0 1-5 1c8 4 14-2 14-8z',
    youtube: 'M3 6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M8 7.5v5l4.5-2.5z',
    menu: 'M3 5h14 M3 10h14 M3 15h14',
    more: 'M5 10a0.5 0.5 0 1 0 0 1 M10 10a0.5 0.5 0 1 0 0 1 M15 10a0.5 0.5 0 1 0 0 1',
    play: 'M6 4l10 6-10 6z',
    upload: 'M10 3v10 M6 7l4-4 4 4 M3 17h14',
    download: 'M10 3v10 M6 9l4 4 4-4 M3 17h14',
    location: 'M10 2a6 6 0 0 0-6 6c0 5 6 10 6 10s6-5 6-10a6 6 0 0 0-6-6z M10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4',
    clock: 'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M10 6v4l3 2',
    calendar: 'M4 5h12v12H4zM4 8h12 M7 3v4 M13 3v4',
    globe: 'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M2 10h16 M10 2a10 10 0 0 1 0 16 M10 2a10 10 0 0 0 0 16',
    lock: 'M5 9h10v8H5zM7 9V6a3 3 0 1 1 6 0v3',
    shield: 'M10 2 3 5v5c0 4 3 7 7 8 4-1 7-4 7-8V5z M7 10l2 2 4-4',
    message: 'M3 5h14v9H8l-4 4V14H3z',
    phone: 'M5 3h3l1.5 4-2 1.5a10 10 0 0 0 4 4l1.5-2 4 1.5V15a2 2 0 0 1-2 2A14 14 0 0 1 3 5a2 2 0 0 1 2-2',
    refresh: 'M3 10a7 7 0 0 1 12-4.5L17 3v5h-5 M17 10a7 7 0 0 1-12 4.5L3 17v-5h5',
    users: 'M7 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M13 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z M1 17a6 6 0 0 1 12 0 M13 12a5 5 0 0 1 5 5',
    layers: 'M10 3 3 7l7 4 7-4zM3 11l7 4 7-4 M3 15l7 4 7-4',
    wand: 'M4 16l9-9 3 3-9 9zM13 7l-1-2 2-1-1-2 2-1',
    percent: 'M5 5l10 10 M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2 M14 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
    banner: 'M3 5h14v4H3z M3 11h14v4H3z M6 7h0.5 M6 13h0.5',
    megaphone: 'M3 8v4l10 4V4zM13 4l4-1v14l-4-1 M5 12v3h3v-2',
  };
  function Icon({name, size=18, strokeWidth=1.6, style, color}) {
    const d = P[name];
    if(!d) return null;
    return React.createElement('svg',{
      width:size, height:size, viewBox:'0 0 20 20', fill:'none',
      stroke: color || 'currentColor', strokeWidth, strokeLinecap:'round', strokeLinejoin:'round',
      style:{flexShrink:0,...style}
    }, d.split(' M').map((seg,i)=>React.createElement('path',{key:i,d:(i===0?seg:'M'+seg)})));
  }
  window.Icon = Icon;
  window.ICON_NAMES = Object.keys(P);
})();
