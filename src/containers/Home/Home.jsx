import { styled } from "styled-components";
import { LayoutPageHeader } from "../../components/LayoutPage/LayoutPageHeader";
import { LayOutPageFooter } from "../../components/LayoutPage/LayOutPageFooter";
import { LayOutPageSection } from "../../components/LayoutPage";
import { ElementPageFollow } from "../../components/ElementPage";

const Container = styled.div`
    /* max-width: 1300px;
    margin: 0 auto; */
`
const Home = () =>{
    return(
        <Container>
            <LayoutPageHeader>
                
            </LayoutPageHeader>

            <LayOutPageSection>
                
            </LayOutPageSection>

            <ElementPageFollow></ElementPageFollow>

            <LayOutPageFooter>
                
            </LayOutPageFooter>
            
        </Container>
    )
}

export default Home;