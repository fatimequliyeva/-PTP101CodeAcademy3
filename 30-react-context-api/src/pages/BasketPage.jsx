import { useContext } from "react"; //hookum
import { BasketContext } from "../context/BasketContext"; //basketi import eledm
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; //iconlarmdi 

function BasketPage() { //funksiyon yaradiram neleri yazmisdim providerde olarida carqdm 
  const { basket, increaseQuantity, decreaseQuantity, removeFromBasket } = useContext(BasketContext);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        🛒 Basket
      </h1>

      {basket.length === 0 ? ( //basket tam bos olanda mesaj gorsensin
        <p className="text-gray-500 text-lg italic">Basket boşdur, hələ məhsul əlavə etməmisiniz.</p>
      ) : (
        <ul className="space-y-6">
          {basket.map(item => (
            <li
              key={item.id}//idye key verdm hemseki kimi map methodu ile
              className="border rounded-xl p-6 flex justify-between items-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div>
                <p className="font-semibold text-xl text-gray-800">{item.name}</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaMinus />
                </button>
                <span className="font-bold text-2xl text-indigo-700">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
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
