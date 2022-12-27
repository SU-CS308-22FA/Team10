import { Button} from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import image from "./loginfirst.png"

const NotAuthError= () => {
    const navigate = useNavigate();
    function handleCancelClicked() {
        console.log("Cancelled");
        navigate("/main");
      }
      function handleVerifyClicked() {
        console.log("Sent to verification screen");
        navigate("/profile/verify");
      }
    return (
        <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form
                className={styles.form_container}
                onSubmit={handleVerifyClicked}
            >
                
                <img src={image} width={850} height={350} />
                <h3>Verify your account if you are a TFF offical, journalist, former referee, or football anchor.</h3>

                <button
                stype="button"
                className={styles.green_btn}
                onClick={handleVerifyClicked}
                >
                Verify
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
