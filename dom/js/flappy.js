function newElement(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}

function Barreira(reversa = false) {
    this.elemento = newElement("div", "barreira");

    const borda = newElement("div", "borda");
    const corpo = newElement("div", "corpo");
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

// const b = new Barreira(true);
// b.setAltura(200);
// document.querySelector("[wm-flappy]").appendChild(b.elemento);

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = newElement("div", "par-de-barreiras");

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    };

    this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
    this.setX = (x) => (this.elemento.style.left = `${x}px`);
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

const b = new ParDeBarreiras(700, 200, 800);
document.querySelector("[wm-flappy]").appendChild(b.elemento);
