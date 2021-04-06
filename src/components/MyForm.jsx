import { React, useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import axios from "axios";
import MyList from "./MyList";

const MyForm = () => {
   const [count, setCount] = useState({
      minLength: 0,
      number: 0,
      symbol: 0,
      total: 0,
   });

   const [passwords, setPasswords] = useState([]);

   const handleChange = (event) => {
      setCount({ ...count, [event.target.name]: event.target.value });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      Object.values(count).forEach((item) => {
         if (item > 0) {
            axios
               .post(
                  `https://password-generator-challenge.herokuapp.com/api/${count.minLength}/${count.number}/${count.symbol}/${count.total}`,
                  {
                     count,
                  }
               )
               .then((res) => {
                  const { result } = res.data.data;
                  setPasswords(result);
                  setCount({
                     ...count,
                     minLength: 0,
                     number: 0,
                     symbol: 0,
                     total: 0,
                  });
               });
         }
      });
   };

   return (
      <div className="container">
         <Form onSubmit={handleSubmit} className="mt-5">
            <h4 className="text-center offset-3 col-4 mb-3">
               Please enter the values
            </h4>
            <div className="row">
               <div className="offset-md-3 col-md-4">
                  <FormGroup row>
                     <Label className="text-light" for="numberInput" sm={6}>
                        Min Length
                     </Label>
                     <Col sm={6}>
                        <Input
                           invalid={count.minLength < 0 ? true : false}
                           value={count.minLength}
                           onChange={handleChange}
                           type="number"
                           name="minLength"
                           id="minLength"
                           placeholder="please give a number"
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label className="text-light" for="numberInput" sm={6}>
                        Number
                     </Label>
                     <Col sm={6}>
                        <Input
                           invalid={count.number < 0 ? true : false}
                           value={count.number}
                           onChange={handleChange}
                           type="number"
                           name="number"
                           id="numberInput"
                           placeholder="please give a number"
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label className="text-light" for="numberInput" sm={6}>
                        Symbols
                     </Label>
                     <Col sm={6}>
                        <Input
                           invalid={count.symbol < 0 ? true : false}
                           value={count.symbol}
                           onChange={handleChange}
                           type="number"
                           name="symbol"
                           id="symbolInput"
                           placeholder="please give a number"
                        />
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                     <Label className="text-light" for="numberInput" sm={6}>
                        Total
                     </Label>
                     <Col sm={6}>
                        <Input
                           invalid={count.total < 0 ? true : false}
                           value={count.total}
                           onChange={handleChange}
                           type="number"
                           name="total"
                           id="totalInput"
                           placeholder="please give a number"
                        />
                     </Col>
                  </FormGroup>
                  <div className="text-center">
                     <Button type="submit">Generate Password</Button>
                  </div>
               </div>
            </div>
         </Form>
         <MyList passwords={passwords} />
      </div>
   );
};

export default MyForm;
