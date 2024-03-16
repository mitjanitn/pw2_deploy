import tarjetasContext from './tarjetas.js';

const handlerBarsContext = {
    "/index.html": tarjetasContext
};

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;