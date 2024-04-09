import "./App.css";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import styles from "./App.module.css";
import image from "./assets/illustration-sign-up-desktop.svg";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const isValid = (text: string) => {
    console.log("t", text);
    const pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(text)) {
      return true;
    } else return "valid email required";
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Stay updated!</h1>
        <p>Join 60000+ product managers receiving monthly updaten on:</p>
        <ul className={styles.ulStyle}>
          <li className={styles.liStyle}>Product discovery</li>
          <li className={styles.liStyle}>Measuring</li>
          <li className={styles.liStyle}>and much more </li>
        </ul>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.head} >
            <label htmlFor="email" className={styles.lab}>
              E-mail adress
            </label>
            {errors?.email?.message ? (
              <div className={styles.error}>{errors.email.message.toString()}</div>
            ) : (
              ""
            )}
          </div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              validate: isValid || "That URL is not valid!",
            }}
            render={({ field }) => (
              <Input 
              placeholder="enter email" 
              id="email" {...field} 
              className={`${errors?.email?.message ? styles.errorBg : ''}`}
              />
            )}
          />

          <Button className={styles.btn} type="primary" htmlType="submit">
            Subscribe to monthly news
          </Button>
        </form>
      </div>

      <div className={styles.right}>
        <img src={image} />
      </div>
    </div>
  );
}

export default App;
