import React, { useContext } from 'react';
import { drawContext } from 'components/App';
import 'styles/draw.scss';

const Draw = () => {
    const draw = useContext(drawContext);

    return (
        <section className="draw">
            <h2 className="draw__title">Tirage</h2>
            <div className="draw__container">
                <div className="draw__container__result">  
                <div className="draw__container__result__numbers">
                    {
                        draw.numbers.map(number => <span key={number} className="draw__container__result__numbers__number">{number}</span>)
                    }
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