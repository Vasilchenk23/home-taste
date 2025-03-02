import React from "react";

const data = [
    { id: 1, name: "Пельмені свинина + кур", kg: 0.5, price: 103.5 },
    { id: 2, name: "Пельмені свинина + кур", kg: 1, price: 205 },
    { id: 3, name: "Пельмені курячі", kg: 0.5, price: 102.5 },
    { id: 4, name: "Пельмені свинина", kg: 1, price: 205 },
    { id: 5, name: "Хінкалі", kg: 0.5, price: 106 },
    { id: 6, name: "Чебуреки з м’ясом", kg: 0.5, price: 95 },
    { id: 7, name: "Чебуреки з м’ясом + сир", kg: 0.5, price: 102 },
    { id: 8, name: "Вареники з картоплею", kg: 1, price: 169 },
    { id: 9, name: "Вареники з капустою", kg: 1, price: 171 },
    { id: 10, name: "Вареники з солодким сиром", kg: 1, price: 171 },
    { id: 11, name: "Вареники з лівером", kg: 1, price: 171 },
    { id: 12, name: "Млинці з м’ясом", kg: 0.45, price: 103 },
    { id: 13, name: "Млинці з печінкою", kg: 0.45, price: 93 },
    { id: 14, name: "Млинці з солодким сиром", kg: 0.45, price: 84.5 },
    { id: 15, name: "Млинці з грибами + капустою", kg: 0.45, price: 87 },
    { id: 16, name: "Млинці з лівером", kg: 0.45, price: 85 },
    { id: 17, name: "Венгерики", kg: 0.45, price: 99},
    { id: 18, name: "Сирники", kg: 0.5, price: 101 },
    { id: 19, name: "Зрази з м’ясом", kg: 1, price: 204 },
    { id: 20, name: "Зрази з капустою", kg: 1, price: 182 },
    { id: 21, name: "Зрази з грибами", kg: 1, price: 189 },
    { id: 22, name: "Голубці", kg: 1, price: 234 },
    { id: 23, name: "Ліниві голубці", kg: 0.75, price: 156 },
    { id: 24, name: "Пальчики", kg: 1, price: 169 },
    { id: 25, name: "Котлета свинина + кур", kg: 0.75, price: 184 },
    { id: 26, name: "Котлета по-київськи", kg: 0.6, price: 195 },
    { id: 27, name: "Котлета для бургера", kg: 0.4, price: 104 },
    { id: 28, name: "Котлета гриби + сир", kg: 0.5, price: 163 },
    { id: 29, name: "Котлета рибна", kg: 0.6, price: 150 },
    { id: 30, name: "Котлета куряча", kg: 0.6, price: 162 },
    { id: 31, name: "Люля-кебаб", kg: 0.5, price: 164 },
    { id: 32, name: "Тефтелі", kg: 0.5, price: 110 },
    { id: 33, name: "Фрикадельки", kg: 0.5, price: 149 },
    { id: 34, name: "Нагетси", kg: 0.5, price: 130 },
    { id: 35, name: "Сирні палички", kg: 0.5, price: 135 },
    { id: 36, name: "Масло вершкове", kg: 1, price: 390 },
    { id: 37, name: "Ковбаса( домашні )", kg: 1, price: 360 },
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
