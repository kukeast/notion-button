import { Route, Routes } from "react-router-dom";
import Theme from "./util/Theme";
import ThemeStore from "./util/ThemeStore";
import Editor from "./view/Editor";
import NotFound from "./view/NotFound";
import Share from "./view/Share";

function App() {
    return (
        <ThemeStore>
            <Theme>
                <Routes>
                    <Route path="/" element={<Editor/>}/>
                    <Route path="/share" element={<Share/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Theme>
        </ThemeStore>
    )
}
  
export default App;
  