
import { useRouter } from 'next/router';
import Bannerdetail from './BannerDetail';
import styles from './banner.module.scss';
// import data from "../../../data/services.json";

const Card = ({slug, data}:any) => {  
  const {query} = useRouter();

      return (
        <>
          <div className={styles.container}>
            <h1>
              Services We Offer
            </h1>
            <div className={styles.overlay}>
            {data?.map(({ title, description, url}:any, i:number) => {
              // console.log(query)
                return (
                  <Bannerdetail
                    key={i.toString()}
                    counter={i+1}
                    title={title}
                    description={description}
                    url={url}
                    slug = {slug}
                    query={query}
                  />
                );
              })}
            </div>
          </div>
        </>
      );
    };

export default Card