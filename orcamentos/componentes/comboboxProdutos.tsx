import { ChangeEvent, useEffect, useState } from "react";
import { useOrcamentoContext } from "../context";
import { getProdutos } from "@/produtos/services";
import { Produto } from "@/produtos/interface";
import { getMarcas } from "@/marcas/services";
import { Marca } from "@/marcas/interface";


export default function ComboboxProdutos() {
    const { item, setItem } = useOrcamentoContext();

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [marcas, setMarcas] = useState<Marca[]>([])

    const handleClienteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedProdutoId = event.target.value;
        const selectedProduto = produtos.find(produto => produto._id.toString() === selectedProdutoId);
        const selectedMarca = marcas.find(marca => marca._id === selectedProduto?.id_marca);

        if (selectedProduto) {
            const updatedItem = {
                ...item,
                produto_id: selectedProduto._id,
                nome: selectedProduto.nome_produto,
                marca:  selectedMarca?selectedMarca.nome_marca:'',
                marca_id: selectedProduto.id_marca,
            };
            setItem(updatedItem)
        } else {
        }
    };

    useEffect(() => {
        const fetchprodutos = async () => {
            try {
                const data = await getProdutos();
                const marcas = await getMarcas();
                setProdutos(data); // Supondo que a resposta da API seja um objeto com a propriedade "clientes"
                setMarcas(marcas)
            } catch (error) {
                console.error('Erro ao obter produtos da API:', error);
                // Trate o erro de acordo com a sua lógica de tratamento de erros
            }
        };
        fetchprodutos();
    }, []);

    return <>
        <label className="text-white" htmlFor={'ComboBoxProdutos'}>Produto:</label>
        <select
            id='ComboBoxProdutos'
            className="form-select bg-secondary text-white border-secondary"
            name='ComboBoxClientes'
            value={item.produto_id}
            onChange={handleClienteChange}
        >
            <option value="">Selecione</option>
            {produtos.map((item) => (
                <option key={item._id} value={item._id}>{item.nome_produto}</option>
            ))}
        </select>
    </>
}