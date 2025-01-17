import { cn } from '@/lib/utils';
import Marquee from './marquee';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: '/1.jpg',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: '/2.jpg',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/3.jpg',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/4.jpg',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/5.jpg',
  },
  
];


// const secondRow = reviews;

const ReviewCard = ({
  img,
body,
}: {
  img: string;
  body:string;

}) => {
  return (
    <figure
      className={cn(
        'relative w-20 h-20 cursor-pointer overflow-hidden rounded-xl border p-1',
        // light styles
        // 'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        // 'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='w-full rounded-md' width='32' height='32' alt='' src={img} />
        {/* <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div> */}
      </div>
      <blockquote className='mt-2 text-sm text-white'>{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className='relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#1c1313]  '>
      
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {reviews.map((review) => (
          <ReviewCard key={review.username} img={review.img} body={review.name} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1c1313] dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1c1313] dark:from-background'></div>
    </div>
  );
};

export default MarqueeDemo;
