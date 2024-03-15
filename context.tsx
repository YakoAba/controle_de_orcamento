import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Produto {
  id: string;
  nome: string;
  marca: string;
  quantidade: number;
  valorUnitario: number;
  total: number;
}

export interface JsonData {
  dataOrcamento: string;
  validadeOrcamento: string;
  nomeCliente: string;
  cpfcliente: string;
  tipoCliente: string;
  formaEnvio: string;
  ufEnvio:string;
  cepEnvio:string;
  valorFrete:string;
  formaPagamento:string;
  prazoFabricacao:string;
  prazoentrega : string;
  observacao:string;
  produtos :Produto[];
  produto: string;
  marca: string;
  // Adicione outras propriedades conforme necessário
}

interface GlobalContextType {
  jsonData: JsonData;
  setData: React.Dispatch<React.SetStateAction<JsonData>>;
  getJson: () => JsonData;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export  const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [jsonData, setData] = useState<JsonData>({
    dataOrcamento: '',
    validadeOrcamento: '',
    nomeCliente: '',
    cpfcliente: '',
    tipoCliente: '',
    formaEnvio: '',
    ufEnvio: '',
    cepEnvio:'',
    valorFrete:'',
    formaPagamento:'',
    prazoFabricacao: '',
    prazoentrega: '',
    observacao: '',
    produtos: [],
    produto: '', 
    marca: '',
  });

  const [] = useState({});

  useEffect(() => {
    // Atualiza o JSON sempre que jsonData mudar
   // console.log('JSON atualizado:', jsonData);
  }, [jsonData]);

  const getJson = () => {
    return jsonData;
  };

  return (
    <GlobalContext.Provider value={{ jsonData, setData, getJson }}>
      {children}
    </GlobalContext.Provider>
  );
};

export  const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
