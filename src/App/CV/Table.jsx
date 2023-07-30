// import React from 'react';
// import './table.css';

// export const Table = () => {
//   // Dane do wypełnienia tabelki
//   const data = [
//     {
//       category: 'EXPERIENCE',
//       additionalInfo: [
//         'An intensive three-month programming course, led by experienced trainers, encompassed numerous hours of live coding and hands-on work on diverse practical projects.This course provided participants with a solid and comprehensive foundation necessary for launching a career in the IT industry as a Frontend Developer. The main technologies covered were HTML5, CSS3, JavaScript, React, Redux, and TypeScript. Students also utilized tools such as Git, GitHub, Redmine, JIRA, and Confluence.',
//         'complete / review client reporting ensuring accuracy and timeliness, answer queries from different departments, reconcile collateral balances, investigate and solve discrepancies, review and document process flows/procedures and contribute new ideas to further streamline the operational process, involve in departmental ad-hoc projects, involve in the training and development of other team members (8 people), being a point of contact for any routine/escalation queries raised by internal departments, support for team leader (prepare and plan workload)',
//       ],
//       items: [
//         {
//            'Pomeranian START.IT',
//            '3-months course',
//           '04/-07/2023',
//         },
//         {
//           firmname: 'State Street',
//           details: 'Product Administrator',
//           date: '05/2023 - present',
//         },
//         {
//           firmname: 'Boohoo Group PLC (UK)',
//           details: 'Team Manager',
//           date: '04/2022 - 12/2022',
//         },
//         {
//           firmname: 'Boohoo Group PLC (UK)',
//           details: 'Warehouse Operative',
//           date: '10/2020 - 04/2022',
//         },
//         {
//           firmname: 'Zespoł Szkolno-Przedszkolny w Strzeszynie',
//           details: ' English & Homeroom Teacher',
//           date: '02/2019 - 08/2020 ',
//         },
//         {
//           firmname: 'Szkoła Podstawowa im. Stanisława Konarskiego w Gorlicach',
//           details: 'Learning Support Assistant',
//           date: '10/2018 - 01/2019',
//         },
//         {
//           firmname: 'Szkoła Podstawowa im. Stanisława Konarskiego w Gorlicach',
//           details: 'Kindergarten Assistant',
//           date: '10/2018 - 01/2019',
//         },
//         {
//           firmname: 'Business Lingo',
//           details: 'Customer Service Advisor',
//           date: '01/2018 - 06/2018',
//         },
//       ],
//     },
//     {
//       category: 'EDUCATION',
//       items: [
//         'Studia na Uniwersytecie ABC',
//         'Kurs programowania w XYZ Academy',
//         'Inne',
//       ],
//     },
//     {
//       category: 'COURSES & CERTIFICATES',
//       items: ['Nagroda za osiągnięcia naukowe', 'Nagroda za projekt Y'],
//     },
//     { category: 'AWARDS & ACHIEVEMENTS', items: ['Gra na pianinie'] },
//     { category: 'PASSION', items: ['Gra na pianinie'] },
//   ];

//   return (
//     <table>
//       {data.map((row, index) => (
//         <React.Fragment key={index}>
//           {row.items.map((item, idx) => (
//             <tr key={`${index}-${idx}`}>
//               {idx === 0 && (
//                 <td className="td1style" rowSpan={row.items.length}>
//                   {row.category}
//                 </td>
//               )}
//               <td className="tdstyle">
//                 <div className="tddivstyle">
//                   <strong>{item.firmname}</strong>
//                   <p>{item.details}</p>
//                   <p>{item.date}</p>
//                 </div>
//               </td>
//               {idx === 0 && (
//                 <td rowSpan={data[0].items.length}>
//                   {data[0].additionalInfo[idx]}
//                 </td>
//               )}
//             </tr>
//           ))}
//         </React.Fragment>
//       ))}
//     </table>
//   );
// };
import React, { useState } from 'react';

export const Table = () => {
  const [data, setData] = useState([
    {
      category: 'EXPERIENCE',
      items: [
        {
          id: 1,
          name: 'Pomeranian START.IT',
          details: '3-months course',
          date: '04/-07/2023',
        },
        {
          id: 2,
          name: 'Firma XYZ',
          details: 'Opis doświadczenia w Firmie XYZ...',
          date: '2021 - 2022',
        },
        // Dodaj więcej elementów w ramach "Doświadczenia"
      ],
      additionalInfo: [
        { id: 1, info: 'Dodatkowe informacje o Doświadczeniu 1...' },
        { id: 2, info: 'Dodatkowe informacje o Doświadczeniu 2...' },
        // Dodaj więcej dodatkowych informacji dla kategorii "Doświadczenie"
      ],
    },
    // Dodaj pozostałe kategorie i ich elementy oraz dodatkowe informacje
  ]);

  return (
    <table
      style={{ borderCollapse: 'collapse', width: '60%', margin: '20px auto' }}
    >
      {data.map((category, categoryIndex) => (
        <React.Fragment key={categoryIndex}>
          <tr>
            <td
              rowSpan={Math.max(
                category.items.length,
                category.additionalInfo.length
              )}
              style={{ padding: '10px', textAlign: 'center' }}
            >
              {category.category}
            </td>
            <td style={{ padding: '10px', textAlign: 'center' }}>
              {category.items.map((item) => (
                <div key={item.id}>
                  <strong>{item.name}</strong>
                  <p>{item.details}</p>
                  <p>{item.date}</p>
                </div>
              ))}
            </td>
            {category.additionalInfo.map((info) => (
              <td
                key={info.id}
                style={{ padding: '10px', textAlign: 'center' }}
              >
                {info.info}
              </td>
            ))}
            {category.additionalInfo.length === 0 && (
              <td style={{ padding: '10px', textAlign: 'center' }}></td>
            )}
            {category.additionalInfo.length < category.items.length && (
              <td
                style={{ padding: '10px', textAlign: 'center' }}
                rowSpan={category.items.length - category.additionalInfo.length}
              ></td>
            )}
            {category.additionalInfo.length > category.items.length && (
              <td
                style={{ padding: '10px', textAlign: 'center' }}
                rowSpan={category.additionalInfo.length - category.items.length}
              ></td>
            )}
          </tr>
        </React.Fragment>
      ))}
    </table>
  );
};
