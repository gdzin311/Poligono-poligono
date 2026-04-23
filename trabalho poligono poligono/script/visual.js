
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
        obj= {x: Number(p.substring(0, p.indexOf(","))), y: Number(p.substring(p.indexOf(",")+1), ((p.length)))};
        console.log(obj);
    }

    pontos.shift();
    return(pontos);
}

function desenharPontos(pontos, cor = "green") 
{ctx.fillStyle = cor;
ctx.font = "14px Arial";

    for (let p of pontos) 
       {// bolinha no negocio(dá pra tirar mas acho q ajuda a entender melhor visualmente)
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();

        // texto
        ctx.fillText(
            `(${p.x.toFixed(1)}, ${p.y.toFixed(1)})`,
            p.x + 8,
            p.y - 8
        );
    }
}