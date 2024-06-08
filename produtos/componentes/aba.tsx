import ProdutoInput from "./inputNome";
import ComboBoxProdutos from "./comboboxMarcas";
import { useProdutoContext } from "../context";
import { useState, useEffect } from "react"; // Adicionei useEffect para carregar as marcas antes de renderizar
import ProdutoButton from "./button";
import GridProdutos from "./grid";

export default function AbaProduto() {

    const { addProduto, produtos, marcas, carregarMarcas } = useProdutoContext();
    const [id_marca, setId_Marca] = useState('');
    const [nome_produto, setNome_Produto] = useState('');
    const [nome_marca, setNome_Marca] = useState(''); 
    const [marcasCarregadas, setMarcasCarregadas] = useState(false); // Estado para controlar se as marcas foram carregadas

    useEffect(() => {
        const carregar = async () => {
            await carregarMarcas();
            setMarcasCarregadas(true);
        };
        carregar();
    }, [carregarMarcas]); // UseEffect para carregar as marcas antes de renderizar

    const handleAddProduto = async () => {
        if (nome_produto.trim() === '') {
            alert('O nome do produto não pode estar vazio');
            return;
        }

        try {
            const id = await addProduto({ nome_produto, id_marca, nome_marca, _id: '', data_cadastro: '' });
            setNome_Produto(''); // Limpa o campo de entrada após adicionar o produto
            setNome_Marca('');
            setId_Marca('')
            alert('Produto adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            alert('Erro ao adicionar produto. Verifique o console para mais detalhes.');
        }
    };

    const handleChangeNomeProduto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome_Produto(event.target.value);
    };

    const handleChangeMarca = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setId_Marca(event.target.value);
        await carregarMarcas(); // Recarregar as marcas quando o combo for clicado
    };

    return marcasCarregadas && (
        <div className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Produtos</legend>
            <ComboBoxProdutos value={id_marca} onChange={handleChangeMarca} marcas={marcas} />
            <ProdutoInput value={nome_produto} onChange={handleChangeNomeProduto} />
            <ProdutoButton onClick={handleAddProduto} />
            <GridProdutos produtos={produtos} marcas={marcas} />
        </div>
    );
}
