import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Hi all , my name is Truong , my friends call me is Meou , Im 21 years old , Im in 4 year of Education University Da Nang , I love play chess with my friend , sometime I play computer game with my brother , I really like to travel , I am a honest and hardworking , I am willing to learn and listen to everything from colleagues and boss !
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 20 Thanh Thai , Da Nang 
              </p>
              <p>
                <strong>Email:</strong> meomaybeu@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0387707493
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Vietnamese
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
              <p>
                <strong>Third Language</strong> - Japanese
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
