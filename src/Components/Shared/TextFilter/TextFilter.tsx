import { useState, ChangeEvent} from "react";
import "./TextFilter.css";
import { Text1 } from "../../../Models/TextFilterModel";
import store from "../../../Redux/Store";
import { updateText } from "../../../Redux/TextFilterState";
import { useDispatch } from "react-redux";

function TextFilter(): JSX.Element {
    const dispatch = useDispatch();
    const [text, setText] = useState<Text1>(store.getState().textReducer.text);
      
    const changeText = () => {
        if (text === 'light') {
            setText('dark');
        } else {
            setText('light');
        }

        // store.dispatch(toggleTheme(theme));
        dispatch(updateText(text));
    }
    
    return (
        <div className="TextFilter">
		 <input
            type="text"
            placeholder={'aaaa'}
            value={'light'}
            onChange={changeText}
          />

        </div>
    );
}

export default TextFilter;
