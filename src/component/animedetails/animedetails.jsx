import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const StyledDetailContainer = styled.div`
display: flex;
justify-content: center;
  
`;
function AnimeDetails() {
 const location = useLocation();
 const { id } = useParams();
  return <StyledDetailContainer></StyledDetailContainer>;
}

export default AnimeDetails;
