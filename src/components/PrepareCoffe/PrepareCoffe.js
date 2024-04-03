import './PrepareCoffe.css'

function PrepareCoffe() {
    return (
        <div className='PrepareCoffe'>
            <div className="PrepareCoffeDivButtons">
                <div className="PrepareCoffeP">
                    <p>coffe gr</p>
                </div>
                <div className="PrepareCoffeButtons">
                    <span className="Rest">-</span>
                    <p className='Count'>0</p>
                    <span className="Plus">+</span>
                </div>
            </div>
            <div className="PrepareCoffeDivButtons">
                <div className="PrepareCoffeP">
                    <p>water ml</p>
                </div>
                <div className="PrepareCoffeButtons">
                    <span className="Rest">-</span>
                    <p className='Count'>0</p>
                    <span className="Plus">+</span>
                </div>
                </div>
            <div className="Cups">
                <div className="Cups-p">
                    <p>cups</p>
                </div>
                <div className="PrepareCoffeButtonsCup">
                    <span className="Rest">-</span>
                    <p className="Count CountCup">0</p>
                    <span className="Plus">+</span>
                </div>
            </div>
        </div>
    )
}

export { PrepareCoffe }