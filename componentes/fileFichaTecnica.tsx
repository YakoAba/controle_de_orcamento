export default function FileFichaTecnica() {
    return (
        <div className="form-group mt-3 mb-3 text-white">
        <label htmlFor="fichaTecnicaArquivo">Ficha Técnica (arquivo)</label>
        <input type="file" className="form-control-file bg-secondary border-secondary"
            id="fichaTecnicaArquivo" name="filepdf" />
    </div>
    );
};


