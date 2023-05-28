import { useState, useRef } from 'react';

const Index = () => {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState('');
  
  const foodNameRef = useRef();
  const costRef = useRef();
  const sellPriceRef = useRef();

  const calculatePercentage = () => {
    const foodName = foodNameRef.current.value.trim();
    const cost = parseFloat(costRef.current.value);
    const sellPrice = parseFloat(sellPriceRef.current.value);
    const imageURL = "https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2020/03/sushi-94.jpg?quality=90&strip=all&ssl=1";

    if (foodName === '') {
      alert('Please enter the name of the food.');
      return;
    }

    if (isNaN(cost) || isNaN(sellPrice)) {
      alert('Please enter valid numbers for the cost and selling price.');
      return;
    }

    const percentage = (cost / sellPrice * 100).toFixed(2);

    const item = {
      foodName,
      imageURL,
      cost: cost.toFixed(2),
      sellPrice: sellPrice.toFixed(2),
      percentage,
    };
    
    setItems(prevItems => [...prevItems, item]);
    setResult(`Última Porcentagem: ${percentage}%`);
    
    foodNameRef.current.value = '';
    costRef.current.value = '';
    sellPriceRef.current.value = '';
  };

  const deleteItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + items.map(item => Object.values(item).join(',')).join('\n');

    const encodedURI = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedURI);
    link.setAttribute('download', 'itens.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div>
      <div className="card">
        <img src="https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2020/03/sushi-94.jpg?quality=90&strip=all&ssl=1"
          alt="Ícone" />
        <div className="form">
          <input type="text" ref={foodNameRef} placeholder="Nome do Alimento" />
          <input type="number" ref={costRef} placeholder="Custo" />
          <input type="number" ref={sellPriceRef} placeholder="Preço de Venda" />
          <button type="button" onClick={calculatePercentage}>Adicionar</button>
        </div>
        <div className="item-list">
          <h3>Itens Adicionados:</h3>
          <table className="item-table">
            <thead>
              <tr>
                <th>Nome do Alimento</th>
                <th>Imagem</th>
                <th>Custo</th>
                <th>Preço de Venda</th>
                <th>Porcentagem</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.foodName}</td>
                  <td><img src={item.imageURL} alt="Imagem do Alimento" style={{width: '50px', height: 'auto'}} /></td>
                  <td>R$ {item.cost}</td>
                  <td>R$ {item.sellPrice}</td>
                  <td>{item.percentage}%</td>
                  <td><button className="delete-btn" onClick={() => deleteItem(index)}>Excluir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="result">{result}</div>
        <button className="export-btn" onClick={exportToCSV}>Exportar</button>
      </div>
      <style jsx>{`
        /* CSS Styles Here */
        body {
      background-color: #212121;
      color: #ffffff;
      font-family: Arial, sans-serif;
    }

    /* Personalize os estilos do card e do formulário */
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      padding: 20px;
      background-color: #333333;
      border-radius: 10px;
    }

    .card img {
      width: 200px;
      height: auto;
      border-radius: 50%;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }

    .form input {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;
    }

    .form button {
      padding: 10px;
      border-radius: 5px;
      background-color: #555555;
      color: #ffffff;
      cursor: pointer;
    }

    .item-list {
      margin-top: 20px;
    }

    .item-table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 10px;
    }

    .item-table th {
      background-color: #555555;
      color: #ffffff;
      padding: 10px;
      font-size: 18px;
      text-align: left;
      border-bottom: 1px solid #ffffff;
    }

    .item-table td {
      padding: 10px;
      font-size: 16px;
      border-bottom: 1px solid #dddddd;
    }

    .result {
      margin-top: 20px;
      font-weight: bold;
      font-size: 20px;
    }

    .delete-btn {
      background-color: #ff0000;
      border: none;
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .export-btn {
      margin-top: 20px;
      padding: 10px;
      border-radius: 5px;
      background-color: #555555;
      color: #ffffff;
      cursor: pointer;
    }
      `}</style>
    </div>
  );
};

export default Index;
