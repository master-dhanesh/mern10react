const Show = (props) => {
    const users = props.users;
    const setusers = props.setusers;

    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
    };

    return (
        <ol>
            {users.length > 0
                ? users.map((user, index) => (
                      <li key={index}>
                          {user.username} &nbsp;
                          <span onClick={() => DeleteHandler(index)}>❌</span>
                      </li>
                  ))
                : "No User Found"}
        </ol>
    );
};

export default Show;
