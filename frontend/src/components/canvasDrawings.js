// Canvas drawing functions for AI research projects

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y); ctx.arcTo(x+w,y,x+w,y+r,r);
  ctx.lineTo(x+w,y+h-r); ctx.arcTo(x+w,y+h,x+w-r,y+h,r);
  ctx.lineTo(x+r,y+h); ctx.arcTo(x,y+h,x,y+h-r,r);
  ctx.lineTo(x,y+r); ctx.arcTo(x,y,x+r,y,r);
  ctx.closePath();
}

export function drawTsunami(ctx, w, h) {
  // Deep ocean bg
  const bg = ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#0a1f35'); bg.addColorStop(1,'#061428');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Ocean depth layers
  for(let i=0;i<4;i++){
    const y=h*(0.4+i*0.15);
    ctx.fillStyle=`rgba(26,58,92,${0.15+i*0.05})`;
    ctx.fillRect(0,y,w,h-y);
  }

  // Seismic wave rings from epicenter
  ctx.save(); ctx.translate(w*0.3,h*0.65);
  for(let i=1;i<=6;i++){
    const r=i*28;
    ctx.beginPath(); ctx.ellipse(0,0,r,r*0.35,0,0,Math.PI*2);
    ctx.strokeStyle=`rgba(100,180,255,${0.5/i})`;
    ctx.lineWidth=1.5; ctx.stroke();
  }
  // Epicenter
  ctx.beginPath(); ctx.arc(0,0,5,0,Math.PI*2);
  ctx.fillStyle='#ff4f6b'; ctx.fill();
  ctx.restore();

  // Tsunami wave profile
  ctx.beginPath();
  for(let x=0;x<w;x++){
    const wave = 28*Math.exp(-Math.pow((x/w-0.6),2)*8)*Math.sin((x/w)*18-3);
    const base = 10*Math.sin((x/w)*6);
    ctx.lineTo(x, h*0.42 - wave - base);
  }
  ctx.lineTo(w,h); ctx.lineTo(0,h); ctx.closePath();
  const wg=ctx.createLinearGradient(0,h*0.2,0,h);
  wg.addColorStop(0,'rgba(30,120,200,0.9)'); wg.addColorStop(1,'rgba(10,50,100,0.6)');
  ctx.fillStyle=wg; ctx.fill();

  // Wave crest highlight
  ctx.beginPath();
  for(let x=0;x<w;x++){
    const wave=28*Math.exp(-Math.pow((x/w-0.6),2)*8)*Math.sin((x/w)*18-3);
    const base=10*Math.sin((x/w)*6);
    ctx.lineTo(x, h*0.42 - wave - base);
  }
  ctx.strokeStyle='rgba(150,220,255,0.7)'; ctx.lineWidth=2; ctx.stroke();

  // Coastline
  ctx.fillStyle='rgba(200,170,120,0.6)';
  ctx.fillRect(w*0.88,0,w*0.12,h);

  // Data overlay
  ctx.font='8px DM Mono,monospace';
  ctx.fillStyle='rgba(100,180,255,0.6)';
  ctx.fillText('EPICENTER: 7.8M  ·  DEPTH: 32km', 12, h-12);
}

export function drawDepression(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#1a0a2e'); bg.addColorStop(1,'#0d0618');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Brain neural network
  const nodes=[];
  const rand=(min,max)=>Math.random()*(max-min)+min;
  for(let i=0;i<28;i++){
    nodes.push({x:rand(w*0.1,w*0.9),y:rand(h*0.1,h*0.9),r:rand(2,5),active:Math.random()>0.55});
  }
  // Connections
  nodes.forEach((a,i)=>{
    nodes.slice(i+1).forEach(b=>{
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<90){
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        const risk=a.active&&b.active;
        ctx.strokeStyle=risk?'rgba(180,100,255,0.35)':'rgba(120,60,200,0.1)';
        ctx.lineWidth=risk?1:0.5; ctx.stroke();
      }
    });
  });
  // Nodes
  nodes.forEach(n=>{
    ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
    ctx.fillStyle=n.active?'rgba(180,100,255,0.9)':'rgba(100,60,160,0.4)';
    ctx.fill();
    if(n.active){
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r+4,0,Math.PI*2);
      ctx.strokeStyle='rgba(180,100,255,0.2)'; ctx.lineWidth=1; ctx.stroke();
    }
  });

  // Social media text stream
  const texts=['feeling low...','can\'t cope','hopeless','reach out','support','detect'];
  ctx.font='8px DM Mono,monospace';
  texts.forEach((t,i)=>{
    const sentiment=i<3;
    ctx.fillStyle=sentiment?'rgba(255,100,100,0.45)':'rgba(100,255,180,0.45)';
    ctx.fillText(t, w*0.05+i%3*(w*0.3), h*0.82+Math.floor(i/3)*14);
  });

  ctx.font='8px DM Mono,monospace';
  ctx.fillStyle='rgba(180,100,255,0.4)';
  ctx.fillText('NLP  ·  BEHAVIORAL CUES  ·  SOCIAL SIGNALS', 10, h-10);
}

export function drawCyber(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#0a0503'); bg.addColorStop(1,'#100804');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Matrix rain
  ctx.font='9px DM Mono,monospace';
  const chars='01AFFE404DEADBEEF'.split('');
  for(let c=0;c<18;c++){
    const x=c*(w/18);
    const n=Math.floor(Math.random()*8)+3;
    for(let r=0;r<n;r++){
      const alpha=1-r/n;
      ctx.fillStyle=`rgba(194,75,42,${alpha*0.6})`;
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)],x,r*22+10);
    }
  }

  // Network graph
  const hosts=[
    {x:w*0.2,y:h*0.4,threat:false},{x:w*0.5,y:h*0.3,threat:true},
    {x:w*0.75,y:h*0.5,threat:false},{x:w*0.35,y:h*0.65,threat:true},
    {x:w*0.6,y:h*0.7,threat:false},{x:w*0.85,y:h*0.25,threat:true},
  ];
  const links=[[0,1],[1,2],[0,3],[3,4],[1,5],[2,5]];
  links.forEach(([a,b])=>{
    ctx.beginPath(); ctx.moveTo(hosts[a].x,hosts[a].y); ctx.lineTo(hosts[b].x,hosts[b].y);
    const threat=hosts[a].threat||hosts[b].threat;
    ctx.strokeStyle=threat?'rgba(255,79,60,0.5)':'rgba(200,120,60,0.2)';
    ctx.setLineDash(threat?[4,3]:[]); ctx.lineWidth=1; ctx.stroke(); ctx.setLineDash([]);
  });
  hosts.forEach(n=>{
    ctx.beginPath(); ctx.arc(n.x,n.y,n.threat?8:6,0,Math.PI*2);
    ctx.fillStyle=n.threat?'rgba(255,79,60,0.8)':'rgba(200,120,60,0.4)';
    ctx.fill();
    if(n.threat){
      ctx.beginPath(); ctx.arc(n.x,n.y,14,0,Math.PI*2);
      ctx.strokeStyle='rgba(255,79,60,0.3)'; ctx.lineWidth=1; ctx.stroke();
    }
  });

  ctx.font='8px DM Mono,monospace';
  ctx.fillStyle='rgba(194,75,42,0.45)';
  ctx.fillText('ANOMALY DETECT  ·  TRAFFIC ANALYSIS', 10, h-10);
}

export function drawEnv(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#061209'); bg.addColorStop(1,'#091a0c');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Satellite grid
  ctx.strokeStyle='rgba(45,110,78,0.12)';
  ctx.lineWidth=0.5;
  for(let x=0;x<w;x+=18){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=0;y<h;y+=18){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}

  // Terrain heatmap patches
  const patches=[
    {x:w*0.1,y:h*0.15,r:50,col:'rgba(45,110,78,0.5)',label:'FOREST'},
    {x:w*0.45,y:h*0.3,r:35,col:'rgba(194,75,42,0.4)',label:'DEFOREST'},
    {x:w*0.7,y:h*0.55,r:42,col:'rgba(26,120,180,0.5)',label:'WATER'},
    {x:w*0.25,y:h*0.65,r:28,col:'rgba(194,138,26,0.4)',label:'ARID'},
    {x:w*0.75,y:h*0.2,r:22,col:'rgba(45,110,78,0.35)',label:'BIODIV'},
  ];
  patches.forEach(p=>{
    const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
    g.addColorStop(0,p.col); g.addColorStop(1,'transparent');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    ctx.font='7px DM Mono,monospace'; ctx.fillStyle='rgba(255,255,255,0.4)';
    ctx.fillText(p.label,p.x-20,p.y+3);
  });

  // Satellite path
  ctx.beginPath();
  ctx.moveTo(0,h*0.1); ctx.bezierCurveTo(w*0.3,h*0.4,w*0.6,h*0.1,w,h*0.5);
  ctx.strokeStyle='rgba(100,220,150,0.5)'; ctx.setLineDash([6,4]); ctx.lineWidth=1.5; ctx.stroke(); ctx.setLineDash([]);

  // Satellite icon
  ctx.save(); ctx.translate(w*0.42,h*0.22);
  ctx.fillStyle='rgba(200,255,220,0.8)';
  ctx.fillRect(-4,-4,8,8);
  ctx.fillRect(-12,-2,8,4); ctx.fillRect(4,-2,8,4); // solar panels
  ctx.restore();

  ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(45,110,78,0.55)';
  ctx.fillText('SATELLITE  ·  AIR QUALITY  ·  BIODIVERSITY', 10, h-10);
}

export function drawTsunamiPub(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#061420'); bg.addColorStop(1,'#091c2e');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Accuracy gauge
  ctx.save(); ctx.translate(w*0.25,h*0.5);
  const pct=0.9989;
  // Track
  ctx.beginPath(); ctx.arc(0,0,55,Math.PI*0.75,Math.PI*2.25);
  ctx.strokeStyle='rgba(26,58,92,0.4)'; ctx.lineWidth=8; ctx.stroke();
  // Fill
  ctx.beginPath(); ctx.arc(0,0,55,Math.PI*0.75,Math.PI*0.75+pct*Math.PI*1.5);
  ctx.strokeStyle='#4da8ff'; ctx.lineWidth=8; ctx.lineCap='round'; ctx.stroke();
  // Percent label
  ctx.fillStyle='#4da8ff'; ctx.font='bold 14px Playfair Display,serif';
  ctx.textAlign='center'; ctx.fillText('99.89%',0,6);
  ctx.fillStyle='rgba(150,180,220,0.5)'; ctx.font='7px DM Mono,monospace';
  ctx.fillText('ACCURACY',0,20); ctx.textAlign='left';
  ctx.restore();

  // Wave data lines
  for(let i=0;i<4;i++){
    const y=h*(0.25+i*0.17);
    ctx.beginPath();
    for(let x=0;x<w;x+=2){
      const val=Math.sin(x*0.04+i)*12+Math.sin(x*0.015)*8;
      x===0?ctx.moveTo(w*0.48+x,y+val):ctx.lineTo(w*0.48+x,y+val);
    }
    ctx.strokeStyle=`rgba(77,168,255,${0.15+i*0.12})`; ctx.lineWidth=1; ctx.stroke();
  }

  ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(77,168,255,0.4)';
  ctx.fillText('PREDICTION LEAD TIME  ·  COASTAL SAFETY', 12, h-12);
}

export function drawMentalPub(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#120820'); bg.addColorStop(1,'#0e051a');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Multi-class output bars
  const classes=[
    {label:'Stress',val:0.99,col:'rgba(180,100,255,0.8)'},
    {label:'Anxiety',val:0.97,col:'rgba(150,80,230,0.8)'},
    {label:'Panic',val:0.99,col:'rgba(220,80,200,0.8)'},
    {label:'Neutral',val:0.995,col:'rgba(80,180,220,0.7)'},
  ];
  classes.forEach((c,i)=>{
    const y=h*(0.2+i*0.18);
    const bw=(w*0.55)*c.val;
    // Track
    ctx.fillStyle='rgba(255,255,255,0.04)';
    ctx.fillRect(w*0.38,y-6,w*0.55,12);
    // Bar
    const g=ctx.createLinearGradient(w*0.38,0,w*0.38+bw,0);
    g.addColorStop(0,c.col); g.addColorStop(1,c.col.replace('0.8','0.4').replace('0.7','0.35'));
    ctx.fillStyle=g; ctx.fillRect(w*0.38,y-6,bw,12);
    // Label
    ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(200,160,255,0.6)';
    ctx.fillText(c.label, w*0.04, y+4);
    ctx.fillStyle='rgba(200,160,255,0.9)';
    ctx.fillText(Math.round(c.val*100)+'%', w*0.38+bw+6, y+4);
  });

  // Gauge ring
  ctx.save(); ctx.translate(w*0.2,h*0.55);
  ctx.beginPath(); ctx.arc(0,0,40,0,Math.PI*2);
  ctx.strokeStyle='rgba(180,100,255,0.1)'; ctx.lineWidth=6; ctx.stroke();
  ctx.beginPath(); ctx.arc(0,0,40,-Math.PI/2,Math.PI*1.48);
  ctx.strokeStyle='rgba(180,100,255,0.8)'; ctx.lineWidth=6; ctx.lineCap='round'; ctx.stroke();
  ctx.fillStyle='rgba(180,100,255,0.7)'; ctx.font='bold 11px serif';
  ctx.textAlign='center'; ctx.fillText('99%',0,5); ctx.textAlign='left';
  ctx.restore();

  ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(180,100,255,0.35)';
  ctx.fillText('DEEP LEARNING  ·  CLINICAL PRECISION', 12, h-12);
}

export function drawPanicPub(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#10060f'); bg.addColorStop(1,'#18080e');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Heart rate / panic signal
  const ecg=[0,0,1,-1,1,0,0,0,1,22,-14,10,-6,3,1,0,0,0,2,4,3,1,0];
  const reps=3;
  ctx.beginPath();
  let xi=0;
  for(let r=0;r<reps;r++){
    ecg.forEach(v=>{
      const x=(xi/(ecg.length*reps))*w;
      const y=h*0.45-v*5;
      xi===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      xi++;
    });
  }
  ctx.strokeStyle='rgba(220,80,150,0.85)'; ctx.lineWidth=2.2; ctx.stroke();

  // Glow
  ctx.beginPath(); xi=0;
  for(let r=0;r<reps;r++){
    ecg.forEach(v=>{
      const x=(xi/(ecg.length*reps))*w;
      const y=h*0.45-v*5;
      xi===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      xi++;
    });
  }
  ctx.strokeStyle='rgba(220,80,150,0.15)'; ctx.lineWidth=12; ctx.stroke();

  // Prediction window
  const wx=w*0.62;
  ctx.fillStyle='rgba(220,80,150,0.07)';
  ctx.fillRect(wx,0,w-wx,h);
  ctx.strokeStyle='rgba(220,80,150,0.4)'; ctx.lineWidth=1;
  ctx.setLineDash([3,3]);
  ctx.beginPath(); ctx.moveTo(wx,0); ctx.lineTo(wx,h); ctx.stroke();
  ctx.setLineDash([]);
  ctx.font='8px DM Mono,monospace';
  ctx.fillStyle='rgba(220,80,150,0.7)';
  ctx.fillText('PREDICTED', wx+6, 16);

  ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(220,80,150,0.35)';
  ctx.fillText('PATTERN ANALYSIS  ·  CRISIS PREVENTION', 12, h-12);
}

export function drawChem(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#0d0a03'); bg.addColorStop(1,'#120e04');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Molecular structure
  const atoms=[
    {x:w*0.3,y:h*0.4,el:'C',col:'rgba(200,160,40,0.9)'},
    {x:w*0.48,y:h*0.28,el:'N',col:'rgba(80,160,255,0.9)'},
    {x:w*0.48,y:h*0.55,el:'O',col:'rgba(255,80,80,0.9)'},
    {x:w*0.65,y:h*0.4,el:'C',col:'rgba(200,160,40,0.9)'},
    {x:w*0.2,y:h*0.55,el:'H',col:'rgba(200,200,200,0.6)'},
    {x:w*0.2,y:h*0.28,el:'H',col:'rgba(200,200,200,0.6)'},
    {x:w*0.78,y:h*0.28,el:'Cl',col:'rgba(80,220,80,0.9)'},
    {x:w*0.78,y:h*0.55,el:'F',col:'rgba(200,100,255,0.9)'},
  ];
  const bonds=[[0,1],[0,2],[0,3],[0,4],[0,5],[3,6],[3,7],[1,3]];
  bonds.forEach(([a,b])=>{
    ctx.beginPath(); ctx.moveTo(atoms[a].x,atoms[a].y); ctx.lineTo(atoms[b].x,atoms[b].y);
    ctx.strokeStyle='rgba(194,138,26,0.3)'; ctx.lineWidth=2; ctx.stroke();
  });
  atoms.forEach(a=>{
    ctx.beginPath(); ctx.arc(a.x,a.y,11,0,Math.PI*2);
    ctx.fillStyle=a.col.replace('0.9','0.15').replace('0.6','0.08'); ctx.fill();
    ctx.strokeStyle=a.col; ctx.lineWidth=1.5; ctx.stroke();
    ctx.font='bold 8px DM Mono,monospace';
    ctx.fillStyle=a.col; ctx.textAlign='center';
    ctx.fillText(a.el,a.x,a.y+3); ctx.textAlign='left';
  });

  // Toxicity gauge — 100%
  ctx.save(); ctx.translate(w*0.88,h*0.45);
  ctx.beginPath(); ctx.arc(0,0,30,0,Math.PI*2);
  ctx.strokeStyle='rgba(194,138,26,0.1)'; ctx.lineWidth=6; ctx.stroke();
  ctx.beginPath(); ctx.arc(0,0,30,-Math.PI/2,Math.PI*1.5);
  ctx.strokeStyle='rgba(194,138,26,0.9)'; ctx.lineWidth=6; ctx.lineCap='round'; ctx.stroke();
  ctx.fillStyle='rgba(194,138,26,0.9)'; ctx.font='bold 9px serif';
  ctx.textAlign='center'; ctx.fillText('100%',0,4); ctx.textAlign='left';
  ctx.restore();

  ctx.font='8px DM Mono,monospace'; ctx.fillStyle='rgba(194,138,26,0.4)';
  ctx.fillText('TOXICITY PREDICTION  ·  REGULATORY AI', 12, h-12);
}


export function drawSXEchoLite(ctx, w, h) {
  // Dark bg with teal glow
  const bg = ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#020a0e'); bg.addColorStop(1,'#051218');
  ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);

  // Concentric sound rings
  ctx.save();
  ctx.translate(w*0.38, h*0.5);
  for(let i=1;i<=8;i++){
    const r = i*22;
    const alpha = (1-i/10)*0.5;
    ctx.beginPath();
    ctx.arc(0,0,r,Math.PI*0.6,Math.PI*1.4);
    ctx.strokeStyle = `rgba(0,245,196,${alpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,r,-Math.PI*0.4,Math.PI*0.4);
    ctx.strokeStyle = `rgba(0,245,196,${alpha*0.5})`;
    ctx.stroke();
  }
  ctx.restore();

  // Binary data stream
  ctx.font = '9px monospace';
  ctx.fillStyle = 'rgba(0,245,196,0.18)';
  const bits = '10110010011010110001011010010110';
  for(let i=0;i<bits.length;i++){
    ctx.fillText(bits[i], w*0.62+((i%8)*14), h*0.25+(Math.floor(i/8)*18));
  }

  // Ultrasonic wave
  ctx.beginPath();
  ctx.moveTo(w*0.55, h*0.5);
  for(let x=0;x<w*0.4;x+=2){
    const y = Math.sin(x*0.18)*20*Math.exp(-x*0.006)+h*0.5;
    x===0?ctx.moveTo(w*0.55+x,y):ctx.lineTo(w*0.55+x,y);
  }
  ctx.strokeStyle='rgba(0,245,196,0.7)';
  ctx.lineWidth=2; ctx.stroke();

  // Source dot
  ctx.beginPath(); ctx.arc(w*0.38,h*0.5,6,0,Math.PI*2);
  ctx.fillStyle='#00f5c4'; ctx.fill();
  ctx.beginPath(); ctx.arc(w*0.38,h*0.5,12,0,Math.PI*2);
  ctx.strokeStyle='rgba(0,245,196,0.3)'; ctx.lineWidth=1; ctx.stroke();

  // Label
  ctx.font='bold 10px monospace'; ctx.fillStyle='rgba(0,245,196,0.5)';
  ctx.fillText('AIR-GAP SAFE  ·  ∿ SONIC LINK', w*0.06, h*0.9);
}

export function drawEdgeECG(ctx, w, h) {
  const bg = ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#0a0205'); bg.addColorStop(1,'#100308');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Grid
  ctx.strokeStyle='rgba(255,79,107,0.07)';
  ctx.lineWidth=0.5;
  for(let x=0;x<w;x+=20){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=0;y<h;y+=20){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}

  // ECG signal
  const ecg = [0,0,2,-1,3,-2,2,0,0,0,1,18,-12,8,-4,2,1,0,0,0,1,2,4,2,0,0,0,0];
  const repeat = 3;
  ctx.beginPath();
  let xi=0;
  for(let r=0;r<repeat;r++){
    for(let i=0;i<ecg.length;i++){
      const x = (xi/(ecg.length*repeat))*w;
      const y = h*0.5 - ecg[i]*7;
      xi===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      xi++;
    }
  }
  ctx.strokeStyle='#ff4f6b'; ctx.lineWidth=2.2; ctx.stroke();

  // Glow
  ctx.beginPath();
  xi=0;
  for(let r=0;r<repeat;r++){
    for(let i=0;i<ecg.length;i++){
      const x=(xi/(ecg.length*repeat))*w;
      const y=h*0.5-ecg[i]*7;
      xi===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      xi++;
    }
  }
  ctx.strokeStyle='rgba(255,79,107,0.2)'; ctx.lineWidth=8; ctx.stroke();

  // Pulse dot
  const px=w*0.72, py=h*0.5-18*7;
  ctx.beginPath(); ctx.arc(px,h*0.5,5,0,Math.PI*2);
  ctx.fillStyle='#ff4f6b'; ctx.fill();

  // Labels
  ctx.font='9px monospace';
  ctx.fillStyle='rgba(255,79,107,0.5)';
  ctx.fillText('ARRHYTHMIA  ·  EDGE INFERENCE  ·  < 2ms', w*0.05, h*0.88);

  // Classification chip
  const chips=['NSR','AFib','VT','PVC'];
  chips.forEach((c,i)=>{
    const cx=w*0.05+i*62, cy=h*0.1;
    ctx.fillStyle=i===1?'rgba(255,79,107,0.3)':'rgba(255,255,255,0.04)';
    ctx.beginPath(); roundRect(ctx,cx,cy-12,52,18,4); ctx.fill();
    ctx.strokeStyle=i===1?'rgba(255,79,107,0.6)':'rgba(255,255,255,0.08)';
    ctx.lineWidth=0.5; ctx.beginPath(); roundRect(ctx,cx,cy-12,52,18,4); ctx.stroke();
    ctx.fillStyle=i===1?'#ff4f6b':'rgba(255,255,255,0.3)';
    ctx.font='8px monospace'; ctx.fillText(c,cx+10,cy+2);
  });
}

export function drawEEG(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#080510'); bg.addColorStop(1,'#0a0715');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Brain outline (simplified)
  ctx.save(); ctx.translate(w*0.5, h*0.48); ctx.scale(1,1);
  ctx.beginPath();
  ctx.moveTo(-55,20);
  ctx.bezierCurveTo(-80,20,-90,-30,-70,-60);
  ctx.bezierCurveTo(-55,-85,-20,-90,0,-85);
  ctx.bezierCurveTo(20,-90,55,-85,70,-60);
  ctx.bezierCurveTo(90,-30,80,20,55,20);
  ctx.bezierCurveTo(45,40,20,48,0,48);
  ctx.bezierCurveTo(-20,48,-45,40,-55,20);
  ctx.strokeStyle='rgba(167,139,250,0.25)'; ctx.lineWidth=1.5; ctx.stroke();
  // Hemisphere divider
  ctx.beginPath(); ctx.moveTo(0,48); ctx.lineTo(0,-85);
  ctx.strokeStyle='rgba(167,139,250,0.12)'; ctx.lineWidth=1; ctx.stroke();
  ctx.restore();

  // EEG waves (channels)
  const waves=[
    {y:0.22,amp:8,freq:0.18,col:'rgba(167,139,250,0.8)',label:'δ'},
    {y:0.38,amp:6,freq:0.35,col:'rgba(99,179,237,0.8)',label:'θ'},
    {y:0.54,amp:5,freq:0.6,col:'rgba(0,245,196,0.8)',label:'α'},
    {y:0.7,amp:4,freq:1.1,col:'rgba(245,196,0,0.8)',label:'β'},
    {y:0.84,amp:3,freq:2.2,col:'rgba(255,79,107,0.8)',label:'γ'},
  ];
  waves.forEach(wv=>{
    ctx.beginPath();
    for(let x=0;x<w;x++){
      const noise=(Math.sin(x*0.07+wv.freq*10)*0.3+Math.cos(x*0.13)*0.3)*wv.amp*0.4;
      const y=h*wv.y+Math.sin(x*wv.freq)*wv.amp+noise;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.strokeStyle=wv.col; ctx.lineWidth=1.2; ctx.stroke();
    ctx.font='10px monospace'; ctx.fillStyle=wv.col;
    ctx.fillText(wv.label, 8, h*wv.y+4);
  });

  // Anomaly highlight
  const ax=w*0.6;
  ctx.fillStyle='rgba(255,79,107,0.08)';
  ctx.fillRect(ax-15,0,30,h);
  ctx.strokeStyle='rgba(255,79,107,0.4)'; ctx.lineWidth=1;
  ctx.setLineDash([3,3]);
  ctx.beginPath(); ctx.moveTo(ax,0); ctx.lineTo(ax,h); ctx.stroke();
  ctx.setLineDash([]);
  ctx.font='8px monospace'; ctx.fillStyle='rgba(255,79,107,0.7)';
  ctx.fillText('ANOMALY', ax+4, 14);
}

export function drawVetraSync(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#080904'); bg.addColorStop(1,'#0d0e06');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Frequency adaptation visualization
  const freqs=[0.05,0.12,0.22,0.35,0.5,0.7,0.9];
  freqs.forEach((f,i)=>{
    const x=(i/freqs.length)*w;
    const barH=h*(0.3+Math.sin(i*1.2)*0.2);
    const col=`hsl(${55+i*8},90%,${50+i*3}%)`;
    const grad=ctx.createLinearGradient(x,h,x,h-barH);
    grad.addColorStop(0,col.replace(')',',0.9)').replace('hsl','hsla'));
    grad.addColorStop(1,col.replace(')',',0)').replace('hsl','hsla'));
    ctx.fillStyle=grad;
    ctx.fillRect(x,h-barH,w/freqs.length-2,barH);
  });

  // Adaptive frequency path
  ctx.beginPath();
  for(let x=0;x<w;x+=2){
    const band=Math.floor((x/w)*freqs.length);
    const f=freqs[Math.min(band,freqs.length-1)];
    const y=h*0.35+Math.sin(x*f*3)*h*0.2+Math.sin(x*0.02)*h*0.08;
    x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.strokeStyle='rgba(245,196,0,0.9)'; ctx.lineWidth=2.5; ctx.stroke();

  // Glow
  ctx.beginPath();
  for(let x=0;x<w;x+=2){
    const band=Math.floor((x/w)*freqs.length);
    const f=freqs[Math.min(band,freqs.length-1)];
    const y=h*0.35+Math.sin(x*f*3)*h*0.2+Math.sin(x*0.02)*h*0.08;
    x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.strokeStyle='rgba(245,196,0,0.15)'; ctx.lineWidth=12; ctx.stroke();

  // Labels
  ctx.font='8px monospace'; ctx.fillStyle='rgba(245,196,0,0.4)';
  ctx.fillText('ADAPTIVE FREQ HOPPING  ·  DYNAMIC EC', w*0.05, h*0.9);
}

export function drawLLMSec(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#0a0305'); bg.addColorStop(1,'#0d0408');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Neural network layers
  const layers=[3,5,7,5,3];
  const lx=layers.map((n,i)=>w*0.12+i*(w*0.76/4));
  layers.forEach((n,li)=>{
    const nodes=Array.from({length:n},(_,ni)=>({
      x:lx[li], y:h*(0.15+ni*(0.7/(n-1||1)))
    }));
    // Connections to next layer
    if(li<layers.length-1){
      const next=Array.from({length:layers[li+1]},(_,ni)=>({
        x:lx[li+1], y:h*(0.15+ni*(0.7/(layers[li+1]-1||1)))
      }));
      nodes.forEach(n1=>{
        next.forEach(n2=>{
          const threat=Math.random()>0.75;
          ctx.beginPath(); ctx.moveTo(n1.x,n1.y); ctx.lineTo(n2.x,n2.y);
          ctx.strokeStyle=threat?'rgba(255,79,107,0.25)':'rgba(255,79,107,0.06)';
          ctx.lineWidth=0.8; ctx.stroke();
        });
      });
    }
    nodes.forEach(n=>{
      ctx.beginPath(); ctx.arc(n.x,n.y,5,0,Math.PI*2);
      ctx.fillStyle=li===2?'rgba(255,79,107,0.9)':'rgba(255,79,107,0.4)';
      ctx.fill();
    });
  });

  // Flagged token stream
  const tokens=['DETECT','FLAG','SCAN','RISK','✓','✗','⚠'];
  tokens.forEach((t,i)=>{
    const x=w*0.06+i*(w*0.13);
    const flagged=t==='✗'||t==='⚠';
    ctx.font='bold 9px monospace';
    ctx.fillStyle=flagged?'rgba(255,79,107,0.9)':'rgba(255,255,255,0.2)';
    if(flagged){
      ctx.fillStyle='rgba(255,79,107,0.15)';
      ctx.fillRect(x-4,h*0.87-12,28,16);
    }
    ctx.fillStyle=flagged?'#ff4f6b':'rgba(255,255,255,0.25)';
    ctx.fillText(t,x,h*0.88);
  });

  ctx.font='8px monospace'; ctx.fillStyle='rgba(255,79,107,0.35)';
  ctx.fillText('MULTILINGUAL  ·  EXTREMISM DETECTION  ·  LLM', w*0.05, h*0.96);
}

export function drawSpectra(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#020a09'); bg.addColorStop(1,'#030e0c');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Spectrogram heatmap
  const cols=80, rows=40;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const px=c*(w/cols), py=r*(h/rows);
      const f=c/cols, t=r/rows;
      // Create harmonic-like energy distribution
      const e=Math.exp(-Math.pow((f-0.3),2)*20)+
               Math.exp(-Math.pow((f-0.55),2)*30)*0.8+
               Math.exp(-Math.pow((f-0.75),2)*50)*0.5+
               (Math.sin(c*0.3+r*0.5)*0.1);
      const noise=Math.random()*0.15;
      const val=Math.min(1,Math.max(0,e*0.7+noise));
      const hue=200+val*120;
      ctx.fillStyle=`hsla(${hue},80%,${20+val*55}%,${0.6+val*0.4})`;
      ctx.fillRect(px,py,w/cols+1,h/rows+1);
    }
  }

  // Frequency cursor
  ctx.beginPath(); ctx.moveTo(w*0.55,0); ctx.lineTo(w*0.55,h);
  ctx.strokeStyle='rgba(0,245,196,0.8)'; ctx.lineWidth=1.5; ctx.stroke();

  // Frequency label
  ctx.font='bold 9px monospace'; ctx.fillStyle='rgba(0,245,196,0.9)';
  ctx.fillText('18.4 kHz', w*0.57, 16);

  // Axis
  ctx.font='8px monospace'; ctx.fillStyle='rgba(255,255,255,0.25)';
  ctx.fillText('FFT  ·  REAL-TIME  ·  0–20kHz', w*0.05, h*0.96);
}

export function drawBeacon(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#040909'); bg.addColorStop(1,'#050d0a');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Sender and receiver
  const sx=w*0.15, rx=w*0.82, mid=h*0.5;

  // Sender circle
  ctx.beginPath(); ctx.arc(sx,mid,18,0,Math.PI*2);
  ctx.fillStyle='rgba(245,196,0,0.1)'; ctx.fill();
  ctx.strokeStyle='rgba(245,196,0,0.6)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.font='8px monospace'; ctx.fillStyle='rgba(245,196,0,0.7)';
  ctx.fillText('TX',sx-7,mid+4);

  // Receiver circle
  ctx.beginPath(); ctx.arc(rx,mid,18,0,Math.PI*2);
  ctx.fillStyle='rgba(0,245,196,0.1)'; ctx.fill();
  ctx.strokeStyle='rgba(0,245,196,0.6)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.font='8px monospace'; ctx.fillStyle='rgba(0,245,196,0.7)';
  ctx.fillText('RX',rx-7,mid+4);

  // Packets
  const packets=5;
  for(let i=0;i<packets;i++){
    const px=sx+25+(i*(rx-sx-50)/packets);
    const py=mid-(i===2?20:8)+i*4;
    const ack=i<3;

    ctx.fillStyle=ack?'rgba(0,245,196,0.15)':'rgba(245,196,0,0.12)';
    ctx.strokeStyle=ack?'rgba(0,245,196,0.5)':'rgba(245,196,0,0.5)';
    ctx.lineWidth=0.8;
    ctx.beginPath(); roundRect(ctx,px-16,py-10,32,20,3); ctx.fill(); ctx.stroke();

    ctx.font='7px monospace';
    ctx.fillStyle=ack?'rgba(0,245,196,0.8)':'rgba(245,196,0,0.8)';
    ctx.fillText(ack?'ACK':'PKT',px-9,py+3);

    // Arrow connecting
    if(i<packets-1){
      const np=sx+25+((i+1)*(rx-sx-50)/packets);
      ctx.beginPath(); ctx.moveTo(px+18,py); ctx.lineTo(np-16,py+2);
      ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=0.8; ctx.stroke();
    }
  }

  // CRC label
  ctx.font='9px monospace'; ctx.fillStyle='rgba(245,196,0,0.4)';
  ctx.fillText('CRC32  ·  CHUNKED  ·  RESUME  ·  C++/PY', w*0.05, h*0.9);
}

export function drawSXEchoV3(ctx, w, h) {
  const bg=ctx.createLinearGradient(0,0,w,h);
  bg.addColorStop(0,'#050408'); bg.addColorStop(1,'#07050f');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // Multi-FSK constellation
  ctx.save(); ctx.translate(w*0.22,h*0.5);
  const pts=16;
  for(let i=0;i<pts;i++){
    const a=(i/pts)*Math.PI*2;
    const r=55, x=Math.cos(a)*r, y=Math.sin(a)*r;
    const active=i%3===0||i%5===0;
    ctx.beginPath(); ctx.arc(x,y,active?5:3,0,Math.PI*2);
    ctx.fillStyle=active?'#6b4fff':'rgba(107,79,255,0.25)';
    ctx.fill();
    if(active){
      ctx.beginPath(); ctx.arc(x,y,9,0,Math.PI*2);
      ctx.strokeStyle='rgba(107,79,255,0.3)'; ctx.lineWidth=1; ctx.stroke();
    }
  }
  // Constellation ring
  ctx.beginPath(); ctx.arc(0,0,55,0,Math.PI*2);
  ctx.strokeStyle='rgba(107,79,255,0.1)'; ctx.lineWidth=1; ctx.stroke();
  ctx.restore();

  // Frequency hopping visualization
  const hops=12;
  for(let i=0;i<hops;i++){
    const x=w*0.43+i*(w*0.5/hops);
    const freq=Math.random();
    const y=h*(0.2+freq*0.6);
    const prev=i>0?{x:w*0.43+(i-1)*(w*0.5/hops),y:h*(0.2+Math.random()*0.6)}:null;

    ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fillStyle='rgba(107,79,255,0.9)'; ctx.fill();

    if(i>0){
      ctx.beginPath(); ctx.moveTo(x-w*0.5/hops,h*0.5); ctx.lineTo(x,y);
      ctx.strokeStyle='rgba(107,79,255,0.3)'; ctx.lineWidth=0.8;
      ctx.setLineDash([3,4]); ctx.stroke(); ctx.setLineDash([]);
    }
  }

  // LDPC grid hint
  const gs=6;
  for(let r=0;r<gs;r++){
    for(let c=0;c<gs;c++){
      const val=Math.random()>0.5;
      ctx.fillStyle=val?'rgba(107,79,255,0.35)':'rgba(107,79,255,0.06)';
      ctx.fillRect(w*0.44+r*10,h*0.78+c*8,8,6);
    }
  }

  ctx.font='8px monospace'; ctx.fillStyle='rgba(107,79,255,0.5)';
  ctx.fillText('M-FSK  ·  LDPC  ·  REED-SOLOMON  ·  STEALTH', w*0.44, h*0.96);
}
