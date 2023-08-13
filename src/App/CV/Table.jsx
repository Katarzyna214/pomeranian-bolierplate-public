import React from 'react';
import './table.css';

export const Table = () => {
  // Dane do wypełnienia tabelki
  const data = [
    {
      category: 'EXPERIENCE',
      additionalInfo: [
        {
          info: 'an intensive three-month programming course, led by experienced trainers, encompassed numerous hours of live coding and hands-on work on diverse practical projects.This course provided participants with a solid and comprehensive foundation necessary for launching a career in the IT industry as a Frontend Developer.',
        },
        {
          info: 'complete / review client reporting ensuring accuracy and timeliness, answer queries from different departments, investigate and solve discrepancies, review and document process flows/procedures, involve in departmental ad-hoc projects, involve in the training and development of other team members (8 people), being a point of contact for any routine/escalation queries raised by internal departments,',
        },
        {
          info: `monitored department's progress against Key Performance Indicators, provided weekly, daily, and monthly reports to control and improve performance,
          managed shifts to ensure smooth workflow, responsible for Health & Safety rules, reviewed and improved the operating environment, maintained housekeeping standards created a positive team culture, motivated to provide solutions to team issues, considering relevant policies and ethical practices, completing of high-standard Right to Work (RTW),zac`,
        },
        {
          info: `picked and packed customer orders using RF handheld terminals and Warehouse Management Systems processed stock in an accurate manner using the appropriate methods demonstrated a systematic eye for detail to carry out accurate, high-quality, and efficient work to meet KPI targets received and checked customer returns ensured work areas were kept clean, neat, and well-organized`,
        },
        {
          info: `conducted English language classes and served as a homeroom teacher prepared and delivered engaging lessons following the teaching plan and adapting teaching materials to meet pupils' needsdeveloped instructional materials to support the teaching and learning processorganized extracurricular activities in English for interested pupilsmonitored pupils' behavior and fostered values and social skills development, arranged meetings with parents to discuss concernsparticipated in school projects, competitions, trips and cultural events`,
        },
        {
          info: `provided learning support to the boy with Asperger's syndrome, including duties listed below: assisted in organizing the child's after-school and in-school schedule, demonstrated simple social behaviors, such as appropriate verbal and non-verbal responses to others' behaviors assisted him with homework in humanities subjects monitored the boy's progress and behavior, documented observations, and communicated with teachers participated in consultations with parents, sharing information about the child's progress and addressing concerns`,
        },
        {
          info: `assisted the lead teacher in activities and daily routines for kindergarten children (up to 30 children in group) ensured children's safety and well-being during meals, naps, and outdo engaged children in age-appropriate learning through play and interactive, educational activities collaborated with the team on educational projects and events communicated with parents/guardians about their child's activities and progress participated in staff meetings and training sessions`,
        },
        {
          info: `translated various documents (memoQ CAT tool usage) / prepared documents for translation organized office work and maintained efficient workflows set deadlines for translators and proofreaders prepared cost estimates and deadlines for customers`,
        },
      ],
      items: [
        {
          firmname: 'Pomeranian START.IT',
          details: '3-months course',
          date: '04/-07/2023',
        },
        {
          firmname: 'State Street',
          details: 'Product Administrator',
          date: '05/2023 - present',
        },
        {
          firmname: 'Boohoo Group PLC (UK)',
          details: 'Team Manager',
          date: '04/2022 - 12/2022',
        },
        {
          firmname: 'Boohoo Group PLC (UK)',
          details: 'Warehouse Operative',
          date: '10/2020 - 04/2022',
        },
        {
          firmname: 'Zespoł Szkolno-Przedszkolny w Strzeszynie',
          details: ' English & Homeroom Teacher',
          date: '02/2019 - 08/2020 ',
        },
        {
          firmname: 'Szkoła Podstawowa im. Stanisława Konarskiego w Gorlicach',
          details: 'Learning Support Assistant',
          date: '10/2018 - 01/2019',
        },
        {
          firmname: 'Szkoła Podstawowa im. Stanisława Konarskiego w Gorlicach',
          details: 'Kindergarten Assistant',
          date: '10/2018 - 01/2019',
        },
        {
          firmname: 'Business Lingo',
          details: 'Customer Service Advisor',
          date: '01/2018 - 06/2018',
        },
      ],
    },
    {
      category: 'EDUCATION',
      items: [
        {
          firmname: 'Jagiellonian University',
          details: 'English Philology with German, Bachelor’s degree',
          date: '10/2013 – 06/2016',
        },
        {
          firmname: 'Pedagogical University of Cracow',
          details: 'Mathematics and Oligophrenic Pedagogy, Bachelor’s degree',
          date: '10/2013 – 06/2017 ',
        },
        {
          firmname: 'Pedagogical University of Cracow',
          details: 'Translation Studies, Master’s degree',
          date: '10/2016 – 06/2018',
        },
      ],
    },
    {
      category: 'COURSES & CERTIFICATES',
      items: [
        {
          details:
            'Developing key competences among students in relation to the implementation of the core curriculum (workshop of MCDN Nowy Sącz)',
          date: '02/2020',
        },
        {
          details:
            'Active teaching of a foreign language – methodological approach (workshop of MCDN Nowy Sącz)',
          date: '10/2019',
        },
      ],
    },
    {
      category: 'AWARDS & ACHIEVEMENTS',
      items: [
        {
          details: `Teacher's promotion with the occupational title of a contract teacher`,
          date: '06/2020',
        },
        {
          details:
            'University scholarship in Jagiellonian University for students with the highest average grade',
          date: '2014-2016',
        },
      ],
    },
    {
      category: 'PASSION',
      items: [
        {
          details:
            'new technologies, IT and programming, sport (jogging, cycling, swimming, skiing, skating), travels, detective stories and movies, movies subtitling and translation of legal/business texts',
        },
      ],
    },
  ];
  return (
    <table className="tablecv">
      {data.map((row, index) => (
        <React.Fragment key={index}>
          {row.items.map((item, idx) => (
            <tr className="tr1" key={`${index}-${idx}`}>
              {idx === 0 && (
                <>
                  <td className="td1style" rowSpan={row.items.length}>
                    {row.category}
                  </td>
                </>
              )}
              <td className="tdstyle">
                <div className="tddivstyle">
                  <strong>{item.firmname}</strong>
                  <p className="detailsparagraph">{item.details}</p>
                  <p>{item.date}</p>
                </div>
              </td>
              {idx === 0 && row.additionalInfo && (
                <td className="td2style" rowSpan={row.items.length}>
                  <ul className="additional-info-list">
                    {row.additionalInfo.map((info, infoIdx) => (
                      <li key={infoIdx}>
                        {/* <strong>{row.items[infoIdx].firmname}</strong> */}
                        <p>{info.info}</p>
                      </li>
                    ))}
                  </ul>
                </td>
              )}
            </tr>
          ))}
        </React.Fragment>
      ))}
    </table>
  );
};
