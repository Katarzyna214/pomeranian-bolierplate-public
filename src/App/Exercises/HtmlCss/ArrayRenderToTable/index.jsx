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
        <tbody className='tabel'>
          <tr className='rowparz'>
          <th className='row1 numer1' >Band Name</th>
          <th className='row1 numer2'  > Year Formed</th>
          <th className='row1 numer3'> Albums</th>
          <th className='row1 numer4'> Most Famous Song</th>
        </tr>
        {bands.map(({band, yearFormed, albums, mostFamousSong}) => (
          <tr key = {band}>
            <td className='rowniep n1'>{band}</td>
            <td className='rowniep n2'>{yearFormed}</td>
            <td className='rowniep n3'>{albums}</td>
            <td className='rowniep n4'>{mostFamousSong}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
  );
}
