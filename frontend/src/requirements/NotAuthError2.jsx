import { Button} from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import image from "./403.png"

const NotAuthError= () => {
    const navigate = useNavigate();
    function handleCancelClicked() {
        console.log("Cancelled");
        navigate("/");
      }
      function handleLoginClicked() {
        console.log("Sent to login screen");
        navigate("/login");
      }
    return (
        <div className={styles.login_container}>
        <div name = "login-error-message" className={styles.login_form_container}>
          <div className={styles.left}>
            <form
                className={styles.form_container}
                onSubmit={handleLoginClicked}
            >
                
                <img src={image} width={850} height={350} />
                <h3>Please log in if you want to rate or comment on them.</h3>

                <button
                stype="button"
                className={styles.green_btn}
                onClick={handleLoginClicked}
                >
                Login
                </button>
                <h3></h3>
                <h3></h3>
                <h3></h3>
                <h3></h3>
                <h1></h1>
                <h2></h2>
                <h3>Click here to go back to home page. </h3>
                <button
                stype="button"
                className={styles.gray_btn}
                onClick={handleCancelClicked}
                >
                Cancel
                </button>
            </form>
            </div>
            </div>
            </div>
    )
}

export default NotAuthError
