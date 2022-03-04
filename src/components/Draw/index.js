import React from 'react';
import 'styles/draw.scss';

const Draw = () => {
    return (
        <section className="draw">
            <h2 className="draw__title">Tirage</h2>
            <div className="draw__container">
                <div className="draw__container__result">  
                <div className="draw__container__result__numbers">
                    <span className="draw__container__result__numbers__number">7</span>
                    <span className="draw__container__result__numbers__number">9</span>
                    <span className="draw__container__result__numbers__number">16</span>
                    <span className="draw__container__result__numbers__number">18</span>
                    <span className="draw__container__result__numbers__number">22</span>
                </div>
                <div className="draw__container__result__stars">
                    <span className="draw__container__result__stars__star">3</span>
                    <span className="draw__container__result__stars__star">9</span>
                </div>
                </div>  
                <button className="draw__container__button">Nouveau tirage</button>
            </div>
        </section>
    )
}

export default Draw