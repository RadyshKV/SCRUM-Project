import style from "./Hotel.module.css";
import img from "../../images/hotel_1.jpg";

export const Hotel_1 = () => {

  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Апартаменты</h3>
      <a className={style.link} src="#">Посмотреть ещё варианты</a>
    </div>
  );
};