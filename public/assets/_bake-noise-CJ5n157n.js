var e=512,t=`
  precision mediump float;
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,n=`
  precision highp float;
  varying vec2 vUv;

  float hash(vec2 p) {
    highp float d = dot(p, vec2(12.9898, 78.233));
    return fract(sin(d) * 43758.5453);
  }

  // Tileable value noise: hash at integer corners, modulo-wrap the corner
  // coordinates to \`period\` so noise(0, y) == noise(period.x, y) exactly.
  // This is what makes the baked texture seamless under REPEAT wrapping in
  // the downstream shaders — otherwise the time-animated flow.y drift would
  // cross the u=0/u=1 wrap boundary and produce a visible horizontal seam
  // right through the middle of the reveal mask.
  float tileableNoise(vec2 p, vec2 period) {
    vec2 ip = floor(p);
    vec2 fp = fract(p);
    vec2 c00 = mod(ip,                        period);
    vec2 c10 = mod(ip + vec2(1.0, 0.0),        period);
    vec2 c01 = mod(ip + vec2(0.0, 1.0),        period);
    vec2 c11 = mod(ip + vec2(1.0, 1.0),        period);
    float a = hash(c00);
    float b = hash(c10);
    float c = hash(c01);
    float d = hash(c11);
    vec2 u = fp * fp * fp * (fp * (fp * 6.0 - 15.0) + 10.0);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  // Tileable fbm. Lacunarity fixed at 2.0 (integer) and period doubles each
  // octave, so every octave remains tileable at the same base period. The
  // per-octave offset (+17.3, 9.1) from the old fbm is dropped — it broke
  // tileability, and the modulo-wrap hash provides decorrelation naturally.
  float tileableFbm(vec2 p, vec2 basePeriod) {
    float v = 0.0;
    float a = 0.55;
    vec2 period = basePeriod;
    for (int i = 0; i < 4; i++) {
      v += a * tileableNoise(p, period);
      p = p * 2.0;
      period = period * 2.0;
      a *= 0.55;
    }
    return v;
  }

  void main() {
    // vUv * 8.0 covers 8 units of fbm space across 512 texels. Shaders
    // divide their domain-warp input by 8.0 to map back. Period is 8.0
    // in fbm space, which matches the texture's UV period of 1.0.
    vec2 p = vUv * 8.0;
    vec2 PERIOD = vec2(8.0);
    // The three channels use different per-tile offsets to decorrelate.
    // The offsets are added inside the tileable space, so modulo-wrap
    // keeps each channel seamlessly tileable.
    float r = tileableFbm(p,                        PERIOD);
    float g = tileableFbm(p + vec2(5.2, 1.3),        PERIOD);
    float b = tileableFbm(p + vec2(8.3, 2.8),        PERIOD);
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;function r(r,i){let{Program:a,Mesh:o,Triangle:s,RenderTarget:c}=i,l=r.gl,u=new c(l,{width:e,height:e,wrapS:l.REPEAT,wrapT:l.REPEAT,minFilter:l.LINEAR,magFilter:l.LINEAR}),d=new o(l,{geometry:new s(l),program:new a(l,{vertex:t,fragment:n})});r.render({scene:d,target:u}),l.finish();let f=u.texture;return f.wrapS=l.REPEAT,f.wrapT=l.REPEAT,f}export{r as bakeNoiseTexture};