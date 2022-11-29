import * as React from 'react';
import './style.css';
import './Form.tsx';
export default function App() {
  const [state, setState] = React.useState([]);

  const [saveData, setsaveData] = React.useState([]);

  const Savedatamain = (key, index, value) => {
    for (var i = 0; i < state.length; i++) {
      let newObj = state[i];
      if (index === i) {
        newObj[key] = value;
      }
    }
  };
  const CreateForm = () => {
    let objectContainer = {
      Name: '',
      surname: '',
      location: '',
    };

    const secondArray = [...state];
    secondArray.push(objectContainer);
    setState(secondArray);
    console.log(state);
  };
  return (
    <div>
      <button onClick={CreateForm}>Click</button>
      <button>Save</button>
      {state?.map((item, index) => {
        return (
          <div>
            <div>
              <p>NAME</p>
              <input
                type="text"
                onChange={(e) => Savedatamain('Name', index, e.target.value)}
              />
            </div>
            <div>
              <p>SURNAME</p>
              <input
                type="text"
                onChange={(e) => Savedatamain('surname', index, e.target.value)}
              />
            </div>
            <div>
              <p>LOCATION</p>
              <input
                type="text"
                onChange={(e) =>
                  Savedatamain('location', index, e.target.value)
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
