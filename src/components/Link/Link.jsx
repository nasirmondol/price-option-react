import PropsTypes from 'prop-types'


const Link = ({route}) => {
    return (
        <div className='mr-6'>
            <li key={route.id}><a href={route.pathName}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropsTypes.object
}

export default Link;