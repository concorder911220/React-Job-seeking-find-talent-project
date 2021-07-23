import styled from "styled-components"

const Wrapper=styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: #FFF;
z-index: 100;
display: flex;
flex-direction: row;
align-items: stretch;
border-radius: 5px;
min-height: 0;
width: 752px;
max-width: 752px;
`;

const Left = styled.div`
width: 240px;
overflow-y: auto;
padding: 16px;
border-radius: 5px;
background-color: #ecf4ff;
font-size: 14px;
line-height: 1.5;
span{
    font-size: 12px;
    color: grey;
}
div{
    display: flex;
}
div>img{
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 5px;
}

ul{
    list-style: none;
    margin-bottom: 10px;
}
ul>li{
    margin-left: 0;
}
`;

const Right = styled.div`
padding: 16px;
width: 100%;
span{
    font-size: 12px;
    color: grey;
}
div{
    display: flex;
    justify-content: flex-end;
    margin: 15px;
}
div>button:nth-child(2){
    background-color: #0f6fff;
    border-color: #0f6fff;
    color: #fff;
    padding: 10px 40px;
    border-radius: 5px;
}
div>button:nth-child(1){
    background-color: white;
    border: none;
    color: grey;
    padding: 10px 40px;
    border-radius: 5px;
}
div>button:nth-child(1):hover{
    background-color: #81b5ff;
    color: #fff;
}

`;


const Overlay=styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,.7);
z-index: 100;
`;

export function ApplyModal({open,onClose,data}){
    if(open){
        document.body.style.overflow='hidden'
    }
    else{
        document.body.style.overflow='unset'
    }
    if(!open) return null
    return(
        <>
        <Overlay></Overlay>
        <Wrapper>
            <Left>
                <span>APPLY TO</span>
                <div>
                    <img src={data.image} alt="" />
                    <h3>{data.name}</h3>
                </div>
                <ul>
                    <li>{data.job}</li>
                </ul>
                <ul>
                    <li>Location</li>
                    <li>{data.location}</li>
                </ul>
                <ul>
                    <li>Salary</li>
                    <li>₹{data.salaryMin}L-₹{data.salaryMax}L</li>
                </ul>
            </Left>
            <Right>
                <span>YOUR APPLICATION</span>
                <hr />
                <div>
                <button onClick={onClose}>Cancel</button>
                <button>Send application</button>
                </div>
            </Right>
        </Wrapper>
        </>
    )
}