var modelName="";

async function fetchData() {
await fetch("http://localhost:3000/api/user/po")
  .then((response) => response.json()).then((data)=> {console.log(data.name); modelName=data.name;
  }).catch((err)=>{
    console.log(err);
  })
  let body=document.querySelector("body");
  let div=document.createElement("div");
  div.innerHTML=`<model-viewer id="modelId" src="https://unicorngtbit.s3.ap-south-1.amazonaws.com/${modelName}.glb" alt="A 3D model of a car" shadow-intensity="1" camera-controls autoplay auto-rotate ar >
  </model-viewer>`;
  body.prepend(div);
}
fetchData();
