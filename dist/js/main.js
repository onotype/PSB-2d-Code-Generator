console.log("PSB 2D Code Gnerator Start");let listInput=document.querySelector(".bulk-generator input");function lister(){let e=listInput.value.split(/,\s*/),t=document.querySelector(".generator-table");t.innerHTML="",e.forEach((e=>{if(""!=e){let a=document.createElement("div"),r=e.toUpperCase();a.classList.add("generator-item");let n,d=identifyBrand(r);if(a.classList.add("brand--"+d.toLowerCase().replace(" ","-")),n="Brenthaven"==d?"https://brenthaven.com/"+r:"Gumdrop Cases"==d?"https://www.gumdropcases.com/"+r:"Invalid URL. Please check the value.",a.innerHTML=`\n        <div class="generator-item__value">${r}</div>\n        <div class="generator-item__brand"><span>${d}</span></div>\n        <div class="generator-item__url">${n}</div>\n        <div class="generator-item__datamatrix generator-item__code"><a href="#download_datamatrix" data-type="datamatrix" data-sku="${r}"></a></div>\n        <div class="generator-item__qrcode generator-item__code"><a href="#download_qr" data-type="qrcode" data-sku="${r}"></a></div>\n      `,n.includes("Invalid URL"))a.querySelector(".generator-item__datamatrix").innerHTML+='<div class="empty-code"></div>',a.querySelector(".generator-item__qrcode").innerHTML+='<div class="empty-code"></div>';else{let e=DATAMatrix({msg:n,dim:2e3,pad:1}),t=QRCode({msg:n,dim:2e3,pad:1});a.querySelector(".generator-item__datamatrix a").replaceChildren(),a.querySelector(".generator-item__datamatrix a").appendChild(e),a.querySelector(".generator-item__qrcode a").replaceChildren(),a.querySelector(".generator-item__qrcode a").appendChild(t)}t.appendChild(a)}})),buttonDownload()}function identifyBrand(e){let t;return t=/^\d{4}(?:$|\d{3}$)/.test(e)?"Brenthaven":/\b\d{2}[A-Za-z]\d{3}(?:$|[EeCc]\d{2}[-]\d(?:$|\d$))/.test(e)?"Gumdrop Cases":"Invalid SKU",t}function buttonDownload(){document.querySelectorAll(".generator-item__code a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();let t=e.target,a=t.dataset.sku,r=t.dataset.type,n=(new XMLSerializer).serializeToString(t.querySelector("svg")),d=document.createElement("canvas");d.getContext("2d");canvg(d,n);let i=d.toDataURL("image/png"),o=document.createElement("a");o.href=i,o.download=a+"-"+r+".png",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}))}))}window.onload=function(){lister()},listInput.addEventListener("input",(function(){lister()}));