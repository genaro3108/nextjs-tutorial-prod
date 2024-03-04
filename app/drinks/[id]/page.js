import Link from 'next/link';
import Image from 'next/image';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id) => {
  const response = await fetch(`${URL}${id}`);
  const data = await response.json();
  return data;
};


const SingleDrinkPage = async ({ params }) => {
  const data = await fetchDrink(params.id);
  console.log(data);
  const title = data?.drinks && data.drinks[0]?.strDrink;
  const imageSrc = data?.drinks && data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link
        href={'/drinks'}
        className='btn btn-primary my-8'
      >
        Back to Drinks
      </Link>
      <Image
        src={imageSrc}
        width={50}
        height={100}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority={true}
        alt={title}
      />
      <h1 className='text-4xl my-8'>{title}</h1>
    </div>
  );
}

export default SingleDrinkPage