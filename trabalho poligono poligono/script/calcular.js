function gerarSegmentos(pontos) 
{const segmentos = [];

    for (let i = 0; i < pontos.length; i++) 
    {const p1 = pontos[i];
     const p2 = pontos[(i + 1)% pontos.length];

        segmentos.push([p1, p2]);
    }

    return segmentos
}

function intersecao(p1, p2, p3, p4) 
{const denominador = ((p2.x - p1.x)*(p4.y - p3.y)) - ((p2.y - p1.y)*(p4.x - p3.x));

    if (denominador == 0) return null;

    const t =((p3.x - p1.x)*(p4.y - p3.y) - (p3.y - p1.y)*(p4.x - p3.x))/ denominador;

    const u =((p3.x - p1.x)*(p2.y - p1.y) - (p3.y - p1.y)*(p2.x - p1.x))/ denominador;

    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) 
    {
        return {x: p1.x + t *(p2.x - p1.x), y: p1.y + t *(p2.y - p1.y)
        };
    }

    return null;
}

function intersecoesEntreFormas(pontos1, pontos2)
 {const segs1 = gerarSegmentos(pontos1);
 const segs2 = gerarSegmentos(pontos2);

 const intersecoes = [];

    for (let i = 0; i < segs1.length; i++)
    {
        let s1 = segs1[i];
        for (let sla = 0; sla < segs2.length; sla++)
        {
            let s2 = segs2[sla];

            const p = intersecao(s1[0], s1[1], s2[0], s2[1]);

            if(p != null) 
            intersecoes.push(p);
        }
    }

    return intersecoes;
}