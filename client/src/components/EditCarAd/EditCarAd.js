import styles from "./EditCarAd.module.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useCarAdContext } from "../../contexts/CarAdContext";
import { useForm } from "../../hooks/useForm";
import * as carAdService from "../../services/carAdService";

export const EditCarAd = () => {
  const { onCarAdEditSubmit } = useCarAdContext();
  const { carAdId } = useParams();

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      brand: "",
      model: "",
      imageUrl: "",
      year: "",
      mileage: "",
      price: "",
      ownerPhone: "",
      description: "",
    },
    onCarAdEditSubmit
  );

  useEffect(() => {
    carAdService.getOne(carAdId)
     .then((result) => {
      changeValues(result);
    });
  }, [carAdId]);

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={onSubmit}>
        <label className={styles["form-label"]}>
          Brand:
          <input
            type="text"
            name="brand"
            value={values.brand}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          Model:
          <input
            type="text"
            name="model"
            value={values.model}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          Year:
          <input
            type="text"
            name="year"
            value={values.year}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          Mileage:
          <input
            type="text"
            name="mileage"
            value={values.mileage}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          Price:
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          OwnerPhone:
          <input
            type="text"
            name="ownerPhone"
            value={values.ownerPhone}
            onChange={changeHandler}
            className={styles["form-input"]}
          />
        </label>
        <label className={styles["form-label"]}>
          Description:
          <textarea
            name="description"
            value={values.description}
            onChange={changeHandler}
            className={styles["form-textarea"]}
          />
        </label>
        <button type="submit" className={styles["form-button"]}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCarAd;
