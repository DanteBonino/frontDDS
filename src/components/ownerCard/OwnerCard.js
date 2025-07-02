import Avatar from '@mui/material/Avatar';
import "./OwnerCard.css"
import { rojo } from '../../utils/utils';
const OwnerCard = ({owner}) => {
    return (
        <div className='ownerCard'>
             <Avatar src="/broken-image.jpg" sx={{ width: 36, height: 36, bgcolor:rojo }}/>
            <div>
                Anfitrión: {owner.nombre}
            </div>
        </div>
    )
}

export default OwnerCard