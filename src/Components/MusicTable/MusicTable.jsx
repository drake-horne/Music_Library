
const MusicTable = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th>number</th>
            <th>title</th>
            <th>artist</th>
            <th>album</th>
            <th>release date</th>
            <th>genre</th>
          </tr>
        </thead>
        <tbody>
          {props.parentSongs.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.title}</td>
                <td>{entry.artist}</td>
                <td>{entry.album}</td>
                <td>{entry.release_date}</td>
                <td>{entry.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
 
export default MusicTable;