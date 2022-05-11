import Button from './button'

export default function ButtonGrid() {
    let letters =
        'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',');
    ;
    let buttons = letters.map((letter, index) => (
        <Button
            value={letter}
            key={index} 

            />
    ))
    return (
        <div>
            {buttons}
        </div>
    )
}