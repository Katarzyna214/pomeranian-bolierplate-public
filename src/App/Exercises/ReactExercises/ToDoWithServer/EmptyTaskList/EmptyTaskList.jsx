import './EmptyTaskList.css';

export function EmptyTaskList({ addTask, isError, getData }) {
  const textButton = isError ? 'Odśwież widok' : 'Odśwież widok';
  const action = isError ? getData : addTask;
  const title = isError
    ? 'Przepraszamy! Nie udało się pobrać listy zadań'
    : 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.';
  return (
    <div>
      <p className="todopar">{title}</p>
      <button className="button-add-addtask" onClick={action}>
        {textButton}
      </button>
    </div>
  );
}
