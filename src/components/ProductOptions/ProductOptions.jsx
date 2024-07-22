import "./ProductOptions.css";

export function ProductOptions() {
    return (
        <section className="product-options-container">
            <h3>Tamanho</h3>

            <div>
                <span>39</span>
                <span>40</span>
                <span className="active">41</span>
                <span>42</span>
                <span>43</span>
            </div>

            <h3>Cores</h3>

            <div>
                <span></span>
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}
