import ImgFile from './assets/ic-reset.svg';
const ButtonStyle ={
        position: 'absolute',
        top: '48px',
        right: '49px',
        cursor: 'pointer',
        backgroundColor: '#6f00ff',
        textDecoration : 'none',
        border: '0',
}
function Button({ onClick }) {
    return <button style ={ButtonStyle} onClick={onClick}><img src = {ImgFile} alt="초기화"/></button>;
}

export default Button;
