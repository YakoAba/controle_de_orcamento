import { ChangeEvent, useEffect, useState } from "react";
import { useOrcamentoContext } from "../context";
import { getProdutos } from "@/produtos/services";
import { Produto } from "@/produtos/interface";
import { getMarcas } from "@/marcas/services";
import { Marca } from "@/marcas/interface";

export default function ComboboxProdutos() {
    const { item, setItem } = useOrcamentoContext();

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [marcas, setMarcas] = useState<Marca[]>([]);
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    const handleProdutoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedProdutoId = event.target.value;
        const selectedProduto = produtos.find(produto => produto._id.toString() === selectedProdutoId);
        const selectedMarca = marcas.find(marca => marca._id === selectedProduto?.id_marca);

        if (selectedProduto) {
            const updatedItem = {
                ...item,
                produto_id: selectedProduto._id,
                nome: selectedProduto.nome_produto,
                marca:  selectedMarca ? selectedMarca.nome_marca : '',
                marca_id: selectedProduto.id_marca,
            };
            setItem(updatedItem);
        }
    };

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtosData = await getProdutos();
                const marcasData = await getMarcas();
                setProdutos(produtosData);
                setMarcas(marcasData);
                setLoading(false); // Define loading como false após o carregamento dos dados
            } catch (error) {
                console.error('Erro ao obter produtos ou marcas da API:', error);
                // Trate o erro de acordo com a sua lógica de tratamento de erros
                setLoading(false); // Certifique-se de definir loading como false em caso de erro também
            }
        };
        fetchProdutos();
    }, []);

    return (
        <>
            <label className="text-white" htmlFor={'ComboBoxProdutos'}>Produto:</label>
            {loading ? ( // Se loading for verdadeiro, exibe o texto de carregamento
                <select
                    id='ComboBoxProdutos'
                    className="form-select bg-secondary text-white border-secondary"
                    name='ComboBoxClientes'
                    disabled // Desativa o combo enquanto estiver carregando
                >
                    <option value="">Carregando...</option>
                </select>
            ) : ( // Se loading for falso, exibe as opções do combo normalmente
                <select
                    id='ComboBoxProdutos'
                    className="form-select bg-secondary text-white border-secondary"
                    name='ComboBoxClientes'
                    value={item.produto_id}
                    onChange={handleProdutoChange}
                >
                    <option value="">Selecione</option>
                    {produtos.map((produto) => (
                        <option key={produto._id} value={produto._id}>{produto.nome_produto}</option>
                    ))}
                </select>
            )}
        </>
    );
}
