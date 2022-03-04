import React, { useContext } from 'react';
import { newDraw } from 'utils/newDraw';
import { drawContext } from 'components/App';
import 'styles/draw.scss';

const Draw = ({
    setDrawState
}) => {
    const draw = useContext(drawContext);

    const handleLaunchNewDraw = () => {
        setDrawState(newDraw());
    }

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
                        {
                            draw.stars.map(star => <span key={star} className="draw__container__result__stars__star">{star}</span>)
                        }
                    </div>
                </div>
                <button onClick={handleLaunchNewDraw} className="draw__container__button">Nouveau tirage</button>
            </div>
        </section>
    )
}

export default Draw