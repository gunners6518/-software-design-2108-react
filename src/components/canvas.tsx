import {useEffect,useRef} from "react"

export const Pie=(props:any)=>{
    const {percent, color ="#ff0000"} =props

    const canvasRef =useRef();

    // useEffectでcanvasコンポーネントに円になるような値を渡している
    useEffect(()=>{
        // @ts-ignore
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0,0,100,100);
        ctx.fillstyle = color;
        ctx.beginPath();
        ctx.moveTo(50,50);
        ctx.arc(50,50,50,0,(percent /100) * Math.PI * 2,false);
        ctx.lineTo(50,50);
        ctx.fill();


    },[])

    // @ts-ignore
    return <canvas ref={canvasRef} width={100} height={100}/>;

}

export const Cercle=()=>{
    return <Pie percent={80}></Pie>
}