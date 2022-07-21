// import React from 'react'
// import { 
//     CtForm, 
//     CtTitlePrincipal, 
//     Form, 
//     Input,
//     InputDescription,
//     CtButton,
//     BtCancel,
//     TxtPrincipal,
//     CtTxt,


// } from './FormCompra.styled';

// function FormCompra() {

//     const {id} = useParams();
//     const [newMoment, setNewMoment] = useState({});
//     const [moments, setMoments] = useState([]);
//     const navigate = useNavigate();
  
  
//     useEffect(() => {
//       if (id){
//         getMomentById(id) 
//       }else{
//         resetInputsForm()
//       }
//     }, [id]);
  
  
  
//    // Funció per cridar la id del moment
//    const getMomentById = (id) => {
//     momentServices.getMomentById(id).then((res) => {
//       if (res) {
//       setNewMoment(res);
//       }
//     });
//   };
  
//   // Actualitza l'estat
//   const onInputChange = (e) => {
//         setNewMoment({ ...newMoment, [e.target.name]: e.target.value });
//       };
  
  
//   const handleSubmitCreateUpdate = (e) => {
//         e.preventDefault();
  
//         !id? 
//         createMoment(newMoment)
//         :updateMoment(newMoment);
  
  
//         // navigate('/', {replace: true});
//         resetInputsForm();
//     };
  
  
//   const handleReset = () => {
//       navigate('/', {replace: true});
//     }
  
  
//   // Funció per crear un moment
//   const createMoment = (data) => {
//       momentServices.createMoment(data).then((res) => {
//         setMoments([...moments, res]);
//         // if(res);
//       });
//       resetInputsForm();
//       navigate('/', {replace: true});
  
//     }
  
//   //Funció que serveix per buidar el formulari
//   const resetInputsForm = () => {
//     setNewMoment({id:'', title:'', imgUrl:'',description:''})   
//   };
  
  





    
//   return (
//     <>
//     <CtForm>
//     <Form onSubmit={handleSubmitCreateUpdate}>
//       <CtTitlePrincipal> 
//     <TxtPrincipal>FORM</TxtPrincipal>
//     </CtTitlePrincipal>
//       <CtTxt>Title</CtTxt>
//           <Input
//             onChange={onInputChange}
//             value={product.title}
//             name="title"
//             type="text"
//             placeholder="Title..."
//           ></Input>
//         <CtTxt>Imatge</CtTxt>
//           <Input
//             onChange={onInputChange}
//             value={product.imgUrl}
//             name="imgUrl"
//             type="url"
//             placeholder="Paste Img url here..."
//           ></Input>
//         <CtTxt>Description</CtTxt>
//           <InputDescription
//             onChange={onInputChange}
//             value={product.description}
//             name="description"
//             placeholder="Text description..."
//           ></InputDescription>
//           <CtButton>
//             {id   //Condició per fer que canvi de botó segons el que volem fer
//             ? <BtEdit type="submit">EDIT</BtEdit>
//             : <BtEdit type="submit">SUBMIT</BtEdit>
//             } 
//             <BtCancel type="reset" onClick={handleReset}>CANCEL</BtCancel>

//             </CtButton>
//         </Form>
//         </CtForm>
//     </>
//   );
// }
// export default FormCompra