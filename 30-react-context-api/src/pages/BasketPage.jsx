import { useContext } from "react"; //hookum
import { BasketContext } from "../context/BasketContext"; //basketi import eledm
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; //iconlarmdi 

function BasketPage() { //funksiyon yaradiram neleri yazmisdim providerde olarida carqdm 
  const { basket, increaseQuantity, decreaseQuantity, removeFromBasket } = useContext(BasketContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🛒 Basket</h1>

      {basket.length === 0 ? ( //basket tam bos olanda mesaj gorsensin
        <p className="text-gray-600 text-lg">Basket boşdur, hələ məhsul əlavə etməmisiniz.</p>
      ) : (
        <ul className="space-y-4">
          {basket.map(item => (
            <li
              key={item.id}//idye key verdm hemseki kimi map methodu ile
              className="border rounded-lg p-4 flex justify-between items-center shadow hover:shadow-lg transition"
            >
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full"
                >
                  <FaMinus />
                </button>
                <span className="font-bold text-xl">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BasketPage;
