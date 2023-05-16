var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
var o=0;
var p=0;
var q=0;
var r=0;
var s=0;
var t=0;
var u=0;
var v=0;
var w=0;
var x=0;
var y=0;
var z=0;
var amaker=0;
var bmaker=0;
var cmaker=0;
var dmaker=0;
var emaker=0;
var fmaker=0;
var gmaker=0;
var hmaker=0;
var imaker=0;
var jmaker=0;
var kmaker=0;
var lmaker=0;
var mmaker=0;
var nmaker=0;
var omaker=0;
var pmaker=0;
var qmaker=0;
var rmaker=0;
var smaker=0;
var tmaker=0;
var umaker=0;
var vmaker=0;
var wmaker=0;
var xmaker=0;
var ymaker=0;
var zmaker=0;
var acost=5;
var bcost=5;
var ccost=5;
var dcost=5;
var ecost=5;
var fcost=5;
var gcost=5;
var hcost=5;
var icost=5;
var jcost=5;
var kcost=5;
var lcost=5;
var mcost=5;
var ncost=5;
var ocost=5;
var pcost=5;
var qcost=5;
var rcost=5;
var scost=5;
var tcost=5;
var ucost=5;
var vcost=5;
var wcost=5;
var xcost=5;
var ycost=5;
var zcost=5;
var amakercost=5;
var bmakercost=5;
var cmakercost=5;
var dmakercost=5;
var emakercost=5;
var fmakercost=5;
var gmakercost=5;
var hmakercost=5;
var imakercost=5;
var jmakercost=5;
var kmakercost=5;
var lmakercost=5;
var mmakercost=5;
var nmakercost=5;
var omakercost=5;
var pmakercost=5;
var qmakercost=5;
var rmakercost=5;
var smakercost=5;
var tmakercost=5;
var umakercost=5;
var vmakercost=5;
var wmakercost=5;
var xmakercost=5;
var ymakercost=5;
var zmakercost=5;
var ink = 1;
var inkwells = 1;

function buyALetter(){if(ink >= acost){a++;ink=ink-acost;};updatestuff();}
function buyBLetter(){if(a >= bcost){b = b + 1;a = a - bcost;};updatestuff();}
function buyCLetter(){if(b >= ccost){c = c + 1;b = b - ccost;};updatestuff();}
function buyDLetter(){if(c >= dcost){d = d + 1;c = c - dcost;};updatestuff();}
function buyELetter(){if(d >= ecost){e = e + 1;d = d - ecost;};updatestuff();}
function buyFLetter(){if(e >= fcost){f = f + 1;e = e - fcost;};updatestuff();}
function buyGLetter(){if(f >= gcost){g = g + 1;f = f - gcost;};updatestuff();}
function buyHLetter(){if(g >= hcost){h = h + 1;g = g - hcost;};updatestuff();}
function buyILetter(){if(h >= icost){i = i + 1;h = h - icost;};updatestuff();}
function buyJLetter(){if(i >= jcost){j = j + 1;i = i - jcost;};updatestuff();}
function buyKLetter(){if(j >= kcost){k = k + 1;j = j - kcost;};updatestuff();}
function buyLLetter(){if(k >= lcost){l = l + 1;k = k - lcost;};updatestuff();}
function buyMLetter(){if(l >= mcost){m = m + 1;l = l - mcost;};updatestuff();}
function buyNLetter(){if(m >= ncost){n = n + 1;m = m - ncost;};updatestuff();}
function buyOLetter(){if(n >= ocost){o = o + 1;n = n - ocost;};updatestuff();}
function buyPLetter(){if(o >= pcost){p = p + 1;o = o - pcost;};updatestuff();}
function buyQLetter(){if(p >= qcost){q = q + 1;p = p - qcost;};updatestuff();}
function buyRLetter(){if(q >= rcost){r = r + 1;q = q - rcost;};updatestuff();}
function buySLetter(){if(r >= scost){s = s + 1;r = r - scost;};updatestuff();}
function buyTLetter(){if(s >= tcost){t = t + 1;s = s - tcost;};updatestuff();}
function buyULetter(){if(t >= ucost){u = u + 1;t = t - ucost;};updatestuff();}
function buyVLetter(){if(u >= vcost){v = v + 1;u = u - vcost;};updatestuff();}
function buyWLetter(){if(v >= wcost){w = w + 1;v = v - wcost;};updatestuff();}
function buyXLetter(){if(w >= xcost){x = x + 1;w = w - xcost;};updatestuff();}
function buyYLetter(){if(x >= ycost){y = y + 1;x = x - ycost;};updatestuff();}
function buyZLetter(){if(y >= zcost){z = z + 1;y = y - zcost;window.alert("You won! You can stop now.");};updatestuff();}


function BuyAMaker(){if(b >= amakercost){amaker++;b=b-amakercost;};updatestuff();}
function BuyBMaker(){if(c >= bmakercost){bmaker = bmaker + 1;c = c - bmakercost;};updatestuff();}
function BuyCMaker(){if(d >= cmakercost){cmaker = cmaker + 1;d = d - cmakercost;};updatestuff();}
function BuyDMaker(){if(e >= dmakercost){dmaker = dmaker + 1;e = e - dmakercost;};updatestuff();}
function BuyEMaker(){if(f >= emakercost){emaker = emaker + 1;f = f - emakercost;};updatestuff();}
function BuyFMaker(){if(g >= fmakercost){fmaker = fmaker + 1;g = g - fmakercost;};updatestuff();}
function BuyGMaker(){if(h >= gmakercost){gmaker = gmaker + 1;h = h - gmakercost;};updatestuff();}
function BuyHMaker(){if(i >= hmakercost){hmaker = hmaker + 1;i = i - hmakercost;};updatestuff();}
function BuyIMaker(){if(j >= imakercost){imaker = imaker + 1;j = j - imakercost;};updatestuff();}
function BuyJMaker(){if(k >= jmakercost){jmaker = jmaker + 1;k = k - jmakercost;};updatestuff();}
function BuyKMaker(){if(l >= kmakercost){kmaker = kmaker + 1;l = l - kmakercost;};updatestuff();}
function BuyLMaker(){if(m >= lmakercost){lmaker = lmaker + 1;m = m - lmakercost;};updatestuff();}
function BuyMMaker(){if(n >= mmakercost){mmaker = mmaker + 1;n = n - mmakercost;};updatestuff();}
function BuyNMaker(){if(o >= nmakercost){nmaker = nmaker + 1;o = o - nmakercost;};updatestuff();}
function BuyOMaker(){if(p >= omakercost){omaker = omaker + 1;p = p - omakercost;};updatestuff();}
function BuyPMaker(){if(q >= pmakercost){pmaker = pmaker + 1;q = q - pmakercost;};updatestuff();}
function BuyQMaker(){if(r >= qmakercost){qmaker = qmaker + 1;r = r - qmakercost;};updatestuff();}
function BuyRMaker(){if(s >= rmakercost){rmaker = rmaker + 1;s = s - rmakercost;};updatestuff();}
function BuySMaker(){if(t >= smakercost){smaker = smaker + 1;t = t - smakercost;};updatestuff();}
function BuyTMaker(){if(u >= tmakercost){tmaker = tmaker + 1;u = u - tmakercost;};updatestuff();}
function BuyUMaker(){if(v >= umakercost){umaker = umaker + 1;v = v - umakercost;};updatestuff();}
function BuyVMaker(){if(w >= vmakercost){vmaker = vmaker + 1;w = w - vmakercost;};updatestuff();}
function BuyWMaker(){if(x >= wmakercost){wmaker = wmaker + 1;x = x - wmakercost;};updatestuff();}
function BuyXMaker(){if(y >= xmakercost){xmaker = xmaker + 1;y = y - xmakercost;};updatestuff();}
function BuyYMaker(){if(z >= ymakercost){ymaker = ymaker + 1;z = z - ymakercost;};updatestuff();}
function BuyZMaker(){if(z >= 5){window.alert("Seriously. Please stop. There is NO MORE CONTENT and there are NO SECRETS TO FIND.");};updatestuff();}


function vomitforthink(number){
    ink = ink + number;
    document.getElementById('ink').innerHTML = ink;
}

function vomitforthletters(){
    a = a + amaker;
    b = b + bmaker;
    c = c + cmaker;
    d = d + dmaker;
    e = e + emaker;
    f = f + fmaker;
    g = g + gmaker;
    h = h + hmaker;
    i = i + imaker;
    j = j + jmaker;
    k = k + kmaker;
    l = l + lmaker;
    m = m + mmaker;
    n = n + nmaker;
    o = o + omaker;
    p = p + pmaker;
    q = q + qmaker;
    r = r + rmaker;
    s = s + smaker;
    t = t + tmaker;
    u = u + umaker;
    v = v + vmaker;
    w = w + wmaker;
    x = x + xmaker;
    y = y + ymaker;
    z = z + zmaker;
}

function updatestuff(){
    document.getElementById('ink').innerHTML = ink;
    document.getElementById('ACount').innerHTML = a;
    document.getElementById('BCount').innerHTML = b;
    document.getElementById('CCount').innerHTML = c;
    document.getElementById('DCount').innerHTML = d;
    document.getElementById('ECount').innerHTML = e;
    document.getElementById('FCount').innerHTML = f;
    document.getElementById('GCount').innerHTML = g;
    document.getElementById('HCount').innerHTML = h;
    document.getElementById('ICount').innerHTML = i;
    document.getElementById('JCount').innerHTML = j;
    document.getElementById('KCount').innerHTML = k;
    document.getElementById('LCount').innerHTML = l;
    document.getElementById('MCount').innerHTML = m;
    document.getElementById('NCount').innerHTML = n;
    document.getElementById('OCount').innerHTML = o;
    document.getElementById('PCount').innerHTML = p;
    document.getElementById('QCount').innerHTML = q;
    document.getElementById('RCount').innerHTML = r;
    document.getElementById('SCount').innerHTML = s;
    document.getElementById('TCount').innerHTML = t;
    document.getElementById('UCount').innerHTML = u;
    document.getElementById('VCount').innerHTML = v;
    document.getElementById('WCount').innerHTML = w;
    document.getElementById('XCount').innerHTML = x;
    document.getElementById('YCount').innerHTML = y;
    document.getElementById('ZCount').innerHTML = z;
    document.getElementById('AMakerCount').innerHTML = amaker;
    document.getElementById('BMakerCount').innerHTML = bmaker;
    document.getElementById('CMakerCount').innerHTML = cmaker;
    document.getElementById('DMakerCount').innerHTML = dmaker;
    document.getElementById('EMakerCount').innerHTML = emaker;
    document.getElementById('FMakerCount').innerHTML = fmaker;
    document.getElementById('GMakerCount').innerHTML = gmaker;
    document.getElementById('HMakerCount').innerHTML = hmaker;
    document.getElementById('IMakerCount').innerHTML = imaker;
    document.getElementById('JMakerCount').innerHTML = jmaker;
    document.getElementById('KMakerCount').innerHTML = kmaker;
    document.getElementById('LMakerCount').innerHTML = lmaker;
    document.getElementById('MMakerCount').innerHTML = mmaker;
    document.getElementById('NMakerCount').innerHTML = nmaker;
    document.getElementById('OMakerCount').innerHTML = omaker;
    document.getElementById('PMakerCount').innerHTML = pmaker;
    document.getElementById('QMakerCount').innerHTML = qmaker;
    document.getElementById('RMakerCount').innerHTML = rmaker;
    document.getElementById('SMakerCount').innerHTML = smaker;
    document.getElementById('TMakerCount').innerHTML = tmaker;
    document.getElementById('UMakerCount').innerHTML = umaker;
    document.getElementById('VMakerCount').innerHTML = vmaker;
    document.getElementById('WMakerCount').innerHTML = wmaker;
    document.getElementById('XMakerCount').innerHTML = xmaker;
    document.getElementById('YMakerCount').innerHTML = ymaker;
    document.getElementById('ZMakerCount').innerHTML = zmaker;
    document.getElementById('ACost').innerHTML = acost;
    document.getElementById('BCost').innerHTML = bcost;
    document.getElementById('CCost').innerHTML = ccost;
    document.getElementById('DCost').innerHTML = dcost;
    document.getElementById('ECost').innerHTML = ecost;
    document.getElementById('FCost').innerHTML = fcost;
    document.getElementById('GCost').innerHTML = gcost;
    document.getElementById('HCost').innerHTML = hcost;
    document.getElementById('ICost').innerHTML = icost;
    document.getElementById('JCost').innerHTML = jcost;
    document.getElementById('KCost').innerHTML = kcost;
    document.getElementById('LCost').innerHTML = lcost;
    document.getElementById('MCost').innerHTML = mcost;
    document.getElementById('NCost').innerHTML = ncost;
    document.getElementById('OCost').innerHTML = ocost;
    document.getElementById('PCost').innerHTML = pcost;
    document.getElementById('QCost').innerHTML = qcost;
    document.getElementById('RCost').innerHTML = rcost;
    document.getElementById('SCost').innerHTML = scost;
    document.getElementById('TCost').innerHTML = tcost;
    document.getElementById('UCost').innerHTML = ucost;
    document.getElementById('VCost').innerHTML = vcost;
    document.getElementById('WCost').innerHTML = wcost;
    document.getElementById('XCost').innerHTML = xcost;
    document.getElementById('YCost').innerHTML = ycost;
    document.getElementById('ZCost').innerHTML = zcost;
    document.getElementById('AMakerCost').innerHTML = amakercost;
    document.getElementById('BMakerCost').innerHTML = bmakercost;
    document.getElementById('CMakerCost').innerHTML = cmakercost;
    document.getElementById('DMakerCost').innerHTML = dmakercost;
    document.getElementById('EMakerCost').innerHTML = emakercost;
    document.getElementById('FMakerCost').innerHTML = fmakercost;
    document.getElementById('GMakerCost').innerHTML = gmakercost;
    document.getElementById('HMakerCost').innerHTML = hmakercost;
    document.getElementById('IMakerCost').innerHTML = imakercost;
    document.getElementById('JMakerCost').innerHTML = jmakercost;
    document.getElementById('KMakerCost').innerHTML = kmakercost;
    document.getElementById('LMakerCost').innerHTML = lmakercost;
    document.getElementById('MMakerCost').innerHTML = mmakercost;
    document.getElementById('NMakerCost').innerHTML = nmakercost;
    document.getElementById('OMakerCost').innerHTML = omakercost;
    document.getElementById('PMakerCost').innerHTML = pmakercost;
    document.getElementById('QMakerCost').innerHTML = qmakercost;
    document.getElementById('RMakerCost').innerHTML = rmakercost;
    document.getElementById('SMakerCost').innerHTML = smakercost;
    document.getElementById('TMakerCost').innerHTML = tmakercost;
    document.getElementById('UMakerCost').innerHTML = umakercost;
    document.getElementById('VMakerCost').innerHTML = vmakercost;
    document.getElementById('WMakerCost').innerHTML = wmakercost;
    document.getElementById('XMakerCost').innerHTML = xmakercost;
    document.getElementById('YMakerCost').innerHTML = ymakercost;
    document.getElementById('ZMakerCost').innerHTML = zmakercost;
    acost = 1;
    bcost = Math.floor(5 * Math.pow(1.1,b));
    ccost = Math.floor(5 * Math.pow(1.1,c));
    dcost = Math.floor(5 * Math.pow(1.1,d));
    ecost = Math.floor(5 * Math.pow(1.1,e));
    fcost = Math.floor(5 * Math.pow(1.1,f));
    gcost = Math.floor(5 * Math.pow(1.1,g));
    hcost = Math.floor(5 * Math.pow(1.1,h));
    icost = Math.floor(5 * Math.pow(1.1,i));
    jcost = Math.floor(5 * Math.pow(1.1,j));
    kcost = Math.floor(5 * Math.pow(1.1,k));
    lcost = Math.floor(5 * Math.pow(1.1,l));
    mcost = Math.floor(5 * Math.pow(1.1,m));
    ncost = Math.floor(5 * Math.pow(1.1,n));
    ocost = Math.floor(5 * Math.pow(1.1,o));
    pcost = Math.floor(5 * Math.pow(1.1,p));
    qcost = Math.floor(5 * Math.pow(1.1,q));
    rcost = Math.floor(5 * Math.pow(1.1,r));
    scost = Math.floor(5 * Math.pow(1.1,s));
    tcost = Math.floor(5 * Math.pow(1.1,t));
    ucost = Math.floor(5 * Math.pow(1.1,u));
    vcost = Math.floor(5 * Math.pow(1.1,v));
    wcost = Math.floor(5 * Math.pow(1.1,w));
    xcost = Math.floor(5 * Math.pow(1.1,x));
    ycost = Math.floor(5 * Math.pow(1.1,y));
    zcost = Math.floor(5 * Math.pow(1.1,z));
    amakercost = Math.floor(5 * Math.pow(1.1,amaker));
    bmakercost = Math.floor(5 * Math.pow(1.1,bmaker));
    cmakercost = Math.floor(5 * Math.pow(1.1,cmaker));
    dmakercost = Math.floor(5 * Math.pow(1.1,dmaker));
    emakercost = Math.floor(5 * Math.pow(1.1,emaker));
    fmakercost = Math.floor(5 * Math.pow(1.1,fmaker));
    gmakercost = Math.floor(5 * Math.pow(1.1,gmaker));
    hmakercost = Math.floor(5 * Math.pow(1.1,hmaker));
    imakercost = Math.floor(5 * Math.pow(1.1,imaker));
    jmakercost = Math.floor(5 * Math.pow(1.1,jmaker));
    kmakercost = Math.floor(5 * Math.pow(1.1,kmaker));
    lmakercost = Math.floor(5 * Math.pow(1.1,lmaker));
    mmakercost = Math.floor(5 * Math.pow(1.1,mmaker));
    nmakercost = Math.floor(5 * Math.pow(1.1,nmaker));
    omakercost = Math.floor(5 * Math.pow(1.1,omaker));
    pmakercost = Math.floor(5 * Math.pow(1.1,pmaker));
    qmakercost = Math.floor(5 * Math.pow(1.1,qmaker));
    rmakercost = Math.floor(5 * Math.pow(1.1,rmaker));
    smakercost = Math.floor(5 * Math.pow(1.1,smaker));
    tmakercost = Math.floor(5 * Math.pow(1.1,tmaker));
    umakercost = Math.floor(5 * Math.pow(1.1,umaker));
    vmakercost = Math.floor(5 * Math.pow(1.1,vmaker));
    wmakercost = Math.floor(5 * Math.pow(1.1,wmaker));
    xmakercost = Math.floor(5 * Math.pow(1.1,xmaker));
    ymakercost = Math.floor(5 * Math.pow(1.1,ymaker));
    zmakercost = Math.floor(5 * Math.pow(1.1,zmaker));

}

window.setInterval(function(){
vomitforthink(inkwells);
vomitforthletters();
updatestuff();
}, 1000);