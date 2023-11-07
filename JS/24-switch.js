const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'btc':
        console.log('Pagaste con btc');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default: 
    console.log('Aún no pagaste');
    break;
}