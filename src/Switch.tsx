import { useContext } from "react";
import { ACTION_NAME, AppContext } from "./AppProvider";

export const Switch = () => {
  const [state, dispatch] = useContext(AppContext);

  const apiComments =
    "https://my-json-server.typicode.com/typicode/demo/comments";

  console.log(state);

  const getComments = async () => {
    async function comments(apiComments: string) {
      try {
        const response = await fetch(apiComments);
        const json = await response.json();
        switch (response.status) {
          case 200:
            return json;
          case 400:
            throw new Error("Bad request, please try later");
        }
      } catch (e) {
        console.log(e);
      }
    }

    const json = await comments(apiComments);

    if (json) {
      dispatch({
        type: ACTION_NAME.UPDATE_COMMENTS,
        payload: json,
      });
    }
  };

  return (
    <div className="content">
      <button
        onClick={() => {
          dispatch({
            type: state.active ? ACTION_NAME.OFF : ACTION_NAME.ON,
            payload: "",
          });
        }}
      >
        Dispatch event and update Context
      </button>
      <button onClick={() => getComments()}>
        Get Comments and update Context
      </button>
      {state.active && <div className="active">Context active and working</div>}
      {state.comments.length > 1 && (
        <div className="active">
          <pre>{JSON.stringify(state.comments, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
