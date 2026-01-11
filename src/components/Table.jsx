import React from "react";


const data = [
  { id: 1, name: "Пельмені свинина + кур", kg: 0.5, price: 103 },
  { id: 2, name: "Пельмені свинина + кур", kg: 1, price: 204 },
  { id: 3, name: "Пельмені курячі", kg: 0.5, price: 103 },
  { id: 4, name: "Пельмені свинина", kg: 1, price: 204 },
  { id: 5, name: "Пельмені свинина", kg: 0.5, price: 103 },
  { id: 6, name: "Пельмені з індичкою", kg: 0.7, price: 194 },
  { id: 7, name: "Хінкалі", kg: 0.5, price: 104 },
  { id: 8, name: "Чебуреки з м’ясом", kg: 0.5, price: 99 },
  { id: 9, name: "Чебуреки з м’ясом + сир", kg: 0.5, price: 107 },
  { id: 10, name: "Вареники з картоплею", kg: 1, price: 156 },
  { id: 11, name: "Вареники з картоплею", kg: 0.7, price: 105 },
  { id: 12, name: "Вареники з картоплею", kg: 0.5, price: 79 },
  { id: 13, name: "Вареники з капустою", kg: 1, price: 158 },
  { id: 14, name: "Вареники з капустою", kg: 0.7, price: 105 },
  { id: 15, name: "Вареники з капустою", kg: 0.5, price: 79 },
  { id: 16, name: "Вареники з солодким сиром", kg: 1, price: 158 },
  { id: 17, name: "Вареники з солодким сиром", kg: 0.7, price: 108 },
  { id: 18, name: "Вареники з лівером", kg: 1, price: 161 },
  { id: 19, name: "Вареники з лівером", kg: 0.7, price: 111 },
  { id: 20, name: "Вареники з лівером", kg: 0.5, price: 79 },
  { id: 21, name: "Млинці з м’ясом", kg: 0.45, price: 98 },
  { id: 22, name: "Млинці з печінкою", kg: 0.45, price: 89 },
  { id: 23, name: "Млинці з солодким сиром", kg: 0.45, price: 89 },
  { id: 24, name: "Млинці з грибами + капустою", kg: 0.45, price: 89 },
  { id: 25, name: "Млинці з куркою + грибами", kg: 0.45, price: 98 },
  { id: 26, name: "Млинці з лівером", kg: 0.45, price: 89 },
  { id: 27, name: "Бендерики", kg: 0.45, price: 99 },
  { id: 28, name: "Сирники", kg: 0.5, price: 93 },
  { id: 29, name: "Зрази з м’ясом", kg: 1, price: 204 },
  { id: 30, name: "Зрази з капустою", kg: 1, price: 168 },
  { id: 31, name: "Зрази з грибами", kg: 1, price: 180 },
  { id: 32, name: "Голубці", kg: 1, price: 218 },
  { id: 33, name: "Ліниві голубці", kg: 0.75, price: 156 },
  { id: 34, name: "Пальчики", kg: 1, price: 165 },
  { id: 29, name: "Котлети свинина + кур", kg: 0.75, price: 174 },
  { id: 30, name: "Котлети по-київськи", kg: 0.6, price: 180 },
  { id: 31, name: "Котлети для бургера", kg: 0.4, price: 99 },
  { id: 32, name: "Котлети гриби + сир", kg: 0.5, price: 150 },
  { id: 33, name: "Котлети рибнi", kg: 0.6, price: 144 },
  { id: 34, name: "Котлети курячi", kg: 0.6, price: 159 },
  { id: 35, name: "Котлети з ананасом і сиром", kg: 0.3, price: 80 },
  { id: 36, name: "Люля-кебаб", kg: 0.5, price: 144 },
  { id: 37, name: "Тефтелі", kg: 0.5, price: 118 },
  { id: 38, name: "Перець фарширований", kg: 1, price: 225 },
  { id: 39, name: "Фрикадельки", kg: 0.5, price: 145 },
  { id: 40, name: "Нагетси", kg: 0.5, price: 145 },
  { id: 41, name: "Сирні палички", kg: 0.5, price: 139 },
  { id: 42, name: "Масло вершкове", kg: 1, price: 470 },
  { id: 43, name: "Картопля фрі", kg: 0.5, price: 100 },
  { id: 44, name: "Ковбаса( домашня )", kg: 1, price: 440 }
];

const Table = () => {
  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border text-[100px] border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Найменування</th>
            <th className="border border-gray-300 p-2">КГ</th>
            <th className="border border-gray-300 p-2">Ціна (UAH)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className={`border border-gray-300 text-center ${
                item.highlight ? "bg-yellow-300 font-bold" : "bg-white"
              }`}
            >
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.kg}</td>
              <td className="border border-gray-300 p-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
