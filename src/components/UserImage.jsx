import { Box } from "@mui/material";
import { serverUrl } from "constants";
const UserImage=({  image,size="60px"}) => {
    return(
        <Box width={size} height={size}>
            <img 
            style={{objectFit:"cover",borderRadius:"50%"}}
            width={size}
            height={size}
            alt="user"
            src={`${serverUrl}/assets/${image}`}>
            </img>
        </Box>
    )
}
export default UserImage;