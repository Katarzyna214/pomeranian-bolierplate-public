import './styles.css';

export function ArrayRenderToTable() {
  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  return (
    <div className='tabela'>
      <table className='tabelka'>
       
          <tr className='row1'>
          <th className='col thead' >Band Name</th>
          <th className='col thead' > Year Formed</th>
          <th className='col thead'> Albums</th>
          <th className='col thead'> Most Famous Song</th>
        </tr>
        {bands.map(({band, yearFormed, albums, mostFamousSong}) => (
          <tr className='row' key = {band}>
            <td className='col'>{band}</td>
            <td className='col'>{yearFormed}</td>
            <td className='col'>{albums}</td>
            <td className='col'>{mostFamousSong}</td>
          </tr>
        ))}
      </table>
      </div>
  );
}
