# LinkedIn-Clone
This is a LinkedIn-Clone Site built with React

```javascript
import { useNavigate } from "react-router-dom";
let navigate = useNavigate();

useEffect(() => {
   if (LoggedIn){
      return navigate("/");
   }
},[LoggedIn]);

```