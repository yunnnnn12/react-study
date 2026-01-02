import { getImageUrl } from './utils.js';

function Avatar({person, size = 100}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        /> 
    );
}

export default function Profile(){
    return(
        <div>
            <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi',
                imageId: 'Yfe0qp2'
            }}
        />
        <Avatar
            size={80}
            person={{
                name: 'Aklilu Lemma',
                imageId: 'OKS67lh'
            }}
        />
        <Avatar
            size={50}
            person={{
                name: 'Lin Lanying',
                imageId: '1bx5QH6'
            }}
        />
        </div>
    );
}
