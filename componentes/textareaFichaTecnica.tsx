//inputDate.tsx

export default function FichaTecnicaTexto() {
    return (
        <div className="form-group mt-2 mb-2">
            <label htmlFor={"fichaTecnicaTexto"} className="text-white">Ficha Técnica</label>
            <textarea className="form-control bg-secondary border-secondary " id="fichaTecnicaTexto"
                name="fichatecnica">
            </textarea>
        </div>
    );
};