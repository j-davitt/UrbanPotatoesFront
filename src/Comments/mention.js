import {useState} from "react"
import { Mention, MentionsInput } from 'react-mentions';
import defaultMentionStyle from './defaultMentionStyle';
import defaultStyle from './defaultStyle';
import { getComments as getCommentsApi } from "../api";

const users = [
  {
    id:"jack",
    display: "Jack"
  }
]

const fetchUsers = (query, callback) => {
  if(!query) {
    return
  }
  setTimeout(()=> {
    const filteredUsers = users.filter((user) =>
    user.display.toLocaleLowerCase().includes(query)
    );
    callback(filteredUsers);
  }, 2000);
};


const Mentions = () => {
  const [value, setValue] = useState("");
  return (
    <div>
    <MentionsInput 
    singleLine
    style={defaultStyle}
    value={value}
    onChange={(e)=> setValue(e.target.value)}
    placeholder={"To mention someone use '@"}
    a11ySuggestionsListLabel={"Suggested Mentions"}

    >
      <Mention style={defaultMentionStyle} data={fetchUsers}>
      </Mention>
    </MentionsInput>

    </div>
  )
}

export default Mentions;