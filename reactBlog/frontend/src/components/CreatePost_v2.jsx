import React, { useState,useEffect,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Login.css";
import { AuthContext } from "../context/authContext";
import { useNavigate, Navigate } from "react-router-dom";
//import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage,useFormik } from "formik";

import { FormGroup, Button } from "react-bootstrap";
import axios from "axios";

import configData from "../config.json";
// const  modules  = {
//   toolbar: [
//       [{ font: [] }],
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ["bold", "italic", "underline", "strike"],
//       [{ color: [] }, { background: [] }],
//       [{ script:  "sub" }, { script:  "super" }],
//       ["blockquote", "code-block"],
//       [{ list:  "ordered" }, { list:  "bullet" }],
//       [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
//       ["link", "image", "video"],
//       ["clean"],
//   ],
// };
export default function CreatePost() {
  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const user_id = currentUser.id;
  const [formData, setFormData] = useState({
    titlu: "",
    continut: "",
    poza: "",
    categorie_id: "",
    user_id:user_id
  });
  const formik = useFormik({
    initialValues: {
      titlu: "",
      continut: "",
      poza: "",
      categorie_id: "",
      user_id:user_id
    }});
  
const [selectCategories, setSelectCategories]  = useState([{}]);
  

  
  const validationSchema = Yup.object().shape({
    titlu: Yup.string().required("Camp obligatoriu!"),
    continut: Yup.string().required("Camp obligatoriu!"),
    categorie_id: Yup.string().required("Camp obligatoriu!"),
    // poza:Yup.mixed().required("Camp obligatoriu!")
  });

  useEffect(() => {
    console.log("primesc datele");
    axios
      .get(configData.SERVER_POST_URL +'categories')
      .then(({ data }) => {
        console.log(data['data']);
        setSelectCategories(data['data']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = async (e) => {
    // Perform registration logic here, e.g., send form data to server
    
    axios
      .post(configData.SERVER_POST_URL,formData,
         {headers: {"Content-Type": "multipart/form-data",}}
         )
      .then((res) => {
        if (res.status === 200) {
          alert("Post successfully created");
          console.log(res.message);

          navigate("/view-posts");
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err.response.data);
      });
    // setFormData(values => ({}))
  };
  const loggedInUser = localStorage.getItem("authenticated");
  //alert(typeof loggedInUser);
  if (loggedInUser === "false") {
    // Redirect
    //alert(1234);
    return <Navigate replace to="/posts" />;
  } else {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Add New Post</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap px-4 px-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon="fa-solid fa-pen-nib" />
                </div>
                <h3 className="text-center mb-4">
                  Completeaza corect campurile!
                </h3>
                <Formik
                   initialValues={formData}
                  onSubmit={handleSubmit}
                  enableReinitialize
                  validationSchema={validationSchema}
                >
                  <Form>
                    <FormGroup>
                      <label htmlFor="titlu">Titlu</label>
                      <Field
                        name="titlu"
                        type="text"
                        className="form-control"
                        placeholder="Titlu"
                        onChange={handleInputChange}
                       />
                      <ErrorMessage
                        name="titlu"
                        className="d-block invalid-feedback"
                        component="span"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="continut">Continut articol</label>
                      {/* <ReactQuill
                        modules={modules}
                        name="continut"
                        className="editor"
                        theme="snow"
                        value={continut}
                        placeholder="Continut articol HTML"
                        rows="5"
                        
                       onChange={setContinut}
                      /> */}
                      <Field 
                        as="textarea" 
                        id="continut" 
                        name="continut"
                        className="form-control"
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Continut articol HTML" 
                      />
                      <ErrorMessage
                        name="continut"
                        className="d-block invalid-feedback"
                        component="span"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="poza">Poza</label>
                      <Field
                        name="file"
                        type="file"
                        id="poza"
                        className="form-control"
                        onChange={(e) =>
                          formik.setFieldValue('poza', e.currentTarget.files[0])
                        }
                        accept="image/*, .svg"
                     
                      />
                      <ErrorMessage
                        name="poza"
                        className="d-block invalid-feedback"
                        component="span"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="categorie_id">Categorie</label>
                      <Field
                        name="categorie_id"
                        as="select"
                        className="form-control"
                        onChange={handleInputChange}
                      >
                        <option key='0' value="">Select Categorie</option>
                        {selectCategories.map((option) => 
                        <option key={option.id} value={option.id}>
                            {option.nume}
                        </option>
                        )}
                      </Field>
                      <ErrorMessage
                        name="categorie_id"
                        className="d-block invalid-feedback"
                        component="span"
                      />
                    </FormGroup>

                    <FormGroup>
                    <Field
                        name="user_id"
                        type="hidden"
                        value={user_id}
                        onChange={handleInputChange}
                      />
                      <Button
                        variant="danger"
                        size="lg"
                        className=" btn btn-primary rounded submit p-3 px-5 mt-3"
                        block="block"
                        type="submit"
                      >
                        Inregistreaza-te
                      </Button>
                    </FormGroup>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
