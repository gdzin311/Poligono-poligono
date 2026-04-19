
    function forma(a, c){
        ctx.strokeStyle = c;
        ctx.beginPath();
        ctx.moveTo(a[0].x, a[0].y);
        for(let i = 1; i < a.length; i++){
            ctx.lineTo(a[i].x, a[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function interacao(n)
{
    let p= "";
    let obj;
    let pontos= []

    while(!p.includes("-1"))
    {
        pontos.push(obj);
        p= prompt("seu ponto pro poligono " + n + " com x,y\nEncerrar: -1");
        obj= {x: p.substring(0, p.indexOf(",")), y: p.substring(p.indexOf(",")+1, ((p.length)))}
    }

    pontos.shift();
    return(pontos);
}