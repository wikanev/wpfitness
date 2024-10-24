import MuscleList from '../component/muscleList';
import SearchExercises from '../component/search';
import Header from '../component/header';
import Footer from '../component/footer';
import './main.css';



export default function Main() {
    return (
        <>
        <Header />
        <div className='main'>
            
            <SearchExercises />
            <MuscleList />            
        </div>
        <Footer />
        </>
    );
}
    