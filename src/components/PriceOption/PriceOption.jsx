import PropsTypes from 'prop-types'
import { BsCheckCircleFill } from 'react-icons/bs';


const PriceOption = ({ option }) => {
    console.log(option.name);
    const { name, membership_fee, options } = option;
    return (
        <div className='bg-green-300 text-black p-5 rounded-lg py-8 '>
            <h4 className='text-center'><span className='text-5xl font-bold'>{membership_fee}</span>/mon</h4>
            <h2 className='text-4xl text-center'>{name}</h2>
            <div className='pl-20'>
                
                {
                    options.map((op, index) =>  <p className='flex items-center'
                    key={index}
                    ><BsCheckCircleFill className='mr-2 bg-red-200'></BsCheckCircleFill> {op}</p>)
                }
            </div>
            <button className='w-full text-white bg-green-400 font-bold py-2 rounded-lg mt-10 hover:bg-green-900'>Option</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropsTypes.object
}

export default PriceOption;