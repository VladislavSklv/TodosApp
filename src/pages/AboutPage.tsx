import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iste nesciunt ex, vero eveniet soluta corrupti in commodi ad neque cum voluptatibus id ab porro dicta quo a numquam harum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente itaque vitae magnam possimus quaerat quam at maxime molestias voluptatem assumenda quia nisi aperiam, quasi dolore laborum commodi nesciunt asperiores esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis veniam dolorum ipsum reprehenderit esse dicta neque facilis animi laboriosam porro sed voluptatem optio, similique deleniti. Inventore provident commodi eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt aliquid optio ad, quisquam suscipit possimus voluptatum, mollitia repellat ipsum est consequuntur, iure eius? Vitae est impedit debitis repellat iure!</p>
            <button onClick={() => navigate('/')} className='btn purple darken-2'>Go back</button>
        </div>
    );
};

export default AboutPage;