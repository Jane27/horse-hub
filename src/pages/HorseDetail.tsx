import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { store as HorseStore } from "../store/index"
import { IHorse } from "../types";
import { TextField } from "../components";
import { useQuery } from "../hooks/useQuery";
import { observer } from 'mobx-react';

const HorseDetail: React.FC<any> = () => {
  const query = useQuery();
  const id = query.get("id");
  const horse = HorseStore.horses.find((h) => h.id === id);

  useEffect(() => {
    const load = async () => {
      if (!horse && id) {
        HorseStore.loadHorse(id);
      }
    }
    load();
  }, [])

  return (
    <div>
      <h3>{id ? "Horse Detail" : "Add Horse"}</h3>
      <div>
        <div>
          <Formik
            initialValues={horse || {}}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              if (id) {
                HorseStore.updateHorse(values as IHorse);
              } else {
                HorseStore.addHorse(values as IHorse);
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextField label="Name" name="name" />
                <TextField
                  label="Favourite Food"
                  name="profile.favouriteFood"
                />
                <TextField
                  type="number"
                  label="Height"
                  name="profile.physical.height"
                />
                <TextField
                  type="number"
                  label="Weight"
                  name="profile.physical.weight"
                />
                <button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <h4>
        <Link to="/">Back</Link>
      </h4>
    </div>
  );
};

export default observer(HorseDetail);
