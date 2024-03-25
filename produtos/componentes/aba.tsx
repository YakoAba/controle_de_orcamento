import ProdutoInput from "./inputNome";
import ComboBoxProdutos from "./comboboxMarcas";
import { useProdutoContext } from "../context";
import { useState } from "react";
import ProdutoButton from "./button";
import GridProdutos from "./grid";

export default function AbaProduto() {

    const { addProduto, produtos, marcas } = useProdutoContext();
    const [id_marca, setId_Marca] = useState('');
    const [nome_produto, setNome_Produto] = useState('');
    const [nome_marca, setNome_Marca] = useState(''); 

    const handleAddProduto = async () => {
        if (nome_produto.trim() === '') {
            alert('O nome da produto não pode estar vazio');
            return;
        }

        try {
            const id = await addProduto({ nome_produto, id_marca, nome_marca, id: '', data_cadastro: '' });
            setNome_Produto(''); // Limpa o campo de entrada após adicionar a produto
            setNome_Marca('');
            setId_Marca(0)
            alert('Produto adicionada com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            alert('Erro ao adicionar produto. Verifique o console para mais detalhes.');
        }
    };

    const handleChangeNomeProduto = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome_Produto(event.target.value);
    };

    const handleChangeMarca = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setId_Marca(event.target.value);
      };
      

    return (
        <div className="mt-3 mb-3 text-white">
            <legend style={{ fontSize: 'large', color: 'white' }}>Cadastro de Produtos</legend>
            <ComboBoxProdutos value={id_marca} onChange={handleChangeMarca} marcas={marcas} />
            <ProdutoInput value={nome_produto} onChange={handleChangeNomeProduto} />
            <ProdutoButton onClick={handleAddProduto} />
            <GridProdutos produtos={produtos} marcas={marcas} />
        </div>
    );
}